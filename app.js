import React, {Component} from 'react'
import {connect} from 'react-redux'
import bindActionCreators from 'redux'


const App = (props) => {
  return (
    <div>
      <button>push nigga</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {

    }
}

const dispatchStateToProps = dispatch => {
  return {
    // bindActionCreators({
    // handleChange
    // }, dispatch)
  }
}

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)
