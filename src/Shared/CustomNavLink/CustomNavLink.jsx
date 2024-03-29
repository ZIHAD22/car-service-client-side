import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default CustomNavLink;
