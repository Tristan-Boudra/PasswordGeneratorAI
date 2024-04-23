/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-10 md:gap-0 justify-between items-center md:items-start w-full p-10 border-t">
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <p className="text-muted-foreground font-medium text-center md:text-left">
            <span className="text-primary text-xl font-bold">Next AI</span>
            <br />© {currentYear}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-foreground text-lg font-bold">
              Où sommes-nous ?
            </h3>
            <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left mt-3">
              Lyon - France
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-foreground text-lg font-bold">
              Contact
            </h3>
            <Link
              href="telto:0616133806"
              className="text-muted-foreground mt-3"
            >
              01 02 03 04 05
            </Link>
            <Link
              href="mailto:boudratristan@gmail.com"
              className="text-muted-foreground"
            >
              boudratristan@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center mt-10 gap-10 md:gap-0 max-w-screen-xl mx-auto">
        <p className="text-muted-foreground text-center">
          © {currentYear}. Tous droits réservés |{" "}
          <Link href="#">Mentions légales</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
