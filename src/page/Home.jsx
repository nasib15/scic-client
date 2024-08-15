import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const axiosFetch = useAxios();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", sort, search],
    queryFn: async () => {
      const { data } = await axiosFetch(
        `/products?sort=${sort}&search=${search}`
      );
      return data;
    },
  });

  console.log(search);

  if (isLoading) return <Loading />;

  return (
    <>
      <div>
        <h1 className="mt-10 text-3xl font-bold text-center">Products</h1>
        <p className="mx-auto text-center max-w-[70%] mt-4 text-gray-600">
          Discover our diverse range of high-quality products, from cutting-edge
          electronics to stylish home essentials. Each item is carefully
          selected to meet your needs and enhance your lifestyle.
        </p>
      </div>
      {/* dropdown menu */}
      <div className="flex items-center mx-auto text-center mt-4 gap-4">
        <SearchBox setSearch={setSearch} />
        <Dropdown setSort={setSort} />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
