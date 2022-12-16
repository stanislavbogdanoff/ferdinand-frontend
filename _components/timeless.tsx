import { ContentWrapper } from "./contentwrapper";
import TimelessSlider from "./TimelessSlider";

export default function Timeless() {
  return (
    <section className="time_section dark_section" id="next">
      <div className="container">
        <ContentWrapper>
          <div className="wrapper time_wrapper ver">
            <div className="body_title-box lined lined-down">
              <div className="body_title">ВНЕ ВРЕМЕНИ</div>
              <p>
                Объединяя вековые европейские традиции строительства и
                современные технологии мы создали предмет искусства.
              </p>
            </div>
            <TimelessSlider />
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
