import icPhone from "../../../assets/images/pngs/ic-phone.png";
import icMail from "../../../assets/images/pngs/ic-mail.png";

export const ContactInfo = () => {
  return (
    <aside className="px-5 py-4 shadow rounded col-12 col-lg-4 me-lg-5 mb-5 mb-lg-0">
      <div className="border-bottom">
        <div className="d-flex align-items-center py-4">
          <img src={icPhone} alt="" />
          <h4 className="ms-4">Call to us</h4>
        </div>
        <p className="mb-2 fs-5">We are available 24/7, 7 days a week.</p>
        <p className="mb-4 fs-5">Phone: +8801611112222</p>
      </div>
      <div>
        <div className="d-flex align-items-center py-4">
          <img src={icMail} alt="" />
          <h4 className="ms-4">Write to us</h4>
        </div>
        <p className="mb-2 fs-5">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="mb-2 fs-5">Emails: customer@exclusive.com</p>
        <p className="mb-2 fs-5">Emails: support@exclusive.com</p>
      </div>
    </aside>
  );
};
