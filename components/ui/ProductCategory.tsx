import Filter from "../shared/Filter";
import { SelectComp } from "../shared/Select";

const ProductCategory = () => {
  return (
    <div className="mt-24 lg:my-10 space-y-4 sm:space-y-8">
      <div className="relative">
        <h1 className="text-center text-3xl font-bold text-[#F7AD3D]">
          Product Categories
        </h1>
        <div className="absolute right-[8%] sm:right-[28%] md:right-[30%] lg:right-[40%] -top-8">
          <img src="/butterfly.png" alt="" />
        </div>
      </div>

      <div className="sm:hidden w-full px-4 my-6">
        <SelectComp
          items={[
            {
              label: "Clothes",
              value: "clothes",
            },
            {
              label: "Accessories",
              value: "accessories",
            },
            {
              label: "Toys",
              value: "toys",
            },
            {
              label: "Footware",
              value: "footware",
            },
            {
              label: "New Arrivals",
              value: "newArrivals",
            },
            {
              label: "Gift Sets",
              value: "giftSets",
            },
          ]}
          label="Category"
          placeholder="Select Category"
        />
      </div>
      <div className="hidden sm:block sm:mx-8 md:mx-14 lg:mx-20 my-5">
        <Filter
          filterField="category"
          options={[
            {
              label: "Clothes",
              value: "clothes",
            },
            {
              label: "Accessories",
              value: "accessories",
            },
            {
              label: "Toys",
              value: "toys",
            },
            {
              label: "Footware",
              value: "footware",
            },
            {
              label: "New Arrivals",
              value: "newArrivals",
            },
            {
              label: "Gift Sets",
              value: "giftSets",
            },
          ]}
        />
      </div>
    </div>
  );
};
export default ProductCategory;
