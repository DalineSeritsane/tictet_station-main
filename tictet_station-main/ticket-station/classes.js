class Ticket {
    constructor(event, user) {
        this.event = event;
        this.user = user;
    }

    confirmBooking() {
        return `Ticket for ${this.event.name} booked for ${this.user.username}.`;
    }
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
