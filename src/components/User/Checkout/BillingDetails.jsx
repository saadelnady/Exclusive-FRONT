import React from "react";

const BillingDetails = () => {
  return (
    <div className="col-12 col-lg-5">
      <h3 className="mb-3">Billing Details</h3>
      <form action="">
        <label htmlFor="firstName"> First Name*</label>
        <input
          id="firstName"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          id="streetAddress"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="apartment"> Apartment, floor, etc. (optional)</label>
        <input
          id="apartment"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="town"> Town/City*</label>
        <input
          id="town"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="phone"> Phone Number*</label>
        <input
          id="phone"
          type="text"
          className="form-control special-input mb-4"
        />
        <label htmlFor="email"> Email Address*</label>
        <input
          id="email"
          type="text"
          className="form-control special-input mb-4"
        />

        <input
          type="checkbox"
          id="save-info"
          className="me-3 custom-checkbox"
        />
        <label for="save-info" class="label-text">
          Save this information for faster check-out next time
        </label>
      </form>
    </div>
  );
};

export default BillingDetails;
