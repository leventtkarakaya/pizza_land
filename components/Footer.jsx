import Image from "next/image";

import Link from "next/link";

import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          {/* logo */}
          <Link href={"#"}>
            <Image src={"logo.svg"} width={180} height={180} alt="logo" />
          </Link>
          {/* socials icons */}
          <div className="flex gap-x-6 text-white">
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaLinkedin />
            </Link>
          </div>
          {/* copyright */}
          <div className="text-white font-medium">
            CopyRight &copy; PizzLand 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
