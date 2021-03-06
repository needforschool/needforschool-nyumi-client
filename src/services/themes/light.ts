import { Theme } from "../../types/themes";

const light: Theme = {
  id: 1,
  colors: {
    layout: {
      darkest: "rgb(231, 230, 229)",
      darker: "rgb(225, 224, 223)",
      dark: "rgb(75, 75, 76)",
      light: "rgb(30, 30, 30)",
      lighter: "rgb(36, 36, 36)",
      lightest: "rgb(45, 45, 45)",
    },
    text: {
      lightest: "rgb(0, 0, 0)",
      lighter: "rgb(200, 200, 200)",
      light: "rgb(150, 150, 150)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(225, 224, 223)",
    },
    accent: {
      light: "rgb(255, 255, 255)",
      red: "rgb(214, 48, 49)",
      green: "rgb(38, 222, 129)",
    },
  },
};

export default light;
