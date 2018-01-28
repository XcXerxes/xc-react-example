import React from 'react'
import {shallow} from 'enzyme'
import PublicHeader from './header'

describe('header test', () => {
  const props = {
    title: '头部',
    isRight: false
  }
  const header = shallow(<PublicHeader {...props} />)
  it('返回标题名称不是头部', () => {
    expect(header.find('.example-header__middle span').text()).toEqual('头部')
  })
  it('返回isRight 属性 为 false', () => {
    expect(header.find('.example-header__right').length).toBe(0)
  })
})