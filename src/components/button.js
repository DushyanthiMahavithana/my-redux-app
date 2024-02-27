import React , {Component } from 'react'
import { cartAction } from './actions/cartAction'
import{bindActionCreators} from 'redux'
import {connect} from 'react-redux';

class button extends Component  {
    render(){
        return (
        <div>
            <button onClick={()=>this.props.cartAction()}>Add to cart</button>
        </div>
        )
    }
}

function matchDispatchtoProps(dispatch){
    return bindActionCreators({cartAction:cartAction},dispatch)
}
export default connect(null,matchDispatchtoProps)(button)
