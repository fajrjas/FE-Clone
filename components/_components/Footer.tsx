export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 pt-2 px-6 pb-6 lg:pt-7 lg:gap-12">
      {/* again no picture for this logo vT  😂 */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] lg:text-base">vT</p>
        <p className="font-extralight text-[12px] lg:text-lg">Ventures</p>
      </div>
      <p className="text-[13px] font-light lg:text-xl">
        <span className="text-[16px]">&copy;</span> 2024 ZwifthTech. All Right
        Reserved.
      </p>
    </footer>
  );
}
