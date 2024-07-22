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
    <Card className="w-[350px] h-[470px] border-transparent">
      {/* I dont know if it's picture kaya text lang....*/}
      <CardDescription className="text-sm font-bold text-black text-center pt-2">
        zwift..
      </CardDescription>
      <div className="relative w-[300px] h-[150px] mx-auto -top-2">
        <Image
          src={"/bg.png"}
          alt="profile-image"
          fill
          priority={true}
          className="object-cover rounded-lg mt-5"
        />
      </div>
      <CardContent className="-translate-y-12 flex items-center justify-center">
        <CardHeader className="grid place-items-center  text-center">
          <Avatar className="w-20 h-20">
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
          <CardTitle className="mb-2">John Doe</CardTitle>
          <div>
            <CardDescription className="text-sm">
              Chief Techonology Officer
            </CardDescription>
            <CardDescription className="text-[13px]">
              JohnDoe@gmail.com
            </CardDescription>
            <CardDescription className="text-[13px]">
              +639123456789
            </CardDescription>
          </div>
          <CardContent className="flex gap-2 pt-3 ">
            <div>
              <button className="rounded-full border-black border bg-none p-2 hover:bg-blue-50">
                <HiOutlineEnvelope className="text-lg" />
              </button>
              <p className="text-[10px]">Add</p>
            </div>
            <div>
              <button className="rounded-full border-black border bg-none p-2 hover:bg-blue-50">
                <CiBookmark className="text-lg" />
              </button>
              <p className="text-[10px]">Save</p>
            </div>
          </CardContent>
        </CardHeader>
      </CardContent>
      <CardFooter className="flex justify-between -translate-y-24">
        {icons.map((icon, i) => {
          return (
            <Button variant={"ghost"} key={i} className="text-lg">
              {icon}
            </Button>
          );
        })}
      </CardFooter>
    </Card>
  );
}
