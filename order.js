



class order{

    constructor(name, email, phone, date, time, guests){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.guests = guests;
    }




}

let orders = [];

document.addEventListener("DOMContentLoaded", () =>{



const button = document.getElementById("submit");

button.addEventListener("click", function(event){
    event.preventDefault();
    console.log("button clicked");
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if(email.includes("@")&&email.includes(".")){

        if(time!=""){
             const newOrder = new order(name, email,  date, time, guests);
    console.log(newOrder);
    orders.push(newOrder);
    
    

    const details = `<strong> Name:</strong> ${name} <br>
       <strong>Email: </strong>  ${email}<br>
         <strong>Date:</strong>  ${date} <br>
          <strong>Time:</strong> ${time}<br>
          <strong>Guests:</strong> ${guests} <br>`;
  
    localStorage.setItem("booking-details",details);

    location.href = 'confirmation.html';
        }
        else{
            alert("please enter a time");
        }
    
   
    }
    else{
        alert("this is not a valid email");
    }


});

})