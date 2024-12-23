import { useState } from "react";

import { Statstics } from "../Shared/Statstics";
import "./styles/AdminDashboard.css";
import { useSelector } from "react-redux";
import { List } from "../Shared/List";
export const AdminDashboard = () => {
  const [isUsers, setIsUsers] = useState(true);
  const { theme } = useSelector((state) => state.themeReducer);

  const userReducer = useSelector((state) => state.userReducer);
  const sellerReducer = useSelector((state) => state.sellerReducer);

  return (
    <div className={`AdminDashboard w-100 ${theme}`}>
      <Statstics isUsers={isUsers} setIsUsers={setIsUsers} />
      {isUsers ? (
        <List data={userReducer.users} isLoading={userReducer.isLoading} />
      ) : (
        <List
          data={sellerReducer.sellers}
          isLoading={sellerReducer.isLoading}
        />
      )}
    </div>
  );
};
