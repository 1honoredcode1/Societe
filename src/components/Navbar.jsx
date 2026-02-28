import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BoxIcon,
  GripIcon,
  ListIcon,
  MenuIcon,
  MessageCircleMoreIcon,
  XIcon,
} from "lucide-react";

import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const goHome = () => {
    navigate("/");
    scrollTo(0, 0);
    setMenuOpen(false);
  };

  const goOrSignIn = (path) => (e) => {
    if (!user) {
      e.preventDefault();
      openSignIn();
      return;
    }
    scrollTo(0, 0);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="h-20">
      <div className="fixed left-0 top-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
        <h1
          className="bg-[linear-gradient(135deg,#0066ff_0%,#9333ea_40%,#ff4da6_75%,#ff9f1c_100%)] bg-clip-text text-transparent text-3xl font-bold cursor-pointer"
          onClick={goHome}
        >
          Societa.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8 max-md:text-sm text-gray-800">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/marketplace" onClick={() => scrollTo(0, 0)}>
            Marketplace
          </Link>

          <Link to="/messages" onClick={goOrSignIn("/messages")}>
            Messages
          </Link>
          <Link to="/my-listings" onClick={goOrSignIn("/my-listings")}>
            My Listings
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Marketplace"
                  labelIcon={<GripIcon size={16} />}
                  onClick={() => navigate("/marketplace")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Messages"
                  labelIcon={<MessageCircleMoreIcon size={16} />}
                  onClick={() => navigate("/messages")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Listings"
                  labelIcon={<ListIcon size={16} />}
                  onClick={() => navigate("/my-listings")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BoxIcon size={16} />}
                  onClick={() => navigate("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="max-sm:hidden  px-8 py-2 bg-primary hover:bg-primary-dull duration-300 transition text-white rounded-full"
            >
              Login
            </button>
          )}

          <MenuIcon
            onClick={() => setMenuOpen(true)}
            className="sm:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed inset-0 z-9999 ${
          menuOpen ? "w-full" : "w-0"
        } overflow-hidden bg-white shadow-xl text-sm transition-all`}
      >
        <div className="flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 p-4">
          <button onClick={goHome}>Home</button>
          <button
            onClick={() => {
              navigate("/marketplace");
              scrollTo(0, 0);
              setMenuOpen(false);
            }}
          >
            Marketplace
          </button>

          <button
            onClick={() =>
              user
                ? goOrSignIn("/messages")({ preventDefault() {} })
                : openSignIn()
            }
          >
            Messages
          </button>
          <button
            onClick={() =>
              user
                ? goOrSignIn("/my-listings")({ preventDefault() {} })
                : openSignIn()
            }
          >
            My Listings
          </button>

          {!user && (
            <button
              onClick={() => openSignIn()}
              className=" px-8 py-2 bg-primary hover:bg-primary-dull duration-300 transition text-white rounded-full"
            >
              Login
            </button>
          )}

          <XIcon
            onClick={() => setMenuOpen(false)}
            className="absolute size-8 right-6 top-6 text-gray-500 hover:text-gray-700 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
