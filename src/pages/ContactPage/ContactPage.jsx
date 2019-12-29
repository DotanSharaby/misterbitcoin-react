import React, { Component } from 'react'

import ContactList from '../../components/ContactList/ContactList'
import { ContactFilter } from '../../components/ContactFilter/ContactFilter'

import { connect } from 'react-redux'
import { getContacts } from '../../actions/ContactsActions'
import { getLoggedinUser } from '../../actions/UserActions'
import { Link } from 'react-router-dom';


class ContactPage extends Component {
    state = {
        term: '',
        filteredContacts: null
    }

    async componentDidMount() {
        const filteredContacts = await this.filterContacts();
        this.setState({ filteredContacts })
        const { user } = await this.props.getLoggedinUser();
        if (!user) this.props.history.push('/signup')
    }

    handleFilter = (value) => {
        this.setState({ term: value })
    }

    filterContacts = async () => {
        const term = this.state.term
        const { contacts } = await this.props.getContacts(term)
        return contacts;
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.term === this.state.term) return
        const filteredContacts = await this.filterContacts()
        this.setState({ filteredContacts })
    }

    render() {
        const { filteredContacts } = this.state;
        const { contacts } = this.props;
        let contactsToShow;
        if (!filteredContacts) contactsToShow = contacts
        else contactsToShow = filteredContacts

        return (<>
            <Link to="/contact/edit">Add Contact</Link>
            <span> | </span>
            <ContactFilter handleFilter={this.handleFilter} />
            <ContactList contacts={contactsToShow} />
        </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contactReducer.contacts
    }
}
const mapDispatchToProps = {
    getContacts,
    getLoggedinUser
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)