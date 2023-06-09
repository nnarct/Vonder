import { Box } from "../box";

export const BalanceInput = () => {
  return (
    <>
      <Box className="flex justify-between">
        <span className="font-semibold">Balance</span>
        <div className="flex">
          <input
            required
            type="number"
            name="balance"
            id="balance"
            placeholder="0.00"
            className="pr-2 w-full text-right outline-none no-arrow "
            min="0"
            onBlur={(e) => {
              const value = parseFloat(e.target.value);
              const decimal = e.target.value.split(".")[1] || "";
              if (Number.isInteger(value) || decimal < 2)
                e.target.value = value.toFixed(2);
              else if (decimal[decimal.length - 1] === "0") {
                const index = [...decimal]
                  .reverse()
                  .findIndex((char) => char !== "0");
                e.target.value = `${
                  e.target.value.split(".")[0]
                }.${decimal.slice(0, -index)}`;
              }
            }}
          />
          <span>THB</span>
        </div>
      </Box>
    </>
  );
};
