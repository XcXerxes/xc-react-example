import * as types from './action-type'

let initState = {
  orderSum: '', // 金额
  name: '', // 姓名
  phoneNo: '', // 手机号
  imgpath: '' // 图片地址
}
// 首页表单数据
export const formData = (state = initState, action) => {
  switch(action.type) {
    case types.SAVE_FORM_DATA:
      return {...state, ...{[action.datatype]: action.value}}
    case types.SAVE_IMG:
      return {...state, ...{imgpath: action.path}}
    case types.CLEAR_DATA:
      return {...state, ...initState}
    default:
      return state
  }
}
