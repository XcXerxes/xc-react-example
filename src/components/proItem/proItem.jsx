import React, {Component} from 'react'
import classnames from 'classnames'
export default class ProList extends Component {
  constructor (args) {
    super(args)
    this.state = {}
  }
  render () {
    return (
      <li className="products-item">
        <div className="products-item__left">
          <i className="icon-xuanze1"></i>
        </div>
        <div className="products-item__middle">
          <h3>{this.props.product_name}</h3>
        </div>
        <div className="products-item__right">
          <i className={classnames('icon-jian',{'is-active': this.props.selectNum > 0 })}></i>
          <span>{this.props.selectNum}</span>
          <i className="icon-jia is-active"></i>
        </div>
      </li>
    )
  }
}
