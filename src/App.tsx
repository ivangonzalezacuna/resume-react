import { Theme } from "./Theme";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div>Design Tokens Init</div>
    </Theme>
  );
};

export default App;
