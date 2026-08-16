import * as React from "react";

export interface StickerProps {
  /** Named artwork from assets/. Ignored when src is given. */
  name?: "starYellow" | "starPurple" | "flower" | "mascot" | "kid" | "girl" | "car" | "cactus";
  /** Explicit image path override. */
  src?: string;
  /** Width in px; height follows. Sparkles 18–40, characters 120–220. */
  size?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  /** Degrees of rotation, ±20 keeps it playful without looking broken. */
  rotate?: number;
  opacity?: number;
  /** Prefix added to the named path, e.g. "../../" from a nested page. */
  basePath?: string;
}

export declare const STICKERS: Record<string, string>;
export declare function Sticker(props: StickerProps): React.JSX.Element;
