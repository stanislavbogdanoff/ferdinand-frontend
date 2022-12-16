import Image from "next/image";

import std1 from "../public/images/standarts/std1.svg";
import std2 from "../public/images/standarts/std2.svg";
import std3 from "../public/images/standarts/std3.svg";
import { ContentWrapper } from "./contentwrapper";

export default function Standarts() {
  return (
    <section className="standarts_section">
      <div className="container">
        <ContentWrapper>
          <div className="standarts_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">
                <span>высочайшие</span> <br /> стандарты <br /> строительства
              </div>
            </div>
            <div className="standarts_content wrapper ver">
              <div className="standarts_card wrapper">
                <Image src={std1} alt="" />
                <div className="standarts_card-content">
                  <div className="standarts_card-title">ПЕРЕГОРОДКИ</div>
                  <p>Гранит - 200-500 мм</p>
                  <p>Дверные проемы - 2400-3000 мм</p>
                  <p>Витражные окна - 2400-7300 мм</p>
                </div>
              </div>
              <div className="standarts_card wrapper">
                <Image src={std2} alt="" />
                <div className="standarts_card-content">
                  <div className="standarts_card-title">потолки</div>
                  <p>Бетонная стяжка - 40-120мм</p>
                  <p>Утеплитель пеноплекс - 150 мм</p>
                  <p>Гидроизоляция - Унифлекс ЭПП</p>
                </div>
              </div>
              <div className="standarts_card wrapper">
                <Image src={std3} alt="" />
                <div className="standarts_card-content">
                  <div className="standarts_card-title">полы</div>
                  <p>Бетонная стяжка - 100 мм</p>
                  <p>Утеплитель пеноплекс - 100 мм</p>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
