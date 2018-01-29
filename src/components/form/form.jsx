import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HomeForm extends Component {
  constructor (...args) {
    super(...args)
    this.state = {}
  }
  handleInput = (type, event) => {
    this.props.changeHandle(event.target.value, type)
  }
  clickHandle = () => {
    this.props.submit()
  }
  render () {
    const {formData} = this.props
    return (
      <div className="example-home__form">
        <div className="home-form__body">
          <div className="home-form__title">
            <h3>请录入您的信息</h3>
          </div>
          <div className="home-form__content">
            <div className="home-form__item">
              <span>销售金额：</span>
              <input placeholder="请输入金额" type="number" value={formData.orderSum}  pattern="[0-9]*" className="home-form__input input-noLine" onChange={this.handleInput.bind(this, 'orderSum')} />
            </div>
            <div className="home-form__item">
              <span>客户姓名：</span>
              <input placeholder="请输入姓名" value={formData.name} className="home-form__input input-noLine" onChange={this.handleInput.bind(this, 'name')} />
            </div>
            <div className="home-form__item">
            <span>客户电话：</span>
              <input placeholder="请输入电话" type="tel"  value={formData.phoneNo} className="home-form__input input-noLine" onChange={this.handleInput.bind(this, 'phoneNo')} />
            </div>
          </div>
          <div className="home-form__title">
            <h3>请选择商品</h3>
          </div>
          <div className="home-form__content">
            <Link to="/products" className="home-form__item form-item__product">
              <p>请选择商品</p>
            </Link>
          </div>
        </div>
        <div className="home-form__footer">
          <button className="btn-default home-btn__submit" onClick={this.clickHandle.bind(this)}>提交</button>
        </div>
      </div>
    )
  }
}

export default HomeForm