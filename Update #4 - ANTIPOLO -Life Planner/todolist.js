var todolistItem = [];
var goalPlanItems = [];
var appointmentItems = [];
var errandstItems = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("todolistItem")) != null)
    todolistItem = JSON.parse(localStorage.getItem("todolistItem"));
  console.log(todolistItem);

  if (JSON.parse(localStorage.getItem("goalPlanItems")) != null)
    goalPlanItems = JSON.parse(localStorage.getItem("goalPlanItems"));
  console.log(goalPlanItems);

  if (JSON.parse(localStorage.getItem("appointmentItems")) != null)
    appointmentItems = JSON.parse(localStorage.getItem("appointmentItems"));
  console.log(appointmentItems);

  if (JSON.parse(localStorage.getItem("errandstItems")) != null)
    errandstItems = JSON.parse(localStorage.getItem("errandstItems"));
  console.log(errandstItems);

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
  else if (obj.className == "appointmentsButton") {
    if (document.querySelector(".addAppointments").value.trim() != "") {
      appointmentItems.push(document.querySelector(".addAppointments").value.trim());
      if (localStorage.getItem("appointmentItems") == null) {
        localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
      } else {
        localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
      }
    }
  }
  else if (obj.className == "errandsButton") {
    if (document.querySelector(".addErrands").value.trim() != "") {
      errandstItems.push(document.querySelector(".addErrands").value.trim());
      if (localStorage.getItem("errandstItems") == null) {
        localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
      } else {
        localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
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

    document.querySelector(".listofAppointments").innerHTML = "";
      for (var i = 0; i < appointmentItems.length; i++)
        document.querySelector(".listofAppointments").innerHTML +=
          "<center><div class='appointmentElementItems'>" +
          appointmentItems[i] +
          "<img class='checkIcons' src = 'check icon.png' onclick='strike(" +
          i +
          ",\"appointment\")'><img class='deleteIcons' src = 'delete icon.png' onclick='deleteItem(" +
          i +
          ",\"appointment\")'></div></center><br>";

    document.querySelector(".listofErrands").innerHTML = "";
        for (var i = 0; i < errandstItems.length; i++)
          document.querySelector(".listofErrands").innerHTML +=
            "<center><div class='errandElementItems'>" +
            errandstItems[i] +
            "<img class='checkIcn' src = 'check icon.png' onclick='strike(" +
            i +
            ",\"errands\")'><img class='deleteIcn' src = 'delete icon.png' onclick='deleteItem(" +
            i +
            ",\"errands\")'></div></center><br>";
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
  else if (abc == 'appointment') {
    if (appointmentItems[index].includes("<strike>")) {
      appointmentItems[index] = appointmentItems[index].replace("<strike>", "");
    } else {
      appointmentItems[index] = "<strike>" + appointmentItems[index] + "</strike>";
    }
    if (localStorage.getItem("appointmentItems") == null) {
      localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
    } else {
      localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
    }
  }
  else if (abc == 'errands') {
    if (errandstItems[index].includes("<strike>")) {
      errandstItems[index] = errandstItems[index].replace("<strike>", "");
    } else {
      errandstItems[index] = "<strike>" + errandstItems[index] + "</strike>";
    }
    if (localStorage.getItem("errandstItems") == null) {
      localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
    } else {
      localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
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
  else if (abc == 'appointment') {
    appointmentItems.splice(index, 1);
    if (localStorage.getItem("appointmentItems") == null) {
      localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
    } else {
      localStorage.setItem("appointmentItems", JSON.stringify(appointmentItems));
    }
  }
  else if (abc == 'errands') {
    errandstItems.splice(index, 1);
    if (localStorage.getItem("errandstItems") == null) {
      localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
    } else {
      localStorage.setItem("errandstItems", JSON.stringify(errandstItems));
    }
  }
  show();
}
