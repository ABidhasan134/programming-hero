const trickts = document.querySelectorAll(".booked");
const selected = [];

// background and making selection array
const updateSeatcounter = (list) => {
    // Check if the length of the selected array is 4 or less
    if (selected.length < 4) {
        // If less than 4, simply push the new element
        selected.push(list);
        list.style.backgroundColor = "green";
        
        
    } else {
        // If equal to 4, remove the oldest element before pushing the new one
        const oldSeat = selected.shift(); // Remove the oldest element (first element)
        oldSeat.style.backgroundColor = "transparent"; // Reset background color of the removed seat
        alert("you can't select more than 4 seats");
        selected.push(list); // Push the new element
        list.style.backgroundColor = "green"; // Set background color of the clicked seat
    }
    getSeat(selected);
    updateRemainingSeatCount(parseInt(selected.length));
    yourSeatNumber(parseInt(selected.length));
    showSeatandFare(list);
    toTal(parseInt(selected.length));
}

// new array to other function
const getSeat = (selectedSeats) => {
    // console.log(selectedSeats.length);
    selectedSeats.forEach(seat => {
        let ID = parseInt(seat.id.length);
        
        // console.log(typeof(ID));
    });
    
}
// seat are remaining available
const updateRemainingSeatCount = (selectedSeatsCount) => {
    const remainingSeats = 12 - selectedSeatsCount;
    const remainingSeatElement = document.getElementById("ablableSet");
    remainingSeatElement.textContent = remainingSeats;
}
// your selected sets number
const yourSeatNumber=(yoursitselected)=>{
    const yourSeat=document.querySelector("#yourSeat")
    yourSeat.textContent=yoursitselected;
}
// show seat
const showSeatandFare = (idshow) => {
    const youSeat = document.querySelector("#showSeat");

    // Create a <div> element to contain all the information
    const maindiv = document.createElement("div");

    // Set flex display for maindiv
    maindiv.style.display = "flex";
    maindiv.style.alignItems = "center"; // Optional: Align items vertically

    // Create <p> elements for seat number, class, and fare
    const sitNumber = document.createElement("p");
    sitNumber.textContent = idshow.id;

    const sitClass = document.createElement("p");
    sitClass.textContent = "Economic";

    const fare = document.createElement("p");
    fare.textContent = "550";

    // Append each element to the maindiv
    maindiv.appendChild(sitNumber);
    maindiv.appendChild(sitClass);
    maindiv.appendChild(fare);

    // Append the maindiv to the youSeat element
    youSeat.appendChild(maindiv);

    // Set flex display for youSeat
    youSeat.style.display = "grid";
    // youSeat.style.alignItems = "center"; // Optional: Align items vertically

    console.log(idshow);
}

const toTal=(trickt)=>{
    console.log(trickt);
}


// main function 
function selectedSeat(event) {
    const clickedSeat = event.target;
    updateSeatcounter(clickedSeat);
}
// event handlers for main function
trickts.forEach(seat => {
    seat.addEventListener("click", selectedSeat);
});
