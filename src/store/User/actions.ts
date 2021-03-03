import {StoreUser, UserState, UserActionTypes} from './types'

export const storeUser = (username: UserState): StoreUser => {
  return {
    type: UserActionTypes.STORE_USER,
    username
  }
}