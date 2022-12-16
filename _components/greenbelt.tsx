import { ContentWrapper } from "./contentwrapper";
import GreenMap from "./GreenMap";

export default function Greenbelt() {
  return (
    <section className="greenbelt_section dark_section" id="location">
      <div className="container">
        <ContentWrapper>
          <div className="greenbelt_wrapper wrapper ver">
            <div className="body_title-box lined lined-down">
              <div className="body_title">ЗЕЛЕНЫЙ ПОЯС</div>
              <p>
                Развитая инфраструктура в шаговой доступности в ЗЕЛЕНОМ ПОЯСЕ
                столицы, где чистый воздух и тишина.
              </p>
            </div>
            <div className="map-box">
              <GreenMap />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
