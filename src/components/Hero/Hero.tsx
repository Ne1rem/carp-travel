import {FC} from 'react';
import Link from "next/link";

const Hero:FC = () => {
  return (
    <section className=" hero-section ">
      <div>
        <div>
          <div>
            <h1>
              7days
              <span>journey</span>
            </h1>
            <div>
              <h2>Uncover Carpathian&apos;s secrets</h2>

              <p>
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </p>
            </div>
            <div>
              <p>
                We offer you unforgettable trips to the most beautiful parts of
                the Carpathians. Enjoy stunning views, exciting expeditions, and
                the best service!
              </p>
              <Link href="contacts" className="button-hero">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
