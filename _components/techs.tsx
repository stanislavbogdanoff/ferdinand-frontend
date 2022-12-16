import { ContentWrapper } from "./contentwrapper";
import TechsSlider from "./TechsSlider";

export default function Techs() {
  return (
    <section className="techs_section dark_section">
      <div className="container">
        <ContentWrapper>
          <div className="techs_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">тЕХНИЧЕСКИЕ ОСОБЕННОСТИ</div>
            </div>
            <TechsSlider />
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
