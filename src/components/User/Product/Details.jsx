import stars from "../../../assets/images/pngs/ic_stars.png";
import { CiHeart } from "react-icons/ci";
import Delivery from "./Delivery";
import Colors from "./Colors";
import Size from "./Size";
import Counter from "../../Shared/Counter";
import { useEffect, useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { serverUrl } from "../../../API/API";

const Details = ({ product }) => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleSizeActive = (size) => {
    setActiveSize(size);
  };
  const handleColorActive = (color) => {
    setActiveColor(color);
  };

  const handleMessageSubmit = () => {
    navigate("/messages");
  };

  useEffect(() => {
    if (product && product?.options?.length > 0) {
      setActiveColor(product?.options[0]?.color);
      setActiveSize(product?.options[0]?.size);
    }
  }, [product, product?.options]);
  const filteredOptions = product?.options?.filter(
    (option) => option.color === activeColor
  );
  if (!product || !product.images || product.images.length === 0) {
    return null;
  }

  return (
    <div className="product-details col-12 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
      <h2 className="product-name fw-bold mb-3">{product?.title}</h2>
      <div className="d-flex align-items-center flex-wrap mb-4">
        <div className="rating border-end d-flex align-items-center me-3">
          <img src={stars} alt="" />
          <p className="ms-3 pe-4">
            (<span>150 </span>Reviews)
          </p>
        </div>
        <p className="text-gold text-warning fw-bold">In Stock</p>
      </div>
      <div className="price fs-4 fw-bold mb-4">
        <span>$</span>
        <span className="price-amount">
          {product?.options[0]?.price?.finalPrice}
        </span>
      </div>
      <p className="description border-bottom fs-5 pb-4 mb-4">
        {product?.description}
      </p>
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
      <div className="d-flex align-items-center justify-content-between product-buttons flex-wrap ">
        <Counter
          counter={counter}
          decreaseHandler={decreaseHandler}
          increaseHandler={increaseHandler}
        />
        <button className="buy-now">Add to cart</button>
        <CiHeart className="heart cursor-pointer" />
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
      <Delivery />
    </div>
  );
};

export default Details;
