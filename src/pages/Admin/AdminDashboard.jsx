import { useState } from "react";


import { SellersList } from "../../components/Admin/SellersList";
import { UsersList } from "../../components/Admin/UsersList";
import { Statstics } from "../../components/Admin/Statstics";
export const AdminDashboard = () => {
  const [isUsers, setIsUsers] = useState(true);
  return (
    <div className="AdminDashboard w-100 p-4 vh-100">
      <Statstics isUsers={isUsers} setIsUsers={setIsUsers} />
      {isUsers ? <UsersList /> : <SellersList />}
    </div>
  );
};
