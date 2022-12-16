"use client";

import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function GreenMap() {
  const center = [51.086545, 71.430133];

  const { height, width } = useWindowDimensions();

  return (
    <YMaps query={{ load: "package.full" }}>
      <Map
        state={{
          center,
          zoom: 14,
          controls: [],
        }}
        width="100%"
        height={width < 600 ? "330px" : "550px"}
      >
        <Placemark
          geometry={[51.086545, 71.430133]}
          options={{
            iconLayout: "default#image",
            iconImageSize: [40, 50],
          }}
        />
      </Map>
    </YMaps>
  );
}
