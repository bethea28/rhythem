import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {change, submit} from './action'


const App = (props) => {
  // const submit = (props) => {
  //   event.preventDefault()
  //   console.log(props.name)
  //   // let person =  props.list.push(props.name)
  //   // return person
  // }
  console.log(props.name)
  return (
    <div>
      <form onSubmit = {props.submit}>
        <input type = 'input' onChange = {(event) => {props.change(event.target.value)}} placeholder = 'name' ></input>
        <input type = 'submit'></input>
      </form>
      {props.name}
      {Object.keys(props.list)}
      {props.children}
    </div>
  )
}

const mapStateToProps = state => {
    return {
      name: state.name,
      list: state.list
    }
}

const dispatchStateToProps = dispatch => (
  bindActionCreators({
    change, submit
  }, dispatch)
)

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)
