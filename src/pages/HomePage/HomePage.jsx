import React, { Component } from 'react';
import BitCoinService from '../../services/BitCoinService'
import { connect } from 'react-redux';
import { getLoggedinUser } from '../../actions/UserActions'
import { TransferList } from '../../components/TransferList/TransferList'

class HomePage extends Component {
    state = {
        rate: null
    }

    async componentDidMount() {
        const res = await BitCoinService.getRate();
        const { user } = await this.props.getLoggedinUser();
        this.setState({
            rate: res,
            user
        })
        if (!user) this.props.history.push('/signup')
    }

    render() {
        const { rate, user } = this.state
        if (user) return (rate && <div>
            <h3>Hi {user.name} !</h3>
            <p>BitCoins: {user.coins}</p>
            <h5>BTC: {rate}</h5>
            <TransferList transfers={user.transfers.slice(0, 3)} />
        </div>
        )
        else return (
            <></>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    getLoggedinUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);