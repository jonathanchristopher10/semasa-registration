import React from "react";

const SP_STICKERS = {
  starYellow: "assets/icons/star-yellow.png",
  starPurple: "assets/icons/star-purple.png",
  flower: "assets/icons/flower.png",
  mascot: "assets/illustrations/mascot-peek.png",
  kid: "assets/illustrations/kid-waving.png",
  girl: "assets/illustrations/girl-tote.png",
  car: "assets/illustrations/car-green.png",
  cactus: "assets/illustrations/cactus-flower.png"
};

/* Absolutely-positioned decorative artwork. Content always sits above it. */
export function Sticker({ name = "starYellow", src, size = 40, top, left, right, bottom, rotate = 0, opacity = 1, basePath = "" }) {
  const url = src || (basePath + SP_STICKERS[name]);
  return (
    <img
      src={url} alt="" aria-hidden="true"
      style={{
        position: "absolute", width: size, height: "auto",
        top, left, right, bottom, opacity,
        transform: "rotate(" + rotate + "deg)",
        pointerEvents: "none", zIndex: 0, mixBlendMode: "multiply"
      }}
    />
  );
}

export const STICKERS = SP_STICKERS;
