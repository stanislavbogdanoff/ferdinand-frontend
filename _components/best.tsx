import BestSlider from "./BestSlider";
import { ContentWrapper } from "./contentwrapper";

export default function Best() {
  return (
    <section className="best_section dark_section">
      <div className="container">
        <ContentWrapper>
          <div className="best_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">ЛУЧШИЕ ТЕХНОЛОГИИ</div>
              <p>
                Множество исследований и испытаний, привлечение зарубежных
                технических специалистов и развитый инженерно — проектировочный
                комплекс позволили в полной мере реализовать преимущества
                постройки из натурального камня. Экологическая чистота материалов,
                собственный микроклимат и энергоэффективность — лишь некоторые из
                преимуществ обеспечивающих комфорт, недоступный нашим конкурентам.
              </p>
            </div>
            <BestSlider />
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
