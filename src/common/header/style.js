import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div `
  height: 58px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.a `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: 100% 100%;
`
export const Nav = styled.div `
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div `
  color: #333;
  line-height: 56px;
  padding: 0 15px;
  font-size: 18px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input `
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #eee;
  font-size: 14px;
  margin-left: 20px;
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`
export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div `
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #ffff;
    background-color: #ec6149;
  }
`

export const SearchWrapper = styled.div  `
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div `
  color: #969696;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
`
export const SearchInfoSwitch = styled.span  `
  float: right;
  font-size: 13px;
`
export const SearchInfoList = styled.div `
  overflow: hidden;
`
export const SearchInfoItem = styled.a `
  float: left;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid #ddd;
  line-height: 20px;
  color: #787878;
  border-radius: 3px;
  display: block;
  margin-right: 10px;
  margin-bottom: 15px;

`