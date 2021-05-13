
import { createGlobalStyle } from 'styled-components'

export const IconfontGlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'iconfont';  /* Project id 2546180 */
  src: url('//at.alicdn.com/t/font_2546180_1o433u9133l.woff2?t=1620897319570') format('woff2'),
       url('//at.alicdn.com/t/font_2546180_1o433u9133l.woff?t=1620897319570') format('woff'),
       url('//at.alicdn.com/t/font_2546180_1o433u9133l.ttf?t=1620897319570') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


`


