import React from "react";
import { CiCamera } from "react-icons/ci";
import { serverUrl } from "../../API/API";
import { useFormik } from "formik";

const ProfileDetails = ({ user, seller }) => {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit: (values) => {
  //       handleSubmit(values);
  //     },
  //     validate,
  //   });

  //   const handleSubmit = (values) => {};
  return (
    <div className="col-12 col-sm-8 offset-sm-1 shadow p-5 rounded">
      <h3 className="edit">Edit Your Profile</h3>
      <form action="">
        <div className="user-pic rounded mx-auto my-5 position-relative user-img rounded-pill bg-light">
          <img
            src={
              `${serverUrl}/${user.image} ` || `${serverUrl}/${seller.image} `
            }
            alt="profile-img"
          />
          <label htmlFor="userImage">
            <CiCamera className="fs-1 bg-light p-2 rounded-pill ic-camera cursor-pointer " />
          </label>
          <input type="file" id="userImage" />
        </div>

        <div className="col-12 col-md-5">
          <label htmlFor="firstName">First Name</label>
          <input
            value={user.firstName || seller.firstName}
            type="text"
            id="firstName"
            className="form-control mb-3 fs-5 bg-light special-input"
          />
        </div>
        <div className="">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={user.lastName || seller.lastName}
            type="text"
            id="lastName"
            className="form-control mb-3 fs-5 bg-light special-input"
          />
        </div>

        <div className="col-12 offset-md-1 col-md-6">
          <div className="d-flex flex-column">
            <label htmlFor="email">Email</label>
            <input
              value={user.email || seller.email}
              type="email"
              id="email"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="address">Address</label>
            <input
              value={user.address || seller.address}
              type="text"
              id="address"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
          </div>
        </div>

        <p className="my-4 fs-5">Password Changes</p>
        <input
          type="password"
          name="password"
          placeholder="Current Passwod"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />
        <input
          type="password"
          name="password"
          placeholder="New Passwod"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm New Passwod"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />
        <div className="d-flex justify-content-end mt-4">
          <button className="btn text-center">Cancel</button>
          <button className="btn text-center p-3 fs-5 submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
