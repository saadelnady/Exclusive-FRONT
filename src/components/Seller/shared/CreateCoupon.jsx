import { FaXmark } from "react-icons/fa6";
import "./styles/CreateCoupon.css";
import { useFormik } from "formik";

import {
  initialValues,
  validate,
} from "../../Validation/Seller/createcoupon.js";
import ErrorMessage from "../../Shared/ErrorMessage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addCoupon } from "../../../store/actions/couponCode/couponCodeActions.js";

const CreateCoupon = ({ handleIsOpen }) => {
  const { products } = useSelector((state) => state.productReducer);
  const { seller } = useSelector((state) => state.sellerReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleAddCoupon(values);
    },
    validate,
  });

  const handleAddCoupon = (values) => {
     values.couponCodeOwner = seller?._id;
    const payload = { values, toast, navigate };
    dispatch(addCoupon(payload));
  };
  const handleProductChange = (e) => {
     formik.setFieldValue("selectedProduct", e.target.value);
  };
  return (
    <div className="create-coupon row justify-content-center align-items-center">
      <div className="bg-light row col-12 col-sm-8 col-md-7 col-lg-4 rounded p-4 ">
        <FaXmark
          onClick={() => {
            handleIsOpen();
          }}
          className="fs-2 cursor-pointer d-block xmark ms-auto"
        />
        <h3 className="fw-bold text-center mb-3">Create coupon code</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column justify-content-between"
        >
          <label htmlFor="title" className="fw-bold fs-4">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="form-control mb-3 fs-4 special-input"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Your copoun code title ... "
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="title"
          />
          <label htmlFor="discount-percentage" className="fw-bold fs-4">
            Discount percentage
          </label>
          <input
            id="discount-percentage"
            type="text"
            name="value"
            value={formik.values.value}
            className="form-control mb-3 fs-4 special-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Your copoun code value ..."
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="value"
          />
          <label htmlFor="min-amount" className="fw-bold fs-4">
            Min Amount
          </label>
          <input
            id="min-amount"
            name="minAmount"
            value={formik.values.minAmount}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control mb-3 fs-4 special-input"
            placeholder="Enter Your copoun code min amount ..."
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="minAmount"
          />
          <label htmlFor="max-amount" className="fw-bold fs-4">
            Max Amount
          </label>
          <input
            id="max-amount"
            name="maxAmount"
            value={formik.values.maxAmount}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control mb-3 fs-4 special-input"
            placeholder="Enter Your copoun code max amount ..."
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="maxAmount"
          />
          <label htmlFor="selected-product" className="fw-bold fs-4">
            Selected Product
          </label>

          <select
            name="selectedProduct"
            className="form-control mb-3 fs-4 special-input"
            id="selected-product"
            onChange={handleProductChange}
            value={formik.values.selectedProduct}
          >
            <option value="select product">select product</option>
            {products.map((product, index) => (
              <option key={index} value={product._id}>
                {product.title}
              </option>
            ))}
          </select>
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="selectedProduct"
          />
          <button className="btn submit mt-5 fs-4">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCoupon;
