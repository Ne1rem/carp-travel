import { FC } from "react";
import Link from "next/link";
import ContactsForm from "./ContactsForm";
import { social } from "@/jsonData/social";

const Contacts: FC = () => {
  return (
    <footer id="contacts" className="footer-section">
      <div className="padding-x padding-y max-width grid grid-cols-3  md:grid-cols-4 xl:grid-cols-2">
        <div className="col-span-3 col-start-1 pb-9 md:col-span-4 xl:col-span-2">
          <h2 className="header-2 mb-[8px] col-span-2 col-start-2">
            Contact <span className="font-medium">us</span>
          </h2>
        </div>
        <div className="flex col-start-1 col-span-3 justify-end pb-6 md:col-span-2  md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3
        xl:md:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:justify-center">
          <div className="flex col-span-2 col-start-1 flex-col header-5">
            <a href="tel:+38 (098) 12 34 567">+38 (098) 12 34 567</a>
            <a href="tel:+38 (073) 12 34 567">+38 (073) 12 34 567</a>
          </div>
          <p className="col-span-1 py-0 pl-5">Phone number</p>
        </div>
        <div className="flex col-start-1 col-span-3 justify-end  pb-6 pr-[52px] md:pr-[66px] md:col-span-2  md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 md:pb-16 xl:md:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-4 xl:justify-center xl:pr-[116px]">
          <a className="header-5" href="mailto:support@carptravel.com">
            support@carptravel.com
          </a>
          <p className="text-style pl-5">E-mail</p>
        </div>
        <div className="flex col-span-3 pb-3 justify-end pr-[30px] md:col-span-2
        md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-4 md:justify-center
        xl:md:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-5 xl:justify-center xl:pr-0 xl:flex-row-reverse xl:text-right xl:gap-5 xl:pl-12">
          <p className=" col-start-2 justify-end pr-4 ">Follow us</p>
          <div className="flex flex-col ">
          <ul>
            {social.map(({ title, path }) => (
              <li key={title} className="w-86px desktop:text-right">
                <Link
                  className="header-5 "
                  href={path}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
        <ContactsForm />
      </div>
    </footer>
  );
};

export default Contacts;
