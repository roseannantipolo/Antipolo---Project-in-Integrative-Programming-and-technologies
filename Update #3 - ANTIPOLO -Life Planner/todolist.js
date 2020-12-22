var todolistItem = [];
var goalPlanItems = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("todolistItem")) != null)
    todolistItem = JSON.parse(localStorage.getItem("todolistItem"));
  console.log(todolistItem);

  if (JSON.parse(localStorage.getItem("goalPlanItems")) != null)
    goalPlanItems = JSON.parse(localStorage.getItem("goalPlanItems"));
  console.log(goalPlanItems);
  show();
};

function addItems(obj) {
  if (obj.className == "todobutton") {
    if (document.querySelector(".addTodo").value.trim() != "") {
      todolistItem.push(document.querySelector(".addTodo").value.trim());
      if (localStorage.getItem("todolistItem") == null) {
        localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
      } else {
        localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
      }
    }
  } else if (obj.className == "goalsPlansButton") {
    if (document.querySelector(".addGoalsPlans").value.trim() != "") {
      goalPlanItems.push(document.querySelector(".addGoalsPlans").value.trim());
      if (localStorage.getItem("goalPlanItems") == null) {
        localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
      } else {
        localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
      }
    }
  }
  show();
}

function show() {
  document.querySelector(".listItems").innerHTML = "";
  for (var i = 0; i < todolistItem.length; i++)
    document.querySelector(".listItems").innerHTML +=
      "<center><div class='elementItem'>" +
      todolistItem[i] +
      "<img class='checkIcon' src = 'check icon.png' onclick='strike(" +
      i +
      ",\"todo\")'><img class='deleteIcon' src = 'delete icon.png' onclick='deleteItem(" +
      i +
      ",\"todo\")'></div></center><br>";

  document.querySelector(".listofItems").innerHTML = "";
  for (var i = 0; i < goalPlanItems.length; i++)
    document.querySelector(".listofItems").innerHTML +=
      "<center><div class='elementOfItem'>" +
      goalPlanItems[i] +
      "<img class='checkOnIcon' src = 'check icon.png' onclick='strike(" +
      i +
      ",\"goalPlan\")'><img class='deleteOnIcon' src = 'delete icon.png' onclick='deleteItem(" +
      i +
      ",\"goalPlan\")'></div></center><br>";
}

function strike(index, abc) {
  if (abc == "todo") {
    if (todolistItem[index].includes("<strike>")) {
      todolistItem[index] = todolistItem[index].replace("<strike>", "");
    } else {
      todolistItem[index] = "<strike>" + todolistItem[index] + "</strike>";
    }
    if (localStorage.getItem("todolistItem") == null) {
      localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
    } else {
      localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
    }
  } else if (abc == 'goalPlan') {
    if (goalPlanItems[index].includes("<strike>")) {
      goalPlanItems[index] = goalPlanItems[index].replace("<strike>", "");
    } else {
      goalPlanItems[index] = "<strike>" + goalPlanItems[index] + "</strike>";
    }
    if (localStorage.getItem("goalPlanItems") == null) {
      localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
    } else {
      localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
    }
  }
  show();
}

function deleteItem(index, abc) {
  if (abc == 'todo') {
    todolistItem.splice(index, 1);
    if (localStorage.getItem("todolistItem") == null) {
      localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
    } else {
      localStorage.setItem("todolistItem", JSON.stringify(todolistItem));
    }
  } else if (abc == 'goalPlan') {
    goalPlanItems.splice(index, 1);
    if (localStorage.getItem("goalPlanItems") == null) {
      localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
    } else {
      localStorage.setItem("goalPlanItems", JSON.stringify(goalPlanItems));
    }
  }
  show();
}
