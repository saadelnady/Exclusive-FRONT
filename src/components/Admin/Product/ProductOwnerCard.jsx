import React from "react";
import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";

export const ProductOwnerCard = ({ productOwner }) => {
  return (
    <div className="col-12 col-md-5 col-lg-3 bg-light rounded">
      <h1 className="py-3 px-4">Product Owner</h1>
      <img
        src={`${serverUrl}/${productOwner?.image}`}
        alt="ownerImg"
        className="w-100"
      />
      <div className="d-flex align-items-center">
        <p className="fw-bold">Seller name :</p>
        <p>{`${productOwner?.firstName} ${productOwner?.lastName}`}</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="fw-bold">Seller email :</p>
        <p>{`${productOwner?.email}`} </p>
      </div>
      <div className="d-flex align-items-center">
        <p className="fw-bold">Date of join :</p>
        <p>{`${formatDateAndTime(productOwner?.createdAt)}`} </p>
      </div>
      <div className="d-flex align-items-center">
        <p className="fw-bold">Mobile Phone :</p>
        <p>{`${productOwner?.mobilePhone}`} </p>
      </div>
    </div>
  );
};
