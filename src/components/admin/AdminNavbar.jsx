import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-200">
      <Link to="/">
        <h1
          className="bg-[linear-gradient(135deg,#0066ff_0%,#9333ea_40%,#ff4da6_75%,#ff9f1c_100%)] bg-clip-text text-transparent text-3xl font-bold cursor-pointer"
          onClick={goHome}
        >
          Societa.
        </h1>
      </Link>
    </div>
  );
};

export default AdminNavbar;
