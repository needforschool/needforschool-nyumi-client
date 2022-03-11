import main from "./main";
import dark from "./dark";
import light from "./light";
import red from "./red";
import { Theme } from "../../types/themes";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = {
  dark: complete(dark),
  light: complete(light),
  red: complete(red),
};

export default themes;
