import moment from "moment";
import { GraySmallText } from "../graySmallText";
export const Transaction = ({ transaction }) => {
  return (
    <>
      <div className="border-t border-zinc-100 py-2">
        <div className="flex justify-between text-sm">
          <span className="font-bold">{transaction.memo}</span>
          <span
            className={`${
              transaction.value < 0 ? "text-red-500" : "text-green-500"
            } font-semibold`}
          >
            {transaction.value < 0 ? "" : "+"}
            {transaction.value.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            {transaction.currency}
          </span>
        </div>
        <GraySmallText>
          {moment(transaction.createAt).format("DD MMM YYYY, HH:mm")}
        </GraySmallText>
      </div>
    </>
  );
};
