class Event {
    constructor(name, date, isFree, price) {
        this.name = name;
        this.date = new Date(date);
        this.isFree = isFree;
        this.price = price || 0;
    }
}

const events = [
    new Event('Free Concert 1', '2024-08-15', true),
    new Event('Free Concert 2', '2024-08-16', true),
    new Event('Free Concert 3', '2024-08-17', true),
    new Event('Free Concert 4', '2024-08-18', true),
    new Event('Concert with Price 1', '2024-08-19', false, 50),
    new Event('Concert with Price 2', '2024-08-20', false, 75),
    new Event('Concert with Price 3', '2024-08-21', false, 100),
    new Event('Concert with Price 4', '2024-08-22', false, 120),
    new Event('Concert with Price 5', '2024-08-23', false, 150),
];

function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    events.sort((a, b) => a.date - b.date).forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <strong>${event.name}</strong> - ${event.date.toDateString()} - ${event.isFree ? 'Free' : `$${event.price}`}
            <button onclick="bookTicket('${event.name}')">Book Now</button>
        `;
        eventList.appendChild(eventItem);
    });
}

function bookTicket(eventName) {
    const event = events.find(e => e.name === eventName);
    if (event) {
        alert(`Booking for ${event.name}. Total price: ${event.isFree ? 'Free' : `$${event.price}`}`);
        // You can add further booking logic here
    }
}

// Display events on landing page
document.addEventListener('DOMContentLoaded', displayEvents);
