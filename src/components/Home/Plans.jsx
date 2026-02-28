import Title from "../extra/Title";

import { PricingTable } from "@clerk/clerk-react";

const Plans = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30 max-md:px-4">
      <div className="mt-20 mb-8">
        <Title
          title="Choose Your Plan"
          description="Find and choose the plan that works best for you and like away."
        />
        <div className="mt-14">
          <PricingTable />
        </div>
      </div>
    </div>
  );
};

export default Plans;
