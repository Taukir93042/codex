import { assets } from "../assets/assets.js";

const TrustedCompanies = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Trusted by learners from
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20">

          <img
            src={assets.microsoft_logo}
            alt="Microsoft"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />

          <img
            src={assets.walmart_logo}
            alt="Walmart"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />

          <img
            src={assets.accenture_logo}
            alt="Accenture"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />

          <img
            src={assets.adobe_logo}
            alt="Adobe"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />

          <img
            src={assets.paypal_logo}
            alt="PayPal"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default TrustedCompanies;