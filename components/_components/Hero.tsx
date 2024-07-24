import Image, { StaticImageData } from "next/image";
import pic1 from "@/public/pic1.png";
import pic2 from "@/public/pic2.png";
import pic3 from "@/public/pic3.png";
import pic4 from "@/public/pic4.png";
import pic5 from "@/public/pic5.png";

const pictures: StaticImageData[] = [pic2, pic3, pic4, pic5];
function Hero() {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[500px] md:max-w-[600px] lg:max-w-[750px] lg:gap-16 ">
      <h1 className="text-5xl font-extrabold lg:text-6xl">VENTURES.co</h1>
      <div className="justify-items-start  ">
        <h2 className="text-sm mb-3 font-medium lg:text-2xl">
          Company Background
        </h2>
        <p className="text-[10px] text-gray-400 lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          officiis tempora architecto enim, esse ab explicabo vero omnis cum
          atque sapiente sequi voluptatem, veritatis quaerat quisquam molestiae
          saepe incidunt excepturi.
        </p>
      </div>
      <div className="justify-items-start ">
        <h2 className="text-sm mb-3 font-medium lg:text-2xl">Our Service</h2>
        <p className="text-[10px] text-gray-400 lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          officiis tempora architecto enim, esse ab explicabo vero omnis cum.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {pictures.map((pic, i) => {
          return (
            <div key={i}>
              <Image
                src={pic}
                alt={pic.src}
                placeholder="blur"
                className="rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
