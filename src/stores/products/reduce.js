import * as types from './action-type'
import _ from 'lodash'

/**
 * 商品数据
 * @type {Array}
 * example: [{
 *  product_id: 1, 商品id
 *  product_name: 'PaiBot', 商品名称
 *  product_price: 100, 价格
 *  commission: 200, 佣金
 *  selectStatus: false, 是否选择
 *  selectNum: 0 选择数量
 * }]
 */
const initState = []

export const proData = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      const {dataList} = action
      const array = _.map(dataList, item => {
        return _.assign({}, item, {
          selectStatus: false,
          selectNum: 0
        })
      })
      return [...state, ...array]
    case types.TOGGLE_PRODUCT:
      const proList = _.map(state, (item, index) => {
        if (index === action.index) {
          return _.assign({}, item, {
            selectStatus: !item.selectStatus
          })
        }
        return item
      })
      return proList
    case types.MODIFY_PRODUCT:
      const current = _.map(state, (item, index) => {
        if (index === action.index) {
          return _.assign({}, item, {
            selectNum: action.selectNum
          })
        }
        return item
      })
      return current
    case types.CLEAR_PRODUCT:
      return []
    default:
      return state
  }
}