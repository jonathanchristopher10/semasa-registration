import * as React from "react";

export interface LogoProps {
  /** Wordmark PNG path, relative to the consuming page. */
  src?: string;
  /** Use the "WELCOME TO" + wordmark lockup instead of the bare wordmark. */
  withWelcome?: boolean;
  welcomeSrc?: string;
  /** Rendered width in px; height follows. Minimum legible width is 180px. */
  width?: number | string;
  alt?: string;
}

export declare function Logo(props: LogoProps): React.JSX.Element;
