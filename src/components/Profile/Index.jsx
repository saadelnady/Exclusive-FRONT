import "./styles/Profile.css";

import ProfileDetails from "./ProfileDetailsContainer.jsx";
import ProfileHeader from "./ProfileHeader.jsx";

import { useSelector } from "react-redux";

export const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { seller } = useSelector((state) => state.sellerReducer);

  return (
    <div className="container profile mb-5">
      <ProfileHeader user={user} seller={seller} />
      <ProfileDetails user={user} seller={seller} />
    </div>
  );
};
export default Index;
