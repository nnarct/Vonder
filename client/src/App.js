import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pocket } from "./pages/pocket";
import { CategorySelection } from "./pages/categorySelection ";
import { NewTransaction } from "./pages/newTransaction";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pocket />} />
          <Route path="/transaction" element={<CategorySelection />} />
          <Route path="/transaction/:category" element={<NewTransaction />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
