import React, {Component} from 'react'
import PublicHeader from '@/components/header/header'
import ProItem from '@/components/proItem/proItem'
import {connect} from 'react-redux'
import {getProducts, toggleProduct, modifyProduct} from '@/stores/products/action'
import _ from 'lodash'

class Products extends Component {
  constructor (args) {
    super(args)
    this.state = {}
  }
  componentDidMount () {
    if (!this.props.proData.length) {
      this.props.getProducts()
    }
  }
  calcHandle = (num, item) => {
    const index = _.findIndex(this.props.proData, current => item.product_id === current.product_id)
    this.props.modifyProduct(index, item.selectNum + num)
  }
  selectHandle = (item) => {
    const index = _.findIndex(this.props.proData, current => item.product_id === current.product_id)
    this.props.toggleProduct(index)
  }
  render () {
    console.log(this.props)
    const headerInfo = {title: '商品列表', isRight: true}
    return (
      <main>
        <PublicHeader {...headerInfo}>
          <span onClick={() => this.props.history.goBack()}>确定</span>
        </PublicHeader>
        <div className="example-wrapper products-wrapper">
          <ul>
            {this.props.proData.map((item, index) => {
              return <ProItem {...item} key={index} selectHandle={item => this.selectHandle(item)}
              calcHandle={(type, item) => this.calcHandle(type, item)} />
            })}
          </ul>
        </div>
      </main>
    )
  }
}

export default connect(state => ({
  proData: state.proData
}), {
  getProducts,
  toggleProduct,
  modifyProduct
})(Products)