import Image from "next/image";
import { ContentWrapper } from "./contentwrapper";

export default function Feautures() {
  const feats = [
    {
      img: "/images/features/feat1.svg",
      text: "Расположен в Зеленом поясе столицы.",
    },
    {
      img: "/images/features/feat2.svg",
      text: "Натуральные материалы строительства (гранит, дерево).",
    },
    {
      img: "/images/features/feat3.svg",
      text: "Высота потолков от 4 до 8 м.",
    },
    {
      img: "/images/features/feat4.svg",
      text: "Витражные окна до 7.3 м.",
    },
    {
      img: "/images/features/feat5.svg",
      text: "3 террасы в чистовой отделке S=140 м2.",
    },
    {
      img: "/images/features/feat6.svg",
      text: "Настоящий камин с дымоходом.",
    },
    {
      img: "/images/features/feat7.svg",
      text: "Толщина внешних стен 1.3 м.",
    },
    {
      img: "/images/features/feat8.svg",
      text: "Гараж на 2 машины с автоматическим открыванием.",
    },
    {
      img: "/images/features/feat9.svg",
      text: "Центральные коммуникации",
    },
  ];
  return (
    <section className="feat_section" id="features">
      <div className="container">
        <ContentWrapper>
          <div className="feat_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">
                <span>ОСОБЕННОСТИ</span> <br /> Ferdinand
              </div>
            </div>
            <div className="feat_grid">
              {feats.map((feat, index) => {
                return (
                  <div className="feat_card" key={index}>
                    <div className="icon-btn">
                      <Image src={feat.img} alt="" width={35} height={35} />
                    </div>
                    <div className="feat_card-num">0{index + 1}</div>
                    <div className="feat_card-text">{feat.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
