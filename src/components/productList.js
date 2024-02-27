import React, { Component } from 'react'
import {connect} from 'react-redux'

class productList extends Component {
    createListItems(){
        return this.props.carts.map((cart)=>{
            return(
                <li key={cart.id}>{cart.name}</li>
            )
        })
    }



  render() {
    if(!this.props.carts){
        return(<h2>Click the btn</h2>)
    }
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){
    return{
        carts:state.carts
    }
}

export default connect(mapStateToProps)(productList)
