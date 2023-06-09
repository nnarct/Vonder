import { Box } from "../box";
export const MemoInput = () => {
  return (
    <>
      <Box>
        <input
          required
          type="text"
          name="memo"
          id="memo"
          placeholder="memo"
          className="w-full outline-none"
        />
      </Box>
    </>
  );
};
