import * as types from './action-type'

// 保存表单
export const saveFormData = (value, datatype) => {
  return {
    type: types.SAVE_FORM_DATA,
    value,
    datatype
  }
}

// 保存图片地址
export const saveImg = path => {
  return {
    type: types.SAVE_IMG,
    path
  }
}

// 保存图片地址
export const clearData = () => {
  return {
    type: types.CLEAR_DATA
  }
}
