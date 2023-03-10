function solve(ticketDescriptions, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
             this.destination = destination;
             this.price = Number(price);
             this.status = status;
        }
    }

    let ticketArray = [];
    for(let i = 0; i < ticketDescriptions.length; i++) {
        let [destination, price, status] = ticketDescriptions[i].toString().split('|');
        let ticket = new Ticket(destination, price, status);
        ticketArray.push(ticket);
    }

    function sortTickets(a, b) {
        switch (sortCriteria) {
            case 'destination':
                return a.destination.localeCompare(b.destination);

            case 'price':
                return a.price - b.price;

            case 'status':
                return a.status.localeCompare(b.status);
        }
    }

    return ticketArray.sort(sortTickets);
}