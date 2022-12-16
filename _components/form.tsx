import { ContentWrapper } from "./contentwrapper";
import MaskedInput from "./MaskedInput";

export default function Form() {
  return (
    <section className="form_section dark_section">
      <div className="container">
        <ContentWrapper>
          <div className="form_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">узнайте больше</div>
              <p>
                Скачайте презентацию о комплексе таунхаусов Ferdinand, заполнив
                форму ниже.
              </p>
            </div>
            <form action="" className="download_form">
              <input
                type="text"
                className="input"
                name="Имя"
                placeholder="Имя"
                required
              />
              <MaskedInput />
              <input
                type="email"
                className="input"
                name="Email"
                placeholder="Email"
                required
              />
              <button type="submit" className="circle-btn lined">
                скачать презентацию
              </button>
            </form>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
