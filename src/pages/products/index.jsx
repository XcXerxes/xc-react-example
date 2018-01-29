import React, {Component} from 'react'
import PublicHeader from '@/components/header/header'
import ProItem from '@/components/proItem/proItem'
import {connect} from 'react-redux'
import {getProducts} from '@/stores/products/action'

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
  render () {
    console.log(this.props)
    const headerInfo = {title: '商品列表', isRight: true}
    return (
      <main>
        <PublicHeader {...headerInfo} />
        <div className="example-wrapper products-wrapper">
          <ul>
            {this.props.proData.map((item, index) => {
              return <ProItem {...item} key={index} />
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
  getProducts
})(Products)