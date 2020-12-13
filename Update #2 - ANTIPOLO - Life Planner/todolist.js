var items = [];

window.onload = function() {
  if (JSON.parse(localStorage.getItem("items")) != null)
    items = JSON.parse(localStorage.getItem("items"));
  console.log(items);
  show();
};

function addItems() {
  if (document.querySelector(".add").value.trim() != "") {
    items.push(document.querySelector(".add").value.trim());
    if (localStorage.getItem("items") == null) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      localStorage.setItem("items", JSON.stringify(items));
    }
    show();
  }
}

function show() {
  document.querySelector(".listItems").innerHTML = "";
  for (var i = 0; i < items.length; i++)
    document.querySelector(".listItems").innerHTML +=
      "<center><div class='elementItem'>" +
      items[i] +
      "<img class='checkIcon' src = 'check icon.png' onclick='strike(" +
      i +
      ")'><img class='deleteIcon' src = 'delete icon.png' onclick='deleteItem(" +
      i +
      ")'></div></center><br>";
}

function strike(index) {
  if (items[index].includes("<strike>")) {
    items[index] = items[index].replace("<strike>", "");
  } else {
    items[index] = "<strike>" + items[index] + "</strike>";
  }
  if (localStorage.getItem("items") == null) {
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    localStorage.setItem("items", JSON.stringify(items));
  }
  show();
}

function deleteItem(index) {
  items.splice(index, 1);
  if (localStorage.getItem("items") == null) {
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    localStorage.setItem("items", JSON.stringify(items));
  }
  show();
}
