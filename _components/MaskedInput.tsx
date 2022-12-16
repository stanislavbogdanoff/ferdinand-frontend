"use client";

import { PatternFormat } from "react-number-format";

export default function MaskedInput() {
  return (
    <PatternFormat
      placeholder="+7 (...)"
      format="+7 (###) ### ## ##"
      allowEmptyFormatting={false}
      mask="."
      required
    />
  );
}
