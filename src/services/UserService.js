
export default {
    signup,
    addTransfer,
    getLoggedinUser
}

function addTransfer(user, contact, amount) {
    user.transfers.unshift(transferFormat(contact._id,contact.name,amount))
    user.coins -= amount;
    updateStorage(user);
    return Promise.resolve(user)
}

function transferFormat(toId, to, amount) {
    return {
        toId,
        to,
        amount,
        at: Date.now()
    }
}

function signup(name) {
    var user = JSON.parse(localStorage.getItem(name))
    if (!user) {
        user = _newUser(name);
        localStorage.setItem(user.name, JSON.stringify(user));
    }
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    return Promise.resolve(user)
}

function getLoggedinUser() {
    const user = JSON.parse(localStorage.getItem("loggedinUser"))
    return Promise.resolve(user)
}

function updateStorage(user){
    localStorage.setItem(user.name, JSON.stringify(user));
    localStorage.setItem("loggedinUser", JSON.stringify(user));
}

function _newUser(name) {
    return {
        name,
        coins: 100,
        transfers: []
    }
}