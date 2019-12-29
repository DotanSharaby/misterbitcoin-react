import ContactService from '../services/ContactService'

const updateContact = (contact) => {
    return { type: 'UPDATE_CONTACT', contact }
}

const addContact = (contact) => {
    return { type: 'ADD_CONTACT', contact }
}

export const saveContact = (contact) => {
    const contactId = contact._id;
    return async (dispatch) => {
        const savedContact = await ContactService.saveContact(contact);
        if (contactId) {
            return dispatch(updateContact(savedContact))
        } else {
            return dispatch(addContact(savedContact))
        }
    }
}

const setContacts = (contacts) => {
    return { type: 'SET_CONTACTS', contacts }
}

export const getContacts = (filterBy) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filterBy);
        return dispatch(setContacts(contacts))
    }
}

export const setCurrContact = (contact) => {
    return { type: 'SET_CURR_CONTACT', contact }
}

export const loadCurrContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id);
        return dispatch(setCurrContact(contact))
    }
}