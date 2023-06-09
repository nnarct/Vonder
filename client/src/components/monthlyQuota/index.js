import moment from "moment";
import fetchInfo from "../../api/fetchInfo";
import { useEffect, useState } from "react";
import { SectionWrapper } from "../sectionWrapper";
import { SubHeader } from "../subHeader";
import { Box } from "../box";
import { GraySmallText } from "../graySmallText";

export const MonthlyQuota = () => {
  const [info, setInfo] = useState(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    fetchInfo().then((data) => {
      setProgress((data.remainingQuota / data.totalQuota) * 100);
      setInfo(data);
    });
  }, []);
  return (
    <>
      <SectionWrapper>
        <SubHeader className="text-xl font-bold tracking-tighter">
          Monthly Quota
        </SubHeader>
        <Box>
          <div className="flex justify-between">
            <GraySmallText>Total Remaining</GraySmallText>
            <span className="text-sm font-semibold">
              {Math.floor(info?.remainingQuota).toLocaleString()}/
              {Math.floor(info?.totalQuota).toLocaleString()} {info?.currency}
            </span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <GraySmallText>
            Reset at {moment(info?.lastUpdateAt).format("DD MMM YYYY, HH:mm")}
          </GraySmallText>
        </Box>
      </SectionWrapper>
    </>
  );
};
