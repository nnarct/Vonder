import fetchTransactions from "../api/fetchTransactions";
import { useEffect, useState } from "react";
import { Screen } from "../components/screen";
import { SectionWrapper } from "../components/sectionWrapper";
import { Header } from "../components/header";
import { SubHeader } from "../components/subHeader";
import { GraySmallText } from "../components/graySmallText";
import { BsChevronRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { sortMemo } from "../functions/sortMemo";
import { BsChevronLeft } from "react-icons/bs";

export const CategorySelection = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);
  return (
    <Screen>
      <SectionWrapper>
        <Header>
          New Transaction{" "}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <div
              className="p-1.5 rounded-md bg-white text-sm font-light box-shadow cursor-pointer hover:text-primary hover:border-primary/20"
              onClick={() => navigate("/")}
            >
              <BsChevronLeft />
            </div>
          </div>
        </Header>
        <SubHeader>Category</SubHeader>
        <ul className="pt-3">
          {Object.keys(transactions).map((category) => {
            const displayMemos = sortMemo(category, transactions);
            return (
              <Link key={category} to={`/transaction/${category}`}>
                <li className="group py-3 flex items-center justify-between border-b cursor-pointer">
                  <div className="group-hover:pl-2 transition-all ease-in-out duration-200">
                    <span className="font-bold capitalize">{category}</span>
                    {category !== "other" && (
                      <GraySmallText>{displayMemos}</GraySmallText>
                    )}
                  </div>
                  <GraySmallText>
                    <BsChevronRight size={16} />
                  </GraySmallText>
                </li>
              </Link>
            );
          })}
        </ul>
      </SectionWrapper>
    </Screen>
  );
};
