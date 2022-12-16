import { ContentWrapper } from "./contentwrapper";
import GallerySlider from "./GallerySlider";

export default function Gallery() {
  return (
    <section className="gallery_section dark_section" id="gallery">
      <div className="container">
        <ContentWrapper>
          <div className="gallery_wrapper wrapper ver">
            <div className="body_title-box lined lined-down">
              <div className="body_title">
                <span>галерея</span>
              </div>
            </div>
            <GallerySlider />
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
