import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveFormData, clearData} from '@/stores/home/action'
import PublicHeader from '@/components/header'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    console.log(this.props)
    const headerInfo = {title: '首页', isRight: true}
    return (
      <main>
        <PublicHeader {...headerInfo} />
        <div className="example-wrapper">
          <div className="example-home__form">
            <div className="home-form__body">
              <div className="home-form__title">
                <h3>请录入您的信息</h3>
              </div>
              <div className="home-form__content">
                <div className="home-form__item">
                  <span>销售金额：</span>
                  <input placeholder="请输入金额" className="home-form__input input-noLine" />
                </div>
                <div className="home-form__item">
                  <span>客户姓名：</span>
                  <input placeholder="请输入姓名" className="home-form__input input-noLine" />
                </div>
                <div className="home-form__item">
                <span>客户电话：</span>
                  <input placeholder="请输入电话"  className="home-form__input input-noLine" />
                </div>
              </div>
            </div>
            <div className="home-form__footer"></div>
          </div>
        </div>
      </main>
    )
  }
}
export default connect(state => ({
  formData: state.formData
}), {saveFormData, clearData})(Home)