import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUsers } from "../store/actions/userActions";

export const AdminDashboard = () => {
  const { users } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      dispatch(fetchUsers());
    }
  }, [dispatch]);
  console.log(users);
  return <div>AdminDashboard</div>;
};
