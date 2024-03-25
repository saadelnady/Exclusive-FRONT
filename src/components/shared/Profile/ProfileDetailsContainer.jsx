import React from "react";

import ProfileLinks from "./ProfileLinks";
import ProfileDetails from "./ProfileDetails";

const ProfileDetailsContainer = ({ user, seller }) => {
  return (
    <div className="row">
      <ProfileLinks />
      <ProfileDetails user={user} seller={seller} />
    </div>
  );
};

export default ProfileDetailsContainer;
