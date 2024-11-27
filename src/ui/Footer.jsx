function Footer() {
  return (
    <footer className="font-circular-std flex w-full flex-col items-center bg-dark-radial-blue py-[44px] text-white">
      <div className="flex w-[90%] flex-col justify-between gap-12 tablet:w-[656px] tablet:flex-row tablet:gap-0 laptop:w-[960px] desktop:w-[1200px]">
        <div className="flex items-start gap-6 tablet:flex-col">
          <div className="flex w-[295px] flex-col items-start gap-2">
            <img
              src="images/Scoolspace_logow.svg"
              alt="Scoolspace"
              className="w-[137px] tablet:h-full tablet:w-2/3 laptop:h-full"
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
              <a href="https://x.com/scoolspace">
                <img src="images/icon-twitter.svg" alt="x" />
              </a>
              <a href="https://www.linkedin.com/company/scoolspace">
                <img src="images/icon-linkedIn.svg" alt="linkedIn" />
              </a>
              <a href="https://www.instagram.com/scoolspace/">
                <img src="images/icon-instagram.svg" alt="instagram" />
              </a>
              {/* <a href="">
                <img src="images/icon-facebook.svg" alt="" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="relative flex justify-between gap-2 text-[10px] tracking-wide tablet:gap-6 tablet:text-xs laptop:gap-[88px] laptop:text-base">
          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold tablet:text-sm laptop:text-base">
              <a href="">Company</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">About us</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">FAQ forum</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold tablet:text-sm laptop:text-base">
              <a href="">Product</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">Join the waitlist</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="text-xs font-semibold tablet:text-sm laptop:text-base">
              <a href="">Resources</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">Help center</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">Report a problem</a>
            </li>
            <li className="text-[10px] font-medium opacity-60 laptop:text-sm">
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 w-full text-center text-[10px] font-normal tracking-widest tablet:text-xs">
        Copyright © 2024, Scoolspace. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
