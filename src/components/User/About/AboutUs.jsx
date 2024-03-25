import icDelivery from "../../../assets/images/pngs/ic-delivery-2.png";
import icHeadPhone from "../../../assets/images/pngs/ic-headPhone.png";
import icVerifecation from "../../../assets/images/pngs/ic-verification.png";

const AboutUs = () => {
  return (
    <div className="services row justify-content-center justify-content-sm-between text-center my-5">
      <div className="col-12 col-sm-5 col-lg-4 mb-4 mb-sm-0 py-3">
        <img src={icDelivery} alt="" className="bg-dark rounded-pill p-3" />
        <h4 className="mt-4">FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="col-12 col-sm-5 col-lg-3 mb-4 mb-sm-0 py-3">
        <img src={icHeadPhone} alt="" className="bg-dark rounded-pill p-3" />
        <h4 className="mt-4">24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="col-12 col-sm-5 col-lg-4 py-3">
        <img src={icVerifecation} alt="" className="bg-dark rounded-pill p-3" />
        <h4 className="mt-4">MONEY BACK GUARANTEE</h4>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};
export default AboutUs;
