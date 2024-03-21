import React from "react";

import ProfileAside from "./ProfileAside";
import ProfileDetails from "./ProfileDetails";

const ProfileDetailsContainer = ({ user, seller }) => {
  return (
    <div className="row">
      <ProfileAside />
      <ProfileDetails user={user} seller={seller} />
    </div>
  );
};

export default ProfileDetailsContainer;
