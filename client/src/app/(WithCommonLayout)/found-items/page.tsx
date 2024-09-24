import { title } from "@/src/components/primitives";
import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";

const Page = async () => {
  const { data } = await axiosInstance.get("/items");

  return (
    <Container>
      <div className="mx-auto my-5 space-y-10 max-w-[720px]">
        {data?.data?.map((post: any) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default Page;
