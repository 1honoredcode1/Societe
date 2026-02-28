import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 w-full bg-linear-to-l from-primary to-black/90 text-white/80">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={goHome}
              className="w-fit bg-[linear-gradient(135deg,#0066ff_0%,#9333ea_40%,#ff4da6_75%,#ff9f1c_100%)] bg-clip-text text-transparent text-3xl font-bold"
            >
              Societa.
            </button>
            <p className="max-w-md text-sm text-white/60">
              Social marketplace for creators and brands. Discover, connect, and
              trade services—fast.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:text-base">
            <button
              onClick={() => {
                navigate("/marketplace");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left hover:text-white transition"
            >
              Marketplace
            </button>
            <button
              onClick={() => {
                navigate("/messages");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left hover:text-white transition"
            >
              Messages
            </button>
            <button
              onClick={() => {
                navigate("/my-listings");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left hover:text-white transition"
            >
              My Listings
            </button>
            <button
              onClick={() => {
                navigate("/privacy");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left hover:text-white transition"
            >
              Privacy
            </button>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs md:text-sm text-white/50">
            © {year} Societa. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs md:text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Live marketplace
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
