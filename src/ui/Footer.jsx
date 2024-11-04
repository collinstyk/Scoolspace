function Footer() {
  return (
    <footer className="font-circular-std flex w-full flex-col items-center bg-dark-radial-blue py-[44px] text-white">
      <div className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[656px] tablet:flex-row tablet:gap-0 flex w-[90%] flex-col justify-between gap-12">
        <div className="tablet:flex-col flex items-start gap-6">
          <div className="flex w-[282px] flex-col items-start gap-2">
            <img
              src="images/Scoolspace-logo.svg"
              alt="Scoolspace logo"
              className="laptop:h-12 tablet:h-6 laptop:w-[244px] w-[137px]"
            />
            <p className="laptop:text-[18px] tablet:text-xs text-[10px] font-normal text-white">
              A new way to <span className="text-purple-one">teach</span>,{" "}
              <span className="text-blue-one">learn</span> and{" "}
              <span className="text-passion-red">love</span>
            </p>
          </div>
          <div className="tablet:gap-4 flex flex-col gap-2">
            <p className="laptop:text-sm tablet:text-xs text-[10px] font-semibold">
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

        <div className="laptop:gap-[88px] tablet:gap-6 relative flex justify-between">
          <ul className="flex flex-col gap-2">
            <li className="laptop:text-base tablet:text-xs font-semibold">
              <a href="">Company</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">About us</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">FAQ forum</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="laptop:text-base tablet:text-xs font-semibold">
              <a href="">Product</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">Join the waitlist</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="laptop:text-base tablet:text-xs font-semibold">
              <a href="">Resources</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">Help center</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">Report a problem</a>
            </li>
            <li className="laptop:text-sm tablet:text-[10px] font-medium opacity-60">
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 w-full text-center text-xs font-normal tracking-widest">
        Copyright © 2024 Xikolo LLC. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
