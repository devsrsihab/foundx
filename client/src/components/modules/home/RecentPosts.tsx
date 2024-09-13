import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async () => {

  const {data: products } = await getRecentPosts()
console.log(products);
  return (
    <div>
      <h2>Welcome to the RecentPosts Component</h2>
      {
        products?.map((product: any) => (
          <div key={product.id}>
            {product.title}
          </div>
        ))
      }
    </div>
  );
};

export default RecentPosts;
