export enum UserActionTypes  {
  STORE_USER = 'STORE_USER'
}

export type UserState = string;

export interface StoreUser {
  type: UserActionTypes.STORE_USER,
  username: UserState
}