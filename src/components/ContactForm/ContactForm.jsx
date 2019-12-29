import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactService from '../../services/ContactService'
import { connect } from 'react-redux'

import { saveContact } from '../../actions/ContactsActions'

class ContactForm extends Component {
    state = {
        contact: ContactService.getEmptyContact()
    }
    componentDidMount() {
        const contact = this.props.currContact;
        if (contact) this.setState({ contact })
    }
    update = (ev, field) => {
        const { value } = ev.target
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [field]: value
                }
            }
        })
    }

    save = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact(this.state.contact);
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state;
        return (
            <>
                <form onSubmit={this.save}>
                    <label>Name:
                <input type="text" value={contact.name} onChange={(e) => this.update(e, "name")} />
                    </label>
                    <br />
                    <label>email:
                <input type="email" value={contact.email} onChange={(e) => this.update(e, "email")} />
                    </label>
                    <br />
                    <label>phone:
                <input type="tel" value={contact.phone} onChange={(e) => this.update(e, "phone")} />
                    </label>
                    <br />
                    <button>Save</button>
                </form>
                <Link to="/contact">
                    <button>Back</button>
                </Link>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
    }
}

const mapDispatchToProps = {
    saveContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm)