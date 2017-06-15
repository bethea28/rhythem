import React, {Component} from 'react'
import {connect} from 'react-redux'
import bindActionCreators from 'redux'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }
  render(){
    return (
      <div>
        <button> PUH It </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const dispatchStateToProps = dispatch => {
  return {
    // bindActionCreators({
    //
    // }, dispatch)
  }
}

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)
