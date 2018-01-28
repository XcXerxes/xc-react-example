import React from 'react'
import {shallow} from 'enzyme'
import HomeForm from './form'

describe('form submit is wrong!!', () => {
  const props = {
    orderSum: '23',
    phoneNo: '15809892394',
    name: 'leo'
  }
  const homeForm = shallow(<HomeForm {...props} />)
  const moneyInput = homeForm.find('input[placeholder="请输入金额"]')
  const nameInput = homeForm.find('input[placeholder="请输入姓名"]')
  const phoneInput = homeForm.find('input[placeholder="请输入电话"]')
  it('form 都有值', () => {
    expect(moneyInput.props().value).toEqual('23')
    expect(nameInput.props().value).toEqual('leo')
    expect(phoneInput.props().value).toEqual('15809892394')
  })
})