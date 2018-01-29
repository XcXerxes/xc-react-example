import * as types from './action-type'
import api from '@/api'

// 获取数据
export const getProducts = () => {
  return async dispatch => {
    try {
      const data = await api.getProducts()
      debugger
      dispatch({
        type: types.GET_PRODUCT,
        dataList: data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

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
