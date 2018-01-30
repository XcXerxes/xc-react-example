import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveFormData, clearData} from '@/stores/home/action'
import {clearProduct} from '@/stores/products/action'
import PublicHeader from '@/components/header/header'
import HomeForm from '@/components/form/form'
import _ from 'lodash'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleInput = (type, event) => {
    this.props.saveFormData(event.target.value, type)
  }
  formSubmit = () => {
    const currentList = this.props.proData.filter(item => item.selectNum > 0 && item.selectStatus)
    if (_.size(_.omitBy(this.props.formData, item => !item)) === 3 && currentList.length > 0) {
      alert('提交成功！')
      this.props.clearData()
      this.props.clearProduct()
    }
  }
  inputHandle = (value, type) => {
    this.props.saveFormData(value, type)
  }
  render () {
    console.log(this.props)
    const headerInfo = {title: '首页', isRight: true}
    return (
      <main>
        <PublicHeader {...headerInfo}>
          <i className="icon-jilu example-header__jilu"></i>
        </PublicHeader>
        <div className="example-wrapper">
          <HomeForm submit={this.formSubmit.bind(this)} changeHandle={(value, type) => this.inputHandle(value, type)}
          {...this.props} />
        </div>
      </main>
    )
  }
}
export default connect(state => ({
  formData: state.formData,
  proData: state.proData
}), {saveFormData, clearData, clearProduct})(Home)