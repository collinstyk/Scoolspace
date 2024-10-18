import Navbar from "../ui/Navbar";

function Product() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <>
      <div className="bg-grid min-h-dvh w-full max-w-fit bg-[#00A6DF1A] pt-16">
        <Navbar navItems={navItems} type="light" />
      </div>
      ;
    </>
  );
}

export default Product;
