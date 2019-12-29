import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/UserActions'


class SignUp extends Component {
    state = {
        name: null
    }

    update = (ev, field) => {
        const { value } = ev.target
        this.setState(prevState => {
            return {
                name: {
                    ...prevState.contact,
                    [field]: value
                }
            }
        })
    }

    userSignup = async (ev) => {
        ev.preventDefault()
        await this.props.signup(this.state.name);
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.userSignup}>
                    <h3>Signup page!</h3>
                    <input type="text" placeholder="username" onChange={(e) => this.update(e, "name")} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    signup
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)