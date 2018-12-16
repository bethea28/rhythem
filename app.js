import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {change, submit, api, hideAjaxButton} from './actions'
import Ajax from './ajax'
import store from './store'
import  './styles.scss'


const App = (props) => {

  const changeSubmit = (event) => {
    event.preventDefault()
// console.log('events',event.preventDefault())
props.submit(props.name)
    // return {

    // }
  }
      // {!props.ajaxHide &&  <Ajax hide = {props.hideAjaxButton} serve = {props.api} />}
 
  console.log('props',props.list)
  return (
    <main>
      <form  className = 'form' onSubmit = {(event)=>{props.submit(event,props.name)}}>
          <section>
            <input id = 'inputName' type = 'input' onChange = {(event) => {props.change(event.target.value)}} placeholder = 'nameigg' >

            </input>
          </section>
     
          <section>
            <input type = 'submit'></input>
          </section>
      </form>
      {props.name}
      
      <ul>

        {props.list.map((a,b)=>{
          return <li key ={b}>{a}</li>
        })}
     
      </ul>

      {/* {!props.ajaxHide  ? <Ajax hide = {props.hideAjaxButton} serve = {props.api} /> : ''} */}

      {props.children}
    </main>
  )
}

const mapStateToProps = state => {

  // console.log('state',state)
    return {
      name: state.reducer.name,
      list: state.submitReducer.list,
      test: state.reducer.test,
      ajaxHide: state.reducer.ajaxHide
    }
}

const dispatchStateToProps = dispatch => (
  bindActionCreators({
    change, submit, api, hideAjaxButton
  }, dispatch)
)

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)

// export default App
