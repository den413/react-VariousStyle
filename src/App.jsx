import { CssModules } from "./components/CssModules";
import { InlinStyle } from "./components/InlinStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export const App = () => {
  return (
    <div>
      <InlinStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
};
