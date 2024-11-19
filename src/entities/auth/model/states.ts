import { RootState } from 'app/model/store'

export const getAllAuthStates = (state: RootState) => state.AuthReducer
export const selectUserId = (state: RootState) => state.AuthReducer.userId
export const selectIsAuthorized = (state: RootState) => state.AuthReducer.isAuthenticated
export const selectFullName = (state: RootState) => state.AuthReducer.fullName
