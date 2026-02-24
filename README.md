# Assignment_4_PH
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

Method	Returns	Selector Type	Live Collection
getElementById()	Single element	Id only	Does not
getElementByClassName()	HTML Collection (multiple)	Class only	Does
querySelector()	First macthing element	Any CSS	Does not
querySelectorAll()	Nodelist (multiple)	Any CSS selector	Doest not

2.How do you create and insert a new element into the DOM?

Answer:

Step 1: Create
const newDiv = document.createElement("div");
Step 2: Add content
newDiv.textContent = "Hello World";
Step 3: Insert into DOM
document.body.appendChild(newDiv);

3.What is Event Bubbling? And how does it work?

Answer:

Event bubbling: When an event happens on a child element it first runs on the child, then moves up to its parent, then to grandparent, until document is called event bubbling.
Example:
<div id="parent">
  <button id="child">Click</button>
</div>
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
output:
Child clicked
Parent clicked

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation means instead of adding event to every child, adding one event to parent and use bubbling to detect which child was clicked.
Example:
document.getElementById("parent").addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});

It is very useful. Beacause-
I.Better performance
II.Works for dynamically added elements
III.Cleaner code
IV.Fewer event listeners
V.Very important in real projects.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:

Method	What it stops
preventDefault()	Stops default browser behavior
stopPropagation()	Stops event bubbling
preventDefault()
Example:
form.addEventListener("submit", function(e) {
  e.preventDefault();
});
It stops form submitting, link redirecting, checkbox default behavior
stopPropagation()
button.addEventListener("click", function(e) {
  e.stopPropagation();
});
It stops event going to parent. So parent event won’t run.
