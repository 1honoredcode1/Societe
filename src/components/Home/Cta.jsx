import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-24 px-6">
      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-125 h-75 bg-primary/30 blur-3xl rounded-full" />
      </div>

      <div
        className="relative max-w-5xl mx-auto py-16 px-8 md:px-16 rounded-3xl 
      bg-linear-to-tl from-primary-dull to-black 
      border border-white/10 backdrop-blur-xl text-center text-white"
      >
        {/* Badge */}
        <span
          className="inline-block px-6 py-2 text-sm rounded-full 
        bg-white/10 border border-white/20 text-white/80 backdrop-blur"
        >
          Trusted by millions
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl mx-auto mt-6 leading-tight">
          Sell your social accounts with confidence
          <span
            className="block bg-linear-to-r from-primary to-secondary-dull 
          bg-clip-text text-transparent mt-2"
          >
            and earn money.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-white/70 max-w-xl mx-auto text-sm md:text-base">
          Join the leading social media marketplace and connect with like-minded
          individuals.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/marketplace")}
          className="mt-8 px-10 py-3 rounded-full text-sm md:text-base font-medium
          bg-linear-to-r from-primary to-secondary-dull
          hover:scale-105 active:scale-95 transition-all duration-300
          shadow-lg shadow-primary/30"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Cta;
