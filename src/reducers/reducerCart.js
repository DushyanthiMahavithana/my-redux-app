import React from 'react'
import { FETCH_BTN } from '../components/actions/types'

export default function(state=null,action) {
    switch(action.type){
        case FETCH_BTN:
            return action.payload;
            break
    }
  return state;
}
