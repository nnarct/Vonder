import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Screen } from "../components/screen";
import { SectionWrapper } from "../components/sectionWrapper";
import { Header } from "../components/header";
import { TypeSelect } from "../components/newTransaction/typeSelect";
import { MemoInput } from "../components/newTransaction/memoInput";
import { Buttons } from "../components/newTransaction/buttons";
import { BalanceInput } from "../components/newTransaction/balanceInput";
import { fetchTransactions } from "../api/fetchTransactions";
import { BsChevronLeft } from "react-icons/bs";
export const NewTransaction = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [type, setType] = useState("outcome"); // "income" or "outcome"
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchTransactions().then((data) => {
      if (!(category in data)) navigate("/transaction");
    });
  }, [category, navigate]);
  return (
    <>
      <Screen className="flex">
        <SectionWrapper className="absolute h-[98.5%] w-full flex flex-col">
          <Header>
            New Transaction
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div
                className="p-1.5 rounded-md bg-white text-sm font-light box-shadow cursor-pointer hover:text-primary hover:border-primary/20"
                onClick={() => navigate("/transaction")}
              >
                <BsChevronLeft />
              </div>
            </div>
          </Header>
          <div className="h-full flex flex-col justify-between">
            <div>
              <MemoInput />
              <TypeSelect type={type} setType={setType} />
              <BalanceInput />
              {error && (
                <div className="my-2 py-1 px-2 text-red-600 bg-red-200 rounded-lg">
                  Please fill all fields.
                </div>
              )}
            </div>
            <Buttons category={category} type={type} setError={setError} />
          </div>
        </SectionWrapper>
      </Screen>
    </>
  );
};
