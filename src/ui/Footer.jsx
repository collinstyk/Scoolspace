function Footer() {
  return (
    <footer className="h-[304px] w-full min-w-[1280px] bg-dark-radial-blue px-40 py-[44px] font-circular-std text-white">
      <div className="mx-auto flex w-full justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex w-[282px] flex-col items-start gap-2">
            <img
              src="images/Scoolspace-logo.svg"
              alt="Scoolspace logo"
              className="h-12"
            />
            <p className="text-[18px] font-normal text-white">
              A new way to <span className="text-purple-one">teach</span>,{" "}
              <span className="text-blue-one">learn</span> and{" "}
              <span className="text-passion-red">love</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold">hello@scoolspace.com</p>

            <div className="align-center flex gap-8 pt-4">
              <a href="">
                <img src="images/icon-twitter.svg" alt="" />
              </a>
              <a href="">
                <img src="images/icon-linkedIn.svg" alt="" />
              </a>
              <a href="">
                <img src="images/icon-instagram.svg" alt="" />
              </a>
              <a href="">
                <img src="images/icon-facebook.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex gap-[88px]">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold">
              <a href="">Company</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">About us</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">FAQ forum</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-semibold">
              <a href="">Product</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">Join the waitlist</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="font-semibold">
              <a href="">Resources</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">Help center</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">Report a problem</a>
            </li>
            <li className="text-sm font-medium opacity-60">
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 w-[1088px] text-center text-xs font-normal tracking-widest">
        Copyright © 2024 Xikolo LLC. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
