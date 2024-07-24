import Image, { StaticImageData } from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BsGlobeAmericas } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import Button from "./Button";

const icons = [
  <TiSocialFacebook />,
  <FaXTwitter />,
  <PiMessengerLogo />,
  <BsGlobeAmericas />,
  <MdOutlinePhone />,
];

export default function Header() {
  return (
    <Card className="min-w-[300px] h-[470px] md:min-w-[600px] md:h-[615px] lg:h-[740px] border transition-all ">
      {/* I dont know if it's picture kaya text lang....*/}
      <CardDescription className="text-sm font-bold text-black text-center pt-2 lg:text-lg ">
        zwift..
      </CardDescription>
      <div className="relative min-w-[300px] md:w-[550px] lg:w-[700px] h-[150px] md:h-[250px] mx-7 -top-2 transition-all ">
        <Image
          src={"/bg.png"}
          alt="profile-image"
          fill
          priority={true}
          // placeholder="blur"
          className="object-cover rounded-lg mt-5 "
        />
      </div>
      <CardContent className="-translate-y-12 flex items-center justify-center">
        <CardHeader className="grid place-items-center text-center lg:gap-3">
          <Avatar className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <div className="relative w-20 h-20 ">
      <Avatar
        src={"/profile.png"}
        alt="profile-image"
        fill
        className="object-cover rounded-full"
      />
    </div> */}
          <CardTitle className="mb-2 md:text-2xl transition lg:text-4xl">
            John Doe
          </CardTitle>
          <div>
            <CardDescription className="text-sm md:text-base lg:text-2xl">
              Chief Techonology Officer
            </CardDescription>
            <CardDescription className="text-[13px] md:text-sm lg:text-xl">
              JohnDoe@gmail.com
            </CardDescription>
            <CardDescription className="text-[13px] md:text-sm lg:text-xl">
              +639123456789
            </CardDescription>
          </div>
          <CardContent className="flex gap-2 pt-3  lg:gap-6">
            <div>
              <button className="rounded-full border-black border bg-none p-2 hover:bg-blue-50">
                <HiOutlineEnvelope className="text-lg lg:text-2xl" />
              </button>
              <p className="text-[10px] lg:text-lg">Add</p>
            </div>
            <div>
              <button className="rounded-full border-black border bg-none p-2 hover:bg-blue-50">
                <CiBookmark className="text-lg lg:text-2xl" />
              </button>
              <p className="text-[10px] lg:text-xl">Save</p>
            </div>
          </CardContent>
        </CardHeader>
      </CardContent>
      <CardFooter className="flex justify-between -translate-y-24">
        {icons.map((icon, i) => {
          return (
            <Button
              variant={"ghost"}
              key={i}
              className="text-lg md:text-xl lg:text-2xl"
            >
              {icon}
            </Button>
          );
        })}
      </CardFooter>
    </Card>
  );
}
