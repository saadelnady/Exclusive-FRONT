import React from "react";
import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { NavLink } from "react-router-dom";

export const ProductOwnerCard = ({ productOwner }) => {
  return (
    <div className="col-12 col-md-5 col-lg-3 bg-light rounded mb-3 mb-md-0">
      <h1 className="py-3 px-4">Product Owner</h1>
      <img
        src={`${serverUrl}/${productOwner?.image}`}
        alt="ownerImg"
        className="w-100"
      />
      <div className="d-flex align-items-center ps-3 pb-4">
        <p className="fw-bold">Seller name :</p>
        <p className="fw-bold fs-5">{`${productOwner?.firstName} ${productOwner?.lastName}`}</p>
      </div>
      <div className="d-flex align-items-center ps-3 pb-4">
        <p className="fw-bold">Seller email :</p>
        <p className="fw-bold fs-5">{`${productOwner?.email}`} </p>
      </div>
      <div className="d-flex align-items-center ps-3 pb-4">
        <p className="fw-bold">Date of join :</p>
        <p className="fw-bold fs-5">
          {`${formatDateAndTime(productOwner?.createdAt)}`}{" "}
        </p>
      </div>
      <div className="d-flex align-items-center ps-3 pb-4">
        <p className="fw-bold">Mobile Phone :</p>
        <p className="fw-bold fs-5">{`${productOwner?.mobilePhone}`} </p>
      </div>
      <NavLink to={`/admin/seller/${productOwner?._id}`}>
        <button className="btn btn-danger">More details</button>
      </NavLink>
    </div>
  );
};
