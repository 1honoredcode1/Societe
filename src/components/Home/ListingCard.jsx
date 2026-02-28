import { BadgeCheck, LineChart, MapPin, User } from "lucide-react";
import { platformIcons } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ listing }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden 
  hover:shadow-md transition"
    >
      {/* Banner */}
      {listing.featured && (
        <>
          <p className="py-1" />
          <div
            className="absolute top-0 left-0 w-full 
            bg-linear-to-r from-primary to-secondary-dull text-white text-center text-xs 
            font-semibold py-1 tracking-wide uppercase"
          >
            Featured
          </div>
        </>
      )}
      <div className="p-5 pt-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          {platformIcons[listing.platform]}
          <div className="flex flex-col">
            <h2>{listing.title} </h2>
            <p>
              @{listing.username} -{" "}
              <span className="capitalize">{listing.platform}</span>{" "}
            </p>
          </div>
          {listing.verified && (
            <BadgeCheck className="text-green-400 ml-auto w-5 h-5" />
          )}
        </div>
        {/* Stats */}
        <div className="flex flex-wrap justify-between max-w-lg items-center gap-3 my-5">
          <div className="flex items-center text-sm text-gray-600">
            <User className="size-6 mr-1 text-gray-400" />
            <span className="text-lg font-medium text-slate-800 mr-1.5">
              {listing.followers_count.toLocaleString()}{" "}
            </span>{" "}
            followers
          </div>
          {listing.engagement_rate && (
            <div className="flex items-center text-sm text-gray-600">
              <LineChart className="size-6 mr-1 text-gray-400" />
              <span className="text-lg font-medium text-slate-800 mr-1.5">
                {listing.engagement_rate}{" "}
              </span>{" "}
              % engagement
            </div>
          )}
        </div>
        {/* Location and Extra */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-medium bg-primary-dull/40 text-primary px-3 py-1 rounded-full capitalize">
            {listing.niche}{" "}
          </span>
          {listing.country && (
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="size-6 mr-1 text-gray-500" />
              {listing.country}
            </div>
          )}
        </div>
        {/* Descriptipm */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {listing.description}{" "}
        </p>
        <hr className="my-5 border-gray-200" />
        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-2xl font-medium text-slate-800">
              {currency} {listing.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={() => {
              navigate(`/listing/${listing.id}`);
              scrollTo(0, 0);
            }}
            className="px-7 py-3 bg-primary text-white text-sm rounded-lg hover:bg-primary-dull transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
