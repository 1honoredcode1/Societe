import { useSelector } from "react-redux";

import Title from "../extra/Title";

import ListingCard from "./ListingCard";

const LatestListings = () => {
  const { listings } = useSelector((state) => state.listing);

  return (
    <div className="mt-20 mb-8">
      <Title
        title="Latest Listings"
        description="Check out the trending and best social profiles available."
      />
      <div className="flex flex-col gap-6 pc-6">
        {listings.slice(0, 4).map((listing, index) => (
          <div key={index} className="mx-auto w-full max-w-3xl rounded-2xl">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestListings;
