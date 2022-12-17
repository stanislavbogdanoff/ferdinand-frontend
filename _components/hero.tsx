import Image from "next/image";
import arrow from "../public/images/icons/arrow.svg";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="container">
        <HeroContent />
        <a href="#next" className="scroll-btn">
          <div>
            <Image src={arrow} alt={""} className="arrow bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
