import { GlobalStyled } from './style.js';
import { IconfontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import store  from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store = { store }>
      <Header />
      <GlobalStyled />
      <IconfontGlobalStyle />
    </Provider>

  );
}

export default App;
