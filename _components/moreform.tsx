import { ContentWrapper } from "./contentwrapper";
import MaskedInput from "./MaskedInput";
import ModalBtn from "./ModalBtn";

export default function MoreForm() {
  return (
    <section
      className="form_section moreform_section dark_section"
      id="contacts"
    >
      <div className="container">
        <ContentWrapper>
          <div className="form_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">узнайте больше</div>
              <p>
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>
            <form action="" className="download_form">
              <input
                type="text"
                className="input"
                name="Имя"
                placeholder="Имя"
              />
              <MaskedInput />
              <input
                type="email"
                className="input"
                name="Email"
                placeholder="Email"
              />
              <ModalBtn lined />
            </form>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
