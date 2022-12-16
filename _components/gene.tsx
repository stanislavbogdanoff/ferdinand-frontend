import { ContentWrapper } from "./contentwrapper";
import ModalBtn from "./ModalBtn";

export default function Gene() {
  return (
    <section className="gene_section dark_section">
      <div className="container">
        <ContentWrapper>
          <div className="gene_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">
                ЛУЧШИЙ, <br /> В СВОЕМ РОДЕ
              </div>
              <p>
                Три просторные террасы станут вашим любимым местом отдыха, ведь
                с них открывается отличный вид на город. Проводите время в кругу
                семьи и друзей, наслаждаясь свежим воздухом. Террасы отделаны
                экологичной и долговечной термомодифицированной древесиной.
              </p>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className="circle-btn-box">
        <ModalBtn />
      </div>
    </section>
  );
}
