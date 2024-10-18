import Button from "../components/Button";
import Navbar from "../ui/Navbar";

function Product() {
  return (
    <>
      <ProductSection1 />
    </>
  );
}

function ProductSection1() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <section className="bg-light-linear-blue h-full min-h-dvh min-w-[1280px] pb-32">
      <div className="bg-grid pb-[69px] pt-16">
        <Navbar navItems={navItems} type="light" />
        <div className="mx-auto mt-[168px] flex w-[960px] justify-between">
          <div className="flex w-[412px] flex-col gap-6">
            <div className="flex flex-col gap-2 text-base">
              <p className="bg-blue-one/20 text-pitch-black/70 w-fit rounded-xl p-2 font-normal">
                The product
              </p>
              <h1 className="text-pitch-black text-[64px] font-bold leading-tight">
                Welcome to the future of education
              </h1>
              <p className="font-medium">
                Sed ut perspiciatis unde omnis iste natus error sit rem
                voluptatem accusantius doloremque laudantium, totam.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" to="">
                Join our waitlist
              </Button>
              <Button variant="outlined-dark" to="">
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex h-full w-[412px] flex-col gap-[69px]">
            {/*PLACEHOLDERS */}
            <div className="mr-auto h-[204px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
            <div className="ml-auto h-[136px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
