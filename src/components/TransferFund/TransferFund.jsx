import React, { Component } from 'react'

export default class TransferFund extends Component {
    state = {
        amount: null
    }

    update = (ev) => {
        const { value } = ev.target
        this.setState({ amount: value })
    }

    render() {
        const { user, transfer } = this.props
        const { amount } = this.state
        if (user) return (
            <form onSubmit={(ev) => transfer(ev, amount)} >
                <label>
                    Transer BitCoin
                <input type="number" max={user.coins} min="0" onChange={(e) => this.update(e)} />
                </label>
                <button>Transfer</button>
            </form>
        )
    }
}