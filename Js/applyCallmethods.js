const lufthansa = {
    airline: "Lufthansa",
    iataCode:"HS",
    bookings:[],
    book(flightNum, Name){
        console.log(`${Name} booked a seat on the ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`, Name});
    }

}

const emirates={
    airline:"Emirates",
    iataCode:"EM",
    bookings:[] 
}


lufthansa.book(123, "Hassan");
lufthansa.book(112, "Roshaan");
console.log(lufthansa.bookings);

const newbooking = lufthansa.book

newbooking.call(emirates,321, "Hamza")
newbooking.call(emirates,343, "Adnan")
newbooking.call(lufthansa,567, "Nimra")
console.log(emirates.bookings);