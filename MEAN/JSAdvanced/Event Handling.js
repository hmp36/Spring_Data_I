
<html>
  <body>
    <button id="someButton">This is Some Button</button>
    <script>
             // some js code here to add an event listener to the button
       </script>
  </body>
</html>


// Link our variable "button" to a DOM element
var button = document.getElementById("someButton")
// add a DOM eventListener to that variable.
button.addEventListener("click", whatToDoOnClick);
// here we define the whatToDoOnClick function
function whatToDoOnClick() {
  alert("You Did it!")
}