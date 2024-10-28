function CustomSelect() {
  return (
    <div className="relative w-fit">
      <div className="flex h-[60px] w-[90px] items-center justify-center gap-2 rounded-lg bg-pitch-black/10">
        <img src="images/ngn-flag.png" alt="" className="h-[18.29px] w-8" />
        <img src="images/icon-chevron.svg" alt="" className="h-4 w-4" />
      </div>
      {/* <div className="absolute mt-1 rounded-lg bg-white shadow-md">
        <div className="w-[90px] cursor-pointer px-[17px] py-[20px]">
          <div className="flex w-4/5 items-center gap-1">
            <img src="images/ngn-flag.png" alt="" className="h-4 w-5" />
            <span className="text-sm">+234</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CustomSelect;
