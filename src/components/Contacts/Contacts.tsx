import { FC } from "react";
import Link from "next/link";
import ContactsForm from "./ContactsForm";

const Contacts: FC = () => {
  return (
    <footer id="contacts" className="footer-section">
      <div className="padding-x padding-y max-width grid grid-cols-3">
          <div className="col-span-3 col-start-1">
          <h2 className="header-2 mb-[8px] col-span-2 col-start-2">
            Contact <span className="font-medium">us</span>
          </h2>
          </div >
          <div className="col-span-3">
            <div className="flex flex-col">
              <a href="tel:+38 (098) 12 34 567">+38 (098) 12 34 567</a>
              <a href="tel:+38 (073) 12 34 567">+38 (073) 12 34 567</a>
            </div>
            <p>Phone number</p>
          </div>
          <div>
            <a href="mailto:support@carptravel.com">support@carptravel.com</a>
            <p>E-mail</p>
          </div>
          <div>
            <p>Follow us</p>
            <Link href="https://www.facebook.com/" target="_blank">facebook</Link>
            <Link href="https://www.instagram.com/" target="_blank">instagram</Link>
            <Link href="https://www.youtube.com/" target="_blank">youtube</Link>
            <Link href="https://www.tiktok.com/uk-UA/" target="_blank">tiktok</Link>
          </div>
          <ContactsForm/>
      </div>
    </footer>
  );
};

export default Contacts;
