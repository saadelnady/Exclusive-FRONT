import { NavLink } from "react-router-dom";
import icPhone from "../assets/images/pngs/ic-phone.png";
import icMail from "../assets/images/pngs/ic-mail.png";
export const Contact = () => {
  return (
    <div className="contact container mb-5">
      <div className="links py-5">
        <NavLink to={"/"} className="fs-5 me-2">
          Home
        </NavLink>
        /
        <NavLink className="text-dark fs-5 ms-2" to={"/contact"}>
          Contact
        </NavLink>
      </div>
      <div className="row">
        <aside className="px-5 py-4 shadow rounded col-12 col-lg-4 me-lg-5 mb-5 mb-lg-0">
          <div className="border-bottom">
            <div className="d-flex align-items-center py-4">
              <img src={icPhone} alt="" />
              <h4 className="ms-4">Call to us</h4>
            </div>
            <p className="mb-2 fs-5">We are available 24/7, 7 days a week.</p>
            <p className="mb-4   fs-5">Phone: +8801611112222</p>
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
        <div className="p-5 shadow rounded col-12 col-lg-7 ">
          <form>
            <div className="d-flex flex-column flex-md-row">
              <input
                type="text"
                className="bg-light form-control py-2 px-3"
                placeholder="Your Name *"
              />

              <input
                type="email"
                className="bg-light form-control py-2 px-3 mx-md-4 my-4 my-md-0"
                placeholder="Your Email *"
              />

              <input
                type="text"
                className="form-control bg-light  py-2 px-3"
                placeholder="Your Phone *"
              />
            </div>

            <textarea
              name=""
              className="col-12 bg-light mt-5 py-2 px-3 form-control"
              placeholder="Your Message"
            ></textarea>
            <div className="text-center text-lg-end">
              <button className="btn p-3 fs-5 mt-4 submit">Send Massage</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
