import Links from "./Links.jsx";
import BillingDetails from "./BillingDetails.jsx";
import PlaceOrder from "./PlaceOrder.jsx";
import "./styles/Checkout.css";
const Index = () => {
  return (
    <div className="container py-5">
      <Links />
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <BillingDetails />
        <PlaceOrder />
      </div>
    </div>
  );
};

export default Index;
