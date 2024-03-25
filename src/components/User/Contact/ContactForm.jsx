import React from "react";
export const ContactForm = () => {
  return (
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
  );
};
