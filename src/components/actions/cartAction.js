import { FETCH_BTN } from "./types"
export const cartAction = () => {
  return {
    type: FETCH_BTN,
    payload:[{
        id:1,
        name:"name1",
    }
   ]
  }
}
