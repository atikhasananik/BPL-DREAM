const PlayerSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white animate-pulse flex flex-col justify-between"
        >
          <div>
            {/* Player Image Placeholder */}
            <div className="w-full h-44 bg-gray-200 rounded-xl mb-4" />

            {/* Icon + Name Placeholder */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-gray-200 rounded-full" />
              <div className="h-5 bg-gray-200 rounded w-36" />
            </div>

            {/* Country + Role Tag Row */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-12" />
              </div>
              <div className="h-6 w-20 bg-gray-200 rounded-md" />
            </div>

            <hr className="border-gray-100 mb-4" />

            {/* Rating Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="h-4 bg-gray-200 rounded w-14" />
              <div className="h-4 bg-gray-200 rounded w-6" />
            </div>

            {/* Left Hand Bat Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="h-4 bg-gray-200 rounded w-24" />
              <div className="h-4 bg-gray-200 rounded w-10" />
            </div>

            {/* Price & Choose Player Button Row */}
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-200 rounded w-28" />
              <div className="h-8 w-24 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerSkeleton;
