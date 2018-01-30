import React from 'react'
import {shallow} from 'enzyme'
import ProItem from './proItem'

describe('商品列表 测试', () => {
  const props = {
    product_id: 1,
    product_name: 'PaiBot',
    product_price: 100,
    commission: 200,
    selectStatus: false,
    selectNum: 0
  }
  const proItem = shallow(<ProItem {...props} />) 
  it('显示的值 不正确', () => {
    expect(proItem.find('h3').text()).toBe('PaiBot')
  })
})