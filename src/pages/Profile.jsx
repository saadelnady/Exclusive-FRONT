import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchUser } from "../store/actions/userActions";
import { CiCamera } from "react-icons/ci";

import "../styles/Profile.css";
import { fetchSeller } from "../store/actions/sellerActions";

export const Profile = () => {
  const navigete = useNavigate();
  const { user } = useSelector((state) => state.userReducer);
  const { seller } = useSelector((state) => state.sellerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      if (!user) {
        dispatch(fetchUser());
      } else {
        dispatch(fetchSeller());
      }
    }
  }, [dispatch, user]);
  const handleCancel = () => {
    navigete("/");
  };
  return (
    <div className="container profile mb-5">
      <div className="header d-flex justify-content-between align-items-center flex-wrap py-5">
        <div className="links">
          <NavLink to={"/"} className="fs-5 me-2">
            Home
          </NavLink>
          /
          <NavLink className="text-dark fs-5 ms-2" to={"/profile"}>
            My Account
          </NavLink>
        </div>
        <div className="wellcome fs-5">
          wellcome!{" "}
          <span className="fw-bold fs-4">
            {user.firstName || seller.firstName}{" "}
          </span>
        </div>
      </div>
      <div className="row">
        <aside className="col-12 col-sm-3">
          <ul>
            <p className="my-4  fs-5">Manage My Account</p>
            <li className="ps-4 mb-2">
              <NavLink>My Profile</NavLink>
            </li>
            <li className="ps-4 mb-2">
              <NavLink>Address Book</NavLink>
            </li>
            <li className="ps-4 mb-2">
              <NavLink>My Payment Options</NavLink>
            </li>
          </ul>
          <ul>
            <p className="my-4  fs-5">My Orders</p>
            <li className="ps-4 mb-2">
              <NavLink>My Returns</NavLink>
            </li>
            <li className="ps-4">
              <NavLink>My Cancellations</NavLink>
            </li>
          </ul>
          <ul>
            <p className="my-4  fs-5">My WishList</p>
          </ul>
        </aside>
        <div className="col-12 col-sm-8 offset-sm-1 shadow p-5 rounded">
          <h3 className="edit  ">Edit Your Profile</h3>
          <form action="">
            <div className="user-pic rounded mx-auto my-5 position-relative user-img rounded-pill bg-light">
              <img src={user.userImage || seller.sellerImage} alt="" />
              <label htmlFor="userImage">
                <CiCamera className="fs-1 bg-light p-2 rounded-pill ic-camera cursor-pointer " />
              </label>
              <input type="file" id="userImage" />
            </div>
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="d-flex flex-column">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    value={user.firstName || seller.firstName}
                    type="text"
                    id="firstName"
                    className="form-control mb-3 fs-5 bg-light"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="email">Email</label>
                  <input
                    value={user.email || seller.email}
                    type="email"
                    id="email"
                    className="form-control mb-3 fs-5 bg-light"
                  />
                </div>
              </div>
              <div className="col-12 offset-md-1 col-md-6">
                <div className="d-flex flex-column">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    value={user.lastName || seller.lastName}
                    type="text"
                    id="lastName"
                    className="form-control mb-3 fs-5 bg-light"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="address">Address</label>
                  <input
                    value={user.address || seller.address}
                    type="text"
                    id="address"
                    className="form-control mb-3 fs-5 bg-light"
                  />
                </div>
              </div>
            </div>
            <p className="  my-4 fs-5">Password Changes</p>
            <input
              type="password"
              name="password"
              placeholder="Current Passwod"
              className="form-control mb-3 fs-5 bg-light"
              autoComplete="password"
            />
            <input
              type="password"
              name="password"
              placeholder="New Passwod"
              className="form-control mb-3 fs-5 bg-light"
              autoComplete="password"
            />
            <input
              type="password"
              name="password"
              placeholder="Confirm New Passwod"
              className="form-control mb-3 fs-5 bg-light"
              autoComplete="password"
            />
            <div className="d-flex justify-content-end mt-4">
              <button className="btn text-center" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn text-center p-3 fs-5 submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
