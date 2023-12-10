import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/userActions";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return <div>Home</div>;
};
