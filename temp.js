

// for box 1
function updateText(color) {
    document.getElementById("result").textContent = "You clicked on " + color;
}

//for box 2
function Validate_User(UserName, PassWord) {
    // Predefined credentials
    const validUserName = "Kishan27";
    const validPassword = "Welcome@2025";

    // Get user input values
    const enteredUserName = UserName.value;
    const enteredPassword = PassWord.value;

    // Check if entered credentials match the predefined ones
    if (enteredUserName === validUserName && enteredPassword === validPassword) {
        // If credentials are correct, update the result1 paragraph
        document.getElementById("result1").innerText = "User Validated";
        document.getElementById("result1").style.color = "green";  // Optional: Change text color to green
    } else {
        // If credentials are incorrect, show error message
        document.getElementById("result1").innerText = "Invalid Credentials. Please try again.";
        document.getElementById("result1").style.color = "red";  // Optional: Change text color to red
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector(".box20");
    let inputs = Array.from(box.querySelectorAll("input"));

    // Shuffle inputs order
    inputs.sort(() => Math.random() - 0.5);

    // Append shuffled inputs back to box20 (keeping the button at the end)
    inputs.forEach(input => box.appendChild(input));
});


function called() {
    let inputs = document.querySelectorAll(".InputTG1"); // Select by class

    let name = inputs[0].value.trim();
    let lname = inputs[1].value.trim();
    let contact = inputs[2].value.trim();

    // Validation using placeholder
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert(`Please enter ${inputs[i].placeholder}`);
            return; // Stop execution if any field is empty
        }
    }

    // Displaying values in an alert
    alert(`Name: ${name}\nLast Name: ${lname}\nContact: ${contact}`);

    // Clearing the input fields
    inputs.forEach(input => input.value = "");
}
