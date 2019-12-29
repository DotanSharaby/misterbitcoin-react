const INITIAL_STATE = {
    contacts: [],
    currContact: null
}

export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_CONTACT':
            return {
                ...state,
                currContact: action.contact
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts.filter(currContact => {
                    return action.contact._id !== currContact._id
                })]
            }
        case 'UPDATE_CONTACT':
            let idx = state.contacts.findIndex(currContact => {
                return currContact._id === action.contact._id
            })
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, idx),
                    action.contact,
                    ...state.contacts.slice(idx + 1)
                ]
            }
        default:
            return state
    }
}
