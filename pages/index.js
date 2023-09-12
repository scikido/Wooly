import Categories from "@/components/Categories";
import Layout from "@/components/Layout";
import Products from "@/components/Products";
import { data } from "@/utils/data";

export default function Home() {
  const rawWool = data.products.filter((product) =>
    product.category.includes("raw-wool")
  );

  const combedWool = data.products.filter((product) =>
    product.category.includes("combed-wool")
  );
  return (
    <>
      <Layout title="Home Page">
        <div className="flex flex-col justify-center items-center md:mt-28 mt-16">
          <div className="p-8">
            <h1 className="text-2xl font-bold">Top Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-16 gap-8  pt-6">
              {data.categories.map((category) => (
                <Categories category={category} key={category.slug} />
              ))}
            </div>
          </div>
          <div className="pt-5">
            <h1 className="text-2xl font-bold">Raw Wool</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
              {rawWool.map((product) => (
                <Products product={product} key={product.slug} />
              ))}
            </div>
          </div>
          <div className="pt-8">
            <h1 className="text-2xl font-bold">Combed Wool</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
              {combedWool.map((product) => (
                <Products product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
