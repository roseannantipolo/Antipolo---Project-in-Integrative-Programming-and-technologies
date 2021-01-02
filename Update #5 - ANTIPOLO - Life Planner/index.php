<?php require 'db_connection.php'?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ANTIPOLO - Life Planner</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header class="intro">
        <div class="introduction">
            <h1>LIFE PLANNER</h1>
            <h3>Get Organized!</h3>
        </div>
        <div class = "storage">
            <h2>To-Do-List</h2>
            <form action="addTask.php"  method="POST"> 
              <input type="text" class="addTodo" name="addTodo" placeholder="Add your Tasks" />
              <button class="todobutton" name="taskBtn">
                <img src="add btn.png" />
              </button>
            </form>
            <div class="listItems">
            </div>
        </div>

        <div class = "container">
            <h2>Goals and Plans</h2>
            <form action="addTask.php"  method="POST"> 
              <input type="text" name="addGoalsPlans" class="addGoalsPlans" placeholder="Add your Goals and Plans" />
              <button class="goalsPlansButton" name="goalsBtn">
                <img src="add btn.png" />
              </button>
            </form>
            <div class="listofItems"></div>
        </div>

        <div class = "holder">
            <h2>Appointments</h2>
            <form action="addTask.php"  method="POST"> 
            <input type="text" name="addAppointments" class="addAppointments" placeholder="Add your Appointments" />
            <button class="appointmentsButton" name="appointmentsBtn">
              <img src="add btn.png" />
            </button>
            </form>
            <div class="listofAppointments"></div>
        </div>

        <div class = "repo">
            <h2>Errands</h2>
            <form action="addTask.php"  method="POST"> 
            <input type="text" name="addErrands" class="addErrands" placeholder="Add your Errands" />
            <button class="errandsButton" name="errandsBtn">
              <img src="add btn.png" />
            </button>
            </form>
            <div class="listofErrands"></div>
        </div>

      </header>
      <script src="todolist.js"></script>
  </body>
</html>

