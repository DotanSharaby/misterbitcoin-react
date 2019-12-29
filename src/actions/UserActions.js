import UserService from '../services/UserService'

const setUser = (user) => {
    return { type: 'SET_USER', user }
}

export const signup = ({ name }) => {
    return async (dispatch) => {
        const user = await UserService.signup(name);
        return dispatch(setUser(user))
    }
}

export const getLoggedinUser = () => {
    return async (dispatch) => {
        const user = await UserService.getLoggedinUser();
        return dispatch(setUser(user))
    }
}

export const makeTransfer = (user, contact, amount) => {
    return async (dispatch) => {
        const updatedUser = await UserService.addTransfer(user, contact, amount);
        return dispatch(setUser(updatedUser))
    }
}