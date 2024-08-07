import { FaXmark } from "react-icons/fa6";
import "./styles/ProductModal.css";
import ProductSlider from "../User/Product/ProductSlider";
import { NavLink, useNavigate } from "react-router-dom";
import { serverUrl } from "../../API/API";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/actions/product/productActions";
import { clearProduct } from "../../store/actions/product/productActionsCreators";
import { BiMessageRoundedDetail } from "react-icons/bi";
import Colors from "../User/Product/Colors";
import Size from "../User/Product/Size";
import { BsCart3 } from "react-icons/bs";
import { showToast } from "../../helpers/toast_helper";
import { CiHeart } from "react-icons/ci";
import Counter from "./Counter";

const ProductModal = ({ productId, handleActiveModal }) => {
  const { product } = useSelector((state) => state.productReducer);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const handleSizeActive = (size) => {
    setActiveSize(size);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleColorActive = (color) => {
    setActiveColor(color);
  };

  // const addToCartHandler = (productId, productPrice) => {
  //   if (!isLoggedIn) {
  //     showToast(toast, "You have to login first", "error");
  //     setTimeout(() => {
  //       navigate("/login/user");
  //     }, 2000);
  //   } else if (!selectedSize || !selectedColor) {
  //     showToast(toast, "Please select size and color", "error");
  //   } else {
  //     const data = {
  //       productId,
  //       quantity: 1,
  //       size: selectedSize,
  //       color: selectedColor,
  //       price: productPrice,
  //       userId: user._id,
  //     };
  //     dispatch(addToCart(data, toast));
  //   }
  //   setSelectedSize("");
  //   setSelectedColor("");
  // };

  const filteredOptions = product?.options?.filter(
    (option) => option.color === activeColor
  );

  useEffect(() => {
    if (product && product?.options?.length > 0) {
      setActiveColor(product?.options[0]?.color);
      setActiveSize(product?.options[0]?.size);
    }
  }, [product, product?.options]);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const handleMessageSubmit = () => {
    navigate("/messages");
  };
  return (
    <div className="product-modal">
      <div className="bg-light p-3 rounded col-9">
        <FaXmark
          onClick={() => {
            handleActiveModal();
            dispatch(clearProduct());
          }}
          className="fs-2 cursor-pointer d-block xmark ms-auto"
        />
        <div
          className="row justify-content-center justify-content-md-evenly flex-wrap gap-5"
          style={{ overflow: "auto", height: "600px" }}
        >
          <div className="col-12 col-md-4">
            <div className="col-12">
              {product && product?.images && product?.images?.length > 0 && (
                <img
                  src={`${serverUrl}/${product?.images[0]}`}
                  alt="product-img"
                  className="w-100 object-fit-cover"
                />
              )}
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3 col-12">
              <button
                className="btn btn-danger submit"
                onClick={handleMessageSubmit}
              >
                Send message
                <BiMessageRoundedDetail className="fs-2" />
              </button>
              <NavLink to={`/sellerpage/${product?.productOwner?._id}`}>
                <button className="btn submit-reverse">
                  <img
                    src={`${serverUrl}/${product?.productOwner?.image}`}
                    alt="seller-img"
                    className="rounded-pill seller-img"
                  />
                  view seller
                </button>
              </NavLink>
            </div>
          </div>

          <div className="col-12 col-md-7 ">
            <h3>{product?.title}</h3>
            <p className="my-3 fs-5 border-top border-bottom py-5">
              {product?.description}
            </p>
            {product && product?.options && product?.options?.length > 0 && (
              <p className="fw-bold fs-4 ">
                {product?.options[0]?.price?.finalPrice} $
              </p>
            )}

            <Colors
              options={product?.options}
              activeColor={activeColor}
              handleColorActive={handleColorActive}
            />
            <Size
              options={filteredOptions}
              handleSizeActive={handleSizeActive}
              activeSize={activeSize}
            />
            <Counter />
            <div className="d-flex mt-4">
              <button
                className="btn submit-reverse me-4"
                onClick={() => {
                  // addToCartHandler(
                  //   product?._id,
                  //   product?.options[0]?.price.finalPrice
                  // );
                }}
              >
                Add to cart
                <BsCart3 className="cursor-pointer ms-2 fs-3" />
              </button>

              <button className="btn btn-danger submit-reverse">
                <CiHeart className="cursor-pointer fs-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
