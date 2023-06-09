import { Screen } from "../components/screen";
import { Header } from "../components/header";
import { MonthlyQuota } from "../components/monthlyQuota";
import { TransactionList } from "../components/pocket/transactionList";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import fetchTransactions from "../api/fetchTransactions";
export const Pocket = () => {
  const [groupedTransactions, setGroupedTransactions] = useState([]);
  useEffect(() => {
    fetchTransactions().then((transactions) => {
      const newGroupedTransactions = [];
      for (const category in transactions) {
        const categoryTransactions = transactions[category];
        for (const transaction of categoryTransactions) {
          const transactionDate = new Date(
            transaction.createAt
          ).toLocaleDateString();
          const existingGroup = newGroupedTransactions.find((group) => {
            return (
              new Date(group.createAt).toLocaleDateString() === transactionDate
            );
          });
          if (existingGroup) {
            if (existingGroup[category])
              existingGroup[category].push(transaction);
            else {
              existingGroup[category] = [];
              existingGroup[category].push(transaction);
            }
          } else {
            const newGroup = {
              createAt: transaction.createAt,
              [category]: [transaction],
            };
            newGroupedTransactions.push(newGroup);
          }
        }
      }
      newGroupedTransactions.sort((a, b) => b.createAt - a.createAt);
      setGroupedTransactions(newGroupedTransactions);
    });
  }, []);

  return (
    <>
      <Screen>
        <Header>Pocket</Header>
        <MonthlyQuota />
        <TransactionList />
        {groupedTransactions.map((group, index) => (
          <TransactionList key={index} transactions={group} />
        ))}
        <a
          href="/transaction"
          className="absolute right-0 bottom-0 w-12 h-12 m-2 flex items-center justify-center bg-primary text-white text-xl rounded-full shadow-lg cursor-pointer hover:bg-primary/80 active:bg-sky-500"
        >
          <AiOutlinePlus />
        </a>
      </Screen>
    </>
  );
};
