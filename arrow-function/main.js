const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log("arrow this");
  console.log(this);
});//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
button.addEventListener("click", function (e) {
  console.log("function this");
  console.log(this);//<button>Click me</button>
});
