import { useState } from "react";
import { Statstics, UsersList, SellersList } from "../../routes";
import "../../styles/Admin/AdminDashboard.css";

export const AdminDashboard = () => {
  const [isUsers, setIsUsers] = useState(true);
  return (
    <div className="AdminDashboard w-100 p-4 vh-100">
      <Statstics isUsers={isUsers} setIsUsers={setIsUsers} />
      {isUsers ? <UsersList /> : <SellersList />}
    </div>
  );
};
