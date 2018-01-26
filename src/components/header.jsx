import React, {Component} from 'react'

export default class PublicHeader extends Component {
  render () {
    const {title, isRight} = this.props
    return (
      <div className="example-header">
        <div className="example-header__left">
          <i className="icon-catalog example-header__catalog"></i>
        </div>
        <div className="example-header__middle">
          <span>{title}</span>
        </div>
        {isRight && <div className="example-header__right">
          <i className="icon-jilu example-header__jilu"></i>
        </div>}
      </div>
    )
  }
}
