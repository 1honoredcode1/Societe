const Cta = () => {
  return (
    <div class="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-primary to-black/90 rounded-2xl p-10 text-white">
      <p class="px-6 py-2 rounded-full text-sm border border-primary bg-linear-to-r from-primary to-secondary-dull bg-clip-text text-white">
        Trusted By MIllions
      </p>
      <h1 class="text-4xl md:text-5xl md:leading-15 font-medium max-w-2xl mt-5">
        Sell your Social Accounts with confidence
        <span class="bg-linear-to-r from-primary-dull to-secondary-dull pl-2 bg-clip-text text-transparent">
          and earn Money.
        </span>
      </h1>
      <p class="text-white text-sm mt-2">
        Join the leading social media marketplace and connect with many
        likeminded individuals.
      </p>
      <button class="px-12 py-2.5 mt-6 rounded-full text-sm border border-primary active:scale-95 transition-all bg-linear-to-r from-primary to-secondary-dull bg-clip-text text-white">
        Get Started
      </button>
    </div>
  );
};

export default Cta;
