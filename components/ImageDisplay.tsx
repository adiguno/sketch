import Image from "next/image";
import hardCodeReference from "../public/images/sticker.jpeg";
export function ImageDisplay() {
  return <Image src={hardCodeReference} alt="reference image" layout="fill" />;
}
