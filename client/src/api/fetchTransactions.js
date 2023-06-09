export const fetchTransactions = async () => {
  const response = await fetch("http://localhost:3001/");
  const data = await response.json();
  return data.transactions;
};
export default fetchTransactions;