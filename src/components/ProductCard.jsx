/* eslint-disable react/prop-types */
import { MdOutlineStarBorder } from "react-icons/md";

const ProductCard = ({ product }) => {
  const {
    productImage,
    productName,
    category,
    price,
    ratings,
    description,
    creationDateTime,
  } = product;

  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={productImage} className="rounded-xl h-[300px] w-full" />
      </figure>
      <div className="card-body">
        <div>
          <p className="mr-2 inline-block mb-2 text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-xl text-sm">
            {category}
          </p>
          <p className="mr-2 inline-block mb-2 text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] rounded-xl text-sm">
            Date: {new Date(creationDateTime).toLocaleDateString("en-UK")}
          </p>
        </div>
        <p className="text-2xl font-bold">{productName}</p>
        <p className="border-b-2 border-dotted pb-6 font-medium">
          <span className="font-bold">Product Details</span>:{" "}
          <span className="opacity-80">{description}</span>
        </p>
        <div className="flex">
          <p className="font-medium">
            <span className="font-bold">Price:</span>{" "}
            <span className="opacity-80">${price}</span>
          </p>
          <div className="opacity-80 font-medium flex items-center gap-2">
            <p>{ratings}</p>
            <div>
              <MdOutlineStarBorder></MdOutlineStarBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
