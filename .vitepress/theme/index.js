import ElementPlus from "element-plus";
import naiveUi from "naive-ui";
import VPApp, { globals, NotFound } from "../vitepress";

export default {
  NotFound,
  Layout: VPApp,
  logo: "/images/element-plus-logo-small.svg",
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.use(naiveUi);

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
