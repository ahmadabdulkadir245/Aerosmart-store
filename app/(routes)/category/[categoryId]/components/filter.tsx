
interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  return (
    <div className="hidden lg:block col-span-3 text-xs">
      {/* Product categories section */}
      <div className="py-4 px-6 bg-white font-poppins rounded-md">
        <h3 className="text-lg font-semibold mb-3">Product categories</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer"
            />
            <p className="capitalize">Agriculture Materials</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer"
            />
            <p className="capitalize">bricks, blocks & kerbs</p>
          </div>
          {/* ... Other categories */}
        </div>
      </div>
      {/* Custom price section */}
      <div className="py-4 px-6 bg-white font-poppins rounded-md my-4">
        <h3 className="text-lg font-semibold mb-3 text-center">Custom Price</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              name=""
              id=""
              className="border-2 border-gray-400 w-1/2 rounded-md p-2 outline-none"
              placeholder="Min price"
            />
            <input
              type="text"
              name=""
              id=""
              className="border-2 border-gray-400 w-1/2 rounded-md p-2 outline-none"
              placeholder="Max price"
            />
          </div>
        </div>
        <button className="w-full bg-yellow-400 text-white my-3 p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide">
          Filter
        </button>
      </div>
      {/* Brand section */}
      <div className="py-4 px-6 bg-white font-poppins rounded-md my-4">
        <h3 className="text-xl font-semibold mb-3 text-center">Brand</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer"
            />
            <p className="capitalize">Dangote</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer"
            />
            <p className="capitalize">Cemex</p>
          </div>
          {/* ... Other brand checkboxes */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
