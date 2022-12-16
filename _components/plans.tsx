"use client";

import { useState } from "react";
import Image from "next/image";
import { ContentWrapper } from "./contentwrapper";
import PlansCard from "./PlansCard";

export default function Plans() {
  const [currentFloor, setCurrentFloor] = useState("1");
  const plans = [
    {
      floor: "1",
      apts: "с 1 по 3 блок-квартиры",
      img: "/images/plans/plan1.png",
      area: "от 100 м2",
    },
    {
      floor: "2",
      apts: "с 4 по 6 блок-квартиры",
      img: "/images/plans/plan1.png",
      area: "от 200 м2",
    },
    {
      floor: "3",
      apts: "с 7 по 9 блок-квартиры",
      img: "/images/plans/plan1.png",
      area: "от 300 м2",
    },
    {
      floor: "4",
      apts: "с 10 по 12 блок-квартиры",
      img: "/images/plans/plan1.png",
      area: "от 400 м2",
    },
  ];
  return (
    <section className="plans_section dark_section" id="prices">
      <div className="container">
        <ContentWrapper>
          <div className="plans_wrapper wrapper ver">
            <div className="plans_content wrapper ver">
              <div className="body_title-box">
                <div className="body_title">
                  <span>планировки</span>
                </div>
                <p>
                  Комплекс состоит из 14 Блок-квартир, построенных как отдельно
                  стоящие здания и объединенные в таунхаусы по 3-4 квартиры с
                  участками от 4 до 7 соток, а 2-метровый каменный забор создаст
                  атмосферу уединения. В каждой блок-квартире имеется: 6 комнат,
                  4 санузла и 5 гардеробных комнаты. Придворовая территория
                  выложена брусчаткой из натурального гранита и озеленена
                  газоном и соснами. Для отведения дождевой воды устроена
                  система ливневой канализации.
                  <br />
                  <br />
                  <strong>Общая площадь</strong> — 401 М2 <br />
                  <strong>Площадь террас</strong> — 131 М2
                </p>
              </div>
              <div className="floors-box wrapper ver">
                <p>Этаж:</p>
                <div className="floors_btns-box wrapper">
                  <button
                    className={
                      currentFloor === "1" ? "floor-btn active" : "floor-btn"
                    }
                    onClick={() => setCurrentFloor("1")}
                  >
                    1
                  </button>
                  <button
                    className={
                      currentFloor === "2" ? "floor-btn active" : "floor-btn"
                    }
                    onClick={() => setCurrentFloor("2")}
                  >
                    2
                  </button>
                  <button
                    className={
                      currentFloor === "3" ? "floor-btn active" : "floor-btn"
                    }
                    onClick={() => setCurrentFloor("3")}
                  >
                    3
                  </button>
                  <button
                    className={
                      currentFloor === "4" ? "floor-btn active" : "floor-btn"
                    }
                    onClick={() => setCurrentFloor("4")}
                  >
                    4
                  </button>
                </div>
              </div>
            </div>
            <div className="floors_cards">
              {plans
                ?.filter((plan) => plan.floor === currentFloor)
                .map((plan) => {
                  return <PlansCard plan={plan} key={plan.img} />;
                })}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
