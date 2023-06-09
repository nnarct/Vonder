import { Box } from "../box";
export const TypeSelect = ({ type, setType }) => {
  return (
    <>
      <div className="flex space-x-2">
        <Box
          className={`w-full h-28 flex items-center justify-center font-semibold cursor-pointer ${
            type === "outcome" && "bg-primary text-white"
          }`}
          onClick={() => setType("outcome")}
        >
          <div>Outcome</div>
        </Box>
        <Box
          className={`w-full h-28 flex items-center justify-center font-semibold cursor-pointer ${
            type === "income" && "bg-primary text-white"
          }`}
          onClick={() => setType("income")}
        >
          <div>Income</div>
        </Box>
      </div>
    </>
  );
};
