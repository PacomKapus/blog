function toggleMenu() {
    var menu = document.getElementById("myForm");
    menu.classList.toggle("hidden");
}

function saveData() {
  var photo = document.getElementById("photo").value;
  var name = document.getElementById("name").value;
  var text = document.getElementById("text").value;

  var output = document.getElementById("output");

  var container = document.createElement("div");
  container.className = "container";

  var photoElement = document.createElement("img");
  photoElement.src = photo;
  container.appendChild(photoElement);

  var nameElement = document.createElement("p");
  nameElement.innerHTML = "<strong>Name:</strong> " + name;
  container.appendChild(nameElement);

  var textElement = document.createElement("p");
  textElement.innerHTML = "<strong>Text:</strong> " + text;
  container.appendChild(textElement);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
      output.removeChild(container);
  };
  container.appendChild(deleteButton);

  output.appendChild(container);
}