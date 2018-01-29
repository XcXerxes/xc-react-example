import * as types from './action-type'
import index from '../../pages/home/index';

// 选择商品
export const toggleProduct = (index) => {
  return {
    type: types.TOGGLE_PRODUCT,
    index
  }
}

// 编辑商品
export const modifyProduct = (index, selectNum) => {
  return {
    type: types.MODIFY_PRODUCT,
    index,
    selectNum
  }
}

// 清空
export const clearProduct = () => {
  return {
    type: types.CLEAR_PRODUCT
  }
}
