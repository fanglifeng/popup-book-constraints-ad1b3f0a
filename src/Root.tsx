import { Composition } from "remotion";
import { PopupBook } from "./PopupBook";
export const RemotionRoot = () => (
  <Composition
    id="PopupBook"
    component={PopupBook}
    durationInFrames={1146}
    fps={30}
    width={1920}
    height={1080}
  />
);
