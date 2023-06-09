import { submitNewTransaction } from "../../functions/submitNewTransaction";
export const Buttons = ({ category, type, setError }) => {
  return (
    <>
      <div className="flex space-x-2">
        <a
          href="/"
          className="w-full text-center py-3 text-gray-400  font-semibold rounded-lg cursor-pointer transition-all linear duration-100 hover:bg-gray-50"
        >
          Cancel
        </a>
        <button
          className="w-full text-center py-3 bg-gray-100 text-gray-400 font-semibold rounded-lg cursor-pointer transition-all linear duration-100 hover:bg-primary hover:text-white"
          onClick={(e) => submitNewTransaction(e, category, type, setError)}
        >
          Save
        </button>
      </div>
    </>
  );
};
