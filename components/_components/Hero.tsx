import Image, { StaticImageData } from "next/image";
import pic1 from "@/public/pic1.png";
import pic2 from "@/public/pic2.png";
import pic3 from "@/public/pic3.png";
import pic4 from "@/public/pic4.png";
import pic5 from "@/public/pic5.png";

const pictures: StaticImageData[] = [pic2, pic3, pic4, pic5];
function Hero() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-extrabold">VENTURES.co</h1>
      <div className="flext justify-items-start  ">
        <h2 className="text-sm mb-3 font-medium">Company Background</h2>
        <p className="text-[10px] text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          officiis tempora architecto enim, esse ab explicabo vero omnis cum
          atque sapiente sequi voluptatem, veritatis quaerat quisquam molestiae
          saepe incidunt excepturi.
        </p>
      </div>
      <div className="flext justify-items-start  ">
        <h2 className="text-sm mb-3 font-medium">Our Service</h2>
        <p className="text-[10px] text-gray-400">
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
