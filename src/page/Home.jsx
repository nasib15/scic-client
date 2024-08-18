import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import Pagination from "../components/Pagination";
import CategoryDropdown from "../components/CategoryDropdown";
import BrandDropdown from "../components/BrandDropdown";
import PriceRange from "../components/PriceRange";

const Home = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState({ left: "50%", opacity: 0 });

  const axiosFetch = useAxios();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", sort, search, currentPage, category, brand, price],
    queryFn: async () => {
      const { data } = await axiosFetch(
        `/products?sort=${sort}&search=${search}&page=${currentPage}&category=${category}&brand=${brand}&price=${price}`
      );
      return data;
    },
  });

  const { products: productsData, totalProducts } = products || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <div>
        <h1 className="mt-10 text-3xl font-bold text-center">Products</h1>
        <p className="mx-auto text-center md:max-w-[70%] mt-4 text-gray-600">
          Discover our diverse range of high-quality products, from cutting-edge
          electronics to stylish home essentials. Each item is carefully
          selected to meet your needs and enhance your lifestyle.
        </p>
      </div>
      {/* dropdown menu */}
      <div className="flex lg:flex-row flex-col items-center mx-auto text-center my-10 gap-4">
        <SearchBox
          setSearch={setSearch}
          setSort={setSort}
          setCategory={setCategory}
          setBrand={setBrand}
          setPrice={setPrice}
          search={search}
        />
        <div className="flex items-center gap-4 flex-col lg:flex-row">
          <Dropdown setSort={setSort} setCurrentPage={setCurrentPage} />
          <CategoryDropdown
            setCategory={setCategory}
            setCurrentPage={setCurrentPage}
          />
          <BrandDropdown setBrand={setBrand} setCurrentPage={setCurrentPage} />
          <PriceRange
            price={price}
            setPrice={setPrice}
            tooltipStyle={tooltipStyle}
            setTooltipStyle={setTooltipStyle}
          />
        </div>
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="my-4">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          count={totalProducts}
          products={productsData}
        />
      </div>
    </>
  );
};

export default Home;
