import { UserState, StoreUser, UserActionTypes } from './types'

const reducer = (state: UserState = '', action: StoreUser) => {
  switch(action.type){
    case UserActionTypes.STORE_USER:
      return action.username
    default:
      return state;
  }
}

export default reducer;