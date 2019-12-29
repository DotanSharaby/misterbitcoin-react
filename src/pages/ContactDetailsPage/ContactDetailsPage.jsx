import React, { Component } from 'react'
import ContactService from '../../services/ContactService'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TransferFund from '../../components/TransferFund/TransferFund';
import { TransferList } from '../../components/TransferList/TransferList';
import { getLoggedinUser, makeTransfer } from '../../actions/UserActions'

class ContactDetailsPage extends Component {
    state = {
        contact: null,
        amount: null,
        transfers: []
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = await ContactService.getContactById(id);
        if (contact) this.setState({ contact })
        const { user } = await this.props.getLoggedinUser();
        this.setState({ user })
        if (!user) this.props.history.push('/signup');
        this.filterTransfers(user, contact);
    }

    transfer = async (ev, amount) => {
        ev.preventDefault();
        const { user, contact } = this.state;
        await this.props.makeTransfer(user, contact, amount);
        this.props.history.push('/')
    }

    filterTransfers = (user, contact) => {
        var transfers = user.transfers.filter(t => t.toId === contact._id);
        transfers = transfers.slice(0, 3)
        this.setState({ transfers })
    }

    render() {
        const { contact, transfers } = this.state
        const { user } = this.props
        if (contact) return (
            <section className="contact-details">
                <h3>{contact.name}</h3>
                <img src={`https://robohash.org/${contact.name}.png`} alt="User" />
                <h5>{contact.email}</h5>
                <h5>{contact.phone}</h5>

                <TransferFund transfer={this.transfer} user={user} />

                <Link to="/contact">
                    <button>Back</button>
                </Link>
                <Link to={'/contact/edit/' + contact._id}>Edit</Link>

                <TransferList transfers={transfers} />

            </section>
        )
        else return (
            <div><h1>No contact was found</h1></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    getLoggedinUser,
    makeTransfer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetailsPage)