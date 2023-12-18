import { NavLink } from "react-router-dom";
import iconSend from "../../assets/images/pngs/ic-send.png";
import qrCode from "../../assets/images/pngs/Qr Code.png";
import appStore from "../../assets/images/pngs/ic-appstore.png";
import googlePlay from "../../assets/images/pngs/ic-GooglePlay.png";
import copyright from "../../assets/images/pngs/ic-copyRight.png";
import icTwitter from "../../assets/images/pngs/ic-Twitter.png";
import icFacebook from "../../assets/images/pngs/ic-Facebook.png";
import icInstagram from "../../assets/images/pngs/ic-instagram.png";
import icLinkedin from "../../assets/images/pngs/ic-Linkedin.png";

export const Footer = () => {
  return (
    <div className=" bg-black text-light pt-5 justify-content-between ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-7 mb-4 col-md-2">
            <h2>Exclusive</h2>
            <p className="fs-5 mb-4">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="position-relative mt-3">
              <input
                type="email"
                placeholder="Enter your email "
                className="bg-transparent border-white text-light w-100 p-2 rounded"
              />
              <img
                src={iconSend}
                alt="iconSend"
                className="position-absolute top-50 end-0 translate-middle-y cursor-pointer	"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4 offset-md-1 col-md-2 fs-5">
            <h2>Support</h2>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p> exclusive@gmail.com</p>
            <p> +88015-88888-9999</p>
          </div>
          <div className="col-12 col-sm-7 mb-4 offset-md-1 col-md-2">
            <h2>Account</h2>
            <ul>
              <li>
                <NavLink className="text-light">My Account</NavLink>
              </li>
              <li>
                <NavLink className="text-light">Login / Register</NavLink>
              </li>
              <li>
                <NavLink className="text-light">Cart</NavLink>
              </li>
              <li>
                <NavLink className="text-light">Wish list</NavLink>
              </li>
              <li>
                <NavLink className="text-light">shop</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-7 mb-4 col-md-2">
            <h2>Quick Link</h2>
            <ul>
              <li>
                <NavLink className="text-light">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink className="text-light">Terms Of Use</NavLink>
              </li>
              <li>
                <NavLink className="text-light">FAQ</NavLink>
              </li>
              <li>
                <NavLink className="text-light">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 mb-4 col-md-2">
            <h2>Download App</h2>
            <p className="text-light">Save $3 with App New User Only</p>
            <div className="d-flex justify-content-around flex-wrap align-items-center mt-4 ">
              <img src={qrCode} alt="qrCode" />
              <div>
                <NavLink className="d-block mb-3 ">
                  <img src={googlePlay} alt="qrCode" />
                </NavLink>
                <NavLink className="d-block ">
                  <img src={appStore} alt="qrCode" />
                </NavLink>
              </div>
            </div>
            <div className="social-media d-flex justify-content-evenly mt-3">
              <NavLink>
                <img src={icFacebook} alt="" />
              </NavLink>
              <NavLink>
                <img src={icTwitter} alt="" />
              </NavLink>

              <NavLink>
                <img src={icInstagram} alt="" />
              </NavLink>
              <NavLink>
                <img src={icLinkedin} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight border-top opacity-25">
        <p className="fs-5 py-3 d-flex align-items-center justify-content-center">
          <img src={copyright} alt="" className="me-2" />
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};
