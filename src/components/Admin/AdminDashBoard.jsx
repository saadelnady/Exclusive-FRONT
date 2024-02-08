import { useState } from "react";

import { SellersList } from "./shared/SellersList";
import { UsersList } from "./shared/UsersList";
import { Statstics } from "./shared/Statstics";

export const AdminDashboard = () => {
  const [isUsers, setIsUsers] = useState(true);
  return (
    <div className="AdminDashboard w-100 vh-100">
      <Statstics isUsers={isUsers} setIsUsers={setIsUsers} />
      {isUsers ? <UsersList /> : <SellersList />}
    </div>
  );
};
