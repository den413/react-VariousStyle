import { CssModules } from "./components/CssModules";
import { InlinStyle } from "./components/InlinStyle";
import "./styles.css";

export const App = () => {
  return (
    <div>
      <InlinStyle />
      <CssModules />
    </div>
  );
};
