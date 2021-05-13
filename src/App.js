import { GlobalStyled } from './style.js';
import { IconfontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyled />
      <IconfontGlobalStyle />
    </div>
  );
}

export default App;
