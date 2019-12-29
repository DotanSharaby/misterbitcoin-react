import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadCurrContact, setCurrContact } from '../../actions/ContactsActions'

import ContactForm from '../../components/ContactForm/ContactForm'

class ContactEditPage extends Component {

    async componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            await this.props.loadCurrContact(id)
        }
    }

    componentWillUnmount() {
        this.props.setCurrContact(null);
    }

    render() {
        const { currContact, history } = this.props
        if (!currContact) return (
            <section className="contact-edit">
                <h3>Add Contact</h3>
                <ContactForm history={history} />
            </section>
        )
        else return (
            <div>
                <h3>Edit Contact</h3>
                <ContactForm currContact={currContact} history={history} />
                {/* TODO: MAKE IT WORk */}
                <button>Delete</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currContact: state.contactReducer.currContact
    }
}
const mapDispatchToProps = {
    loadCurrContact,
    setCurrContact
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditPage)