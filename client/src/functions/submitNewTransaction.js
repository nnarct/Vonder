import { addNewTransaction } from "../api/addNewTransaction";
export const submitNewTransaction = (e, category, type, setError) => {
  e.preventDefault();
  setError(false);
  const memo = document.getElementById("memo").value;
  const balance = document.getElementById("balance").value;
  if (!memo) return setError(true);
  if (!balance) return setError(true);
  const newTransaction = {
    category,
    data: {
      memo,
      createAt: new Date().getTime(),
      value: Number(type === "income" ? balance : -balance),
      currency: "THB",
    },
  };
  addNewTransaction(newTransaction);
};
