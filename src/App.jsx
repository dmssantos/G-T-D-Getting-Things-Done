import GlobalStyle from "./globalStyle";
import WrapperApp from "./AppStyle";

import Login from "./pages/Login";

function App() {
  // prettier-ignore
  return (
    <div>
      <WrapperApp>
        <main>
          <Login />
        </main>
      </WrapperApp>
      <GlobalStyle />
    </div>
  );
}

export default App;
