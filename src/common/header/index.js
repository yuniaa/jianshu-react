import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
  }
  from './style'


class Header extends Component {

  getListArea() {
    const { focused, list, page ,mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if(newList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          pageList.push(

            <SearchInfoItem key={ i }> { newList[i] } </SearchInfoItem>
          )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick = {() => handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
          { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className= 'left active'>首页</NavItem>
          <NavItem className= 'left'>下载App</NavItem>
          <NavItem className= 'right'>登陆</NavItem>
          <NavItem className= 'right'>
            <i className = 'iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout = { 200 }
              in = {focused }
              lassNames = 'slide'
            >
              <NavSearch
                placeholder= '搜索'
                className = { focused ? 'focused': ''}
                onFocus = { handleInputFocus }
                onBlur = { handleInputBlur }
              ></NavSearch>
            </CSSTransition>
            <i className = { focused ? 'focused iconfont': 'iconfont'}>&#xe617;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className = 'writing'>
            <i className = 'iconfont'>&#xe6eb;</i>
            写文章
          </Button>
          <Button className = 'reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) =>{

  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if(page < totalPage ) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }

    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)