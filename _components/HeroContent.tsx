"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { ContentWrapper } from "./contentwrapper";
import line from "../public/images/icons/line.svg";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        if (typeof window !== "undefined")
            window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}


export default function HeroContent() {
    const { height, width } = useWindowDimensions();
    return (
        <ContentWrapper>
            {width <= 600 ? (
                <div className="hero_content">
                    <div className="hero_title">
                        <span>КОМПЛЕКС ТАУНХАУСОВ </span> <br /> ИЗ НАТУРАЛЬНОГО ГРАНИТА
                        В ЭЛИТНОМ РАЙОНЕ АСТАНЫ
                    </div>
                    <button className="primary-btn">1 200 000 тг/м2.</button>
                    <Image src={line} alt="" className="line" />
                    <div className="hero_subtitle">ЕДИНСТВЕННЫЙ В СВОЕМ РОДЕ</div>
                </div>
            ) : (
                <div className="hero_content">
                    <div className="hero_title">
                        ЕДИНСТВЕННЫЙ <br /> <span>В СВОЕМ РОДЕ</span>
                    </div>
                    <Image src={line} alt="" className="line" />
                    <p className="hero_subtitle">
                        Комплекс таунхаусов из натурального камня в элитном районе
                        Астаны
                    </p>
                </div>
            )}
        </ContentWrapper>

    )
}