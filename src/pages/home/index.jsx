import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveFormData, clearData} from '@/stores/home/action'
import PublicHeader from '@/components/header/header'
import HomeForm from '@/components/form/form'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleInput = (type, event) => {
    this.props.saveFormData(event.target.value, type)
  }
  formSubmit = () => {
    console.log('submit')
  }
  inputHandle = (value, type) => {
    this.props.saveFormData(value, type)
  }
  render () {
    console.log(this.props)
    const headerInfo = {title: '首页', isRight: true}
    return (
      <main>
        <PublicHeader {...headerInfo} />
        <div className="example-wrapper">
          <HomeForm submit={this.formSubmit.bind(this)} changeHandle={(value, type) => this.inputHandle(value, type)}
          {...this.props} />
        </div>
      </main>
    )
  }
}
export default connect(state => ({
  formData: state.formData
}), {saveFormData, clearData})(Home)