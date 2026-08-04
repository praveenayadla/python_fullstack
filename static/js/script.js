alert("Welcome to NRIIT Learning Managemet System")
let heading = document.getElementById("welcome")
heading.innerHTML = "Welcome Future Software"
console.log("Heading element:" , heading)
let msg= document.getElementById("message")
msg.innerHTML= "Javascript is fun"
console.log("Message element: ,msg")
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")
}
function changeHeading(){
    document.getElementById("welcome").
    innerHTML ="Welcome Python Fullstack Developers"
}
let heading1 = document.querySelector("#welcome");
console.log("Heading element:", heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function(){
    alert("Welcome to Javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let dob=document.getElementById("dob").value;
    if(!name || !email || !password || !confirmPassword || !dob){
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration successful!");
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Password:",password);
    console.log("Confirm Password:",confirmPassword);
    console.log("Date of Birth:",dob);
});
   