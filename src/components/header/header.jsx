import React from 'react'

const PublicHeader = (props) => {
  return (
    <div className="example-header">
      <div className="example-header__left">
        <i className="icon-catalog example-header__catalog"></i>
      </div>
      <div className="example-header__middle">
        <span>{props.title}</span>
      </div>
      {props.isRight && <div className="example-header__right">
        {props.children}
      </div>}
    </div>
  )
}
export default PublicHeader
