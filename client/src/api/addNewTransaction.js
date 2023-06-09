import Axios from "axios";
export const addNewTransaction = async (newTransaction) => {
  Axios.post("http://localhost:3001/addNewTransaction", newTransaction).then(
    (res, err) => {
      if (res) window.location.href = "/";
      if (err) console.error(err);
    }
  );
};
