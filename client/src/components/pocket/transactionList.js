import moment from "moment";
import { useEffect, useState } from "react";
import { SectionWrapper } from "../sectionWrapper";
import { SubHeader } from "../subHeader";
import { GraySmallText } from "../graySmallText";
import { Box } from "../box";
import { Transaction } from "../pocket/transaction";

export const TransactionList = ({ transactions }) => {
  const [transactionCount, setTransactionCount] = useState(0);
  useEffect(() => {
    if (transactions)
      setTransactionCount(() => {
        let totalCount = 0;
        for (const category in transactions)
          if (Array.isArray(transactions[category]))
            totalCount += transactions[category].length;
        return totalCount;
      });
  }, [transactions]);
  if (transactions)
    return (
      <>
        <SectionWrapper>
          <SubHeader className="leading-7">
            {moment(transactions?.createAt).isSame(moment(), "day")
              ? "Today"
              : moment(transactions?.createAt).format("D MMMM")}
          </SubHeader>
          <GraySmallText>{transactionCount} Transactions</GraySmallText>
          {Object.keys(transactions)?.map((category) => {
            if (category !== "createAt")
              return (
                <Box key={category}>
                  <div className="pb-2 text-sm text-center font-bold capitalize">
                    {category}
                  </div>
                  {transactions[category].map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                  ))}
                </Box>
              );
            return <></>;
          })}
        </SectionWrapper>
      </>
    );
};
