import React from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      
      <Link to="UserForm" className="btn btn-primary btn-sm">
        UserForm
      </Link>{" "}
      <Link to="toggleImg" className="btn btn-primary btn-sm">
        ToggleImg
      </Link>{" "}
      <Link to="favcolor" className="btn btn-primary btn-sm">
        FavColor
      </Link>{" "}
      <Link to="useState" className="btn btn-primary btn-sm">
        UseState
      </Link>{" "}
      <Link to="dashboard" className="btn btn-primary btn-sm">
        CRUD
      </Link>{" "}
    </div>
  );
};
export default NavComp;