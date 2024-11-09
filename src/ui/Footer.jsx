function Footer() {
  return (
    <footer className="font-circular-std flex w-full flex-col items-center bg-dark-radial-blue py-[44px] text-white">
      <div className="flex w-[90%] flex-col justify-between gap-12 tablet:w-[656px] tablet:flex-row tablet:gap-0 laptop:w-[960px] desktop:w-[1200px]">
        <div className="flex items-start gap-6 tablet:flex-col">
          <div className="flex w-[282px] flex-col items-start gap-2">
            <img
              src="images/Scoolspace-logo.svg"
              alt="Scoolspace logo"
              className="w-[137px] tablet:h-6 laptop:h-12 laptop:w-[244px]"
            />
            <p className="text-[10px] font-normal text-white tablet:text-xs laptop:text-[18px]">
              A new way to <span className="text-purple-one">teach</span>,{" "}
              <span className="text-blue-one">learn</span> and{" "}
              <span className="text-passion-red">love</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 tablet:gap-4">
            <p className="text-[10px] font-semibold tablet:text-xs laptop:text-sm">
              hello@scoolspace.com
            </p>

            <div className="align-center flex gap-8">
              <a href="">
                <img src="images/icon-twitter.svg" alt="" />
              </a>
              <a href="">
                <img src="images/icon-linkedIn.svg" alt="" />
              </a>
              <a href="">
                <img src="images/icon-instagram.svg" alt="" />
              </a>
              {/* <a href="">
                <img src="images/icon-facebook.svg" alt="" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="relative flex justify-between gap-2 text-center tablet:gap-6 laptop:gap-[88px]">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold tablet:text-xs laptop:text-base">
              <a href="">Company</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">About us</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">FAQ forum</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-semibold tablet:text-xs laptop:text-base">
              <a href="">Product</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">Join the waitlist</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-semibold tablet:text-xs laptop:text-base">
              <a href="">Resources</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">Help center</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">Report a problem</a>
            </li>
            <li className="font-medium opacity-60 tablet:text-[10px] laptop:text-sm">
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 w-full text-center text-xs font-normal tracking-widest">
        Copyright © 2024, Scoolspace. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
