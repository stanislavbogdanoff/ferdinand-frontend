import "../../styles/globals.scss";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="success_page">
      <section className="success_section dark_section">
        <div className="container">
          <div className="success_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">спасибо! ваша заявка отправлена</div>
              <p>
                Наш менеджер свяжется с вами по указанному телефону в самое
                ближайшее время
              </p>
            </div>
            <a href="instagram.com" className="circle-btn lined">
              посетить наш <br />
              instagram
            </a>
            <Link href={"/"} scroll={false} className="circle-btn trans">
              вернуться <br />
              на сайт
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
