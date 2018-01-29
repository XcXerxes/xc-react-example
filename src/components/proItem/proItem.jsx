import React, {Component} from 'react'
import classnames from 'classnames'
export default class ProList extends Component {
  constructor (args) {
    super(args)
    this.state = {}
  }
  calc = (status) => {
    switch (status) {
      case 'decrease':
        if (this.props.selectNum > 0) {
          this.props.calcHandle(-1, this.props)
        }
        break
      case 'increase':
        this.props.calcHandle(1, this.props)
        break
      default:
    }
  }
  render () {
    return (
      <li className="products-item">
        <div className="products-item__left" onClick={() => this.props.selectHandle(this.props)}>
          <i className={classnames('icon-xuanze1', {'is-active': this.props.selectStatus})}
          ></i>
          <h3>{this.props.product_name}</h3>
        </div>
        <div className="products-item__right">
          <i className={classnames('icon-jian',{'is-active': this.props.selectNum > 0 })}
            onClick={this.calc.bind(this, 'decrease')}
          />
          <p>{this.props.selectNum}</p>
          <i className="icon-jia is-active"
            onClick={this.calc.bind(this, 'increase')}
          ></i>
        </div>
      </li>
    )
  }
}
