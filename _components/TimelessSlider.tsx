'use client'

import { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import tml1 from "../public/images/timeless/tml1.png";
import tml2 from "../public/images/timeless/tml2.png";
import tml3 from "../public/images/timeless/tml3.png";

export default function TimelessSlider() {
    const [activeIndex, setActiveIndex] = useState('01');

    function padLeadingZeros(num: number): string {
        var s = num + "";
        while (s.length < 2) s = "0" + s;
        return s;
    }

    return (
        <div className="timeless_slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={1.2}
                scrollbar={{ draggable: true }}
                onRealIndexChange={(element) => { setActiveIndex(padLeadingZeros(element.activeIndex + 1)) }}
                breakpoints={{
                    // when window width is >= 640px
                    500: {
                        slidesPerView: 2.2,
                    },
                    924: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="timeless_slide" style={{
                        backgroundImage: `url(${tml1.src})`,
                    }}>
                        <div className="timeless_slide-title">
                            <span>7</span>
                            <span className='x'>X</span>
                            <div>
                                прочнее <br /> кирпича <br /> на сжатие
                            </div>
                            <div className="slide_overlay">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="timeless_slide" style={{
                        backgroundImage: `url(${tml2.src})`,
                    }}>
                        <div className="timeless_slide-title" >
                            <span>250</span>
                            <span className='x'>лет</span>
                            <div>
                                срок <br /> службы <br /> здания
                            </div>
                            <div className="slide_overlay">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="timeless_slide" style={{
                        backgroundImage: `url(${tml3.src})`,
                    }}>
                        <div className="timeless_slide-title">
                            <span>1,3</span>
                            <span className='x'>м</span>
                            <div>
                                Ширина несущих <br />
                                стен из <br />
                                натурального гранита
                            </div>
                            <div className="slide_overlay">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slider_page">
                <div className="slider_pagenum">
                    {activeIndex}
                </div>
            </div>
        </div>
    )
}