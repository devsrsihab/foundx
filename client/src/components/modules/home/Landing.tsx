import { Input } from "@nextui-org/input";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center ">
      <div className=" mx-auto pt-32 max-w-xl">
        <form>
          <Input classNames={{ 
              inputWrapper: "bg-default-100",
              input: "text-sm"

           }} type="text" label="Search..." />
        </form>
      </div>
    </div>
  );
};

export default Landing;
