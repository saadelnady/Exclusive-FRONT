import Links from "./Links.jsx";
import CartTable from "./CartTable.jsx";
import CartButtons from "./CartButtons.jsx";
import CartFooter from "./CartFooter.jsx";

const Index = () => {
  return (
    <div className="container   py-5">
      <Links />
      <CartTable />
      <CartButtons />
      <CartFooter />
    </div>
  );
};

export default Index;
