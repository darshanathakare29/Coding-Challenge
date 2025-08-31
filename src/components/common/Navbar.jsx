import { Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="space-x-4">
        <Link to="/">User</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/store">Store</Link>
      </div>
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
