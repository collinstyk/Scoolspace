function Footer() {
  return (
    <footer className="bg-dark-radial-blue font-circular-std h-[304px] w-full min-w-[1280px] py-12 text-white">
      <div className="mx-auto flex w-[1088px] justify-between">
        <div className="flex w-[282px] flex-col items-start gap-4">
          <img
            src="src/assets/images/Scoolspace-logo.svg"
            alt="Scoolspace logo"
            className="h-12"
          />
          <p className="text-[18px] font-normal text-white">
            A new way to <span className="text-purple-one">teach</span>,{" "}
            <span className="text-blue-one">learn</span> and{" "}
            <span className="text-passion-red">love</span>
          </p>
          <div className="align-center flex gap-8 pt-4">
            <a href="">
              <img src="src/assets/images/icon-twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="src/assets/images/icon-instagram.svg" alt="" />
            </a>
            <a href="">
              <img src="src/assets/images/icon-linkedIn.svg" alt="" />
            </a>
            <a href="">
              <img src="src/assets/images/icon-facebook.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="relative flex items-center">
          <ul className="grid grid-cols-3 gap-4 text-center text-base font-normal">
            <li className="font-medium">
              <a href="">Company</a>
            </li>
            <li className="font-medium">
              <a href="">Product</a>
            </li>
            <li className="font-medium">
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Solutions</a>
            </li>
            <li>
              <a href="">Help center</a>
            </li>
            <li></li>
            <li>
              <a href="">Users</a>
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
