<?php
    function addTodo(){
        require 'db_connection.php';
        $task = $_POST['addTodo'];
        $query = "INSERT INTO todolist(Task, Status) VALUES ('$task', 0)";
        if($conn->query($query)){
            header("refresh:0; url=index.php?mess=success");
        } else {
            echo "<script>console.log('Not Inserted!' );</script>";
        } 
    }

    if(isset($_POST['taskBtn'])){
        addTodo();
    }

    function addAppointments(){
        require 'db_connection.php';
        $task = $_POST['addAppointments'];
        $query = "INSERT INTO appointments(ListOfAppointments, Status) VALUES ('$task', 0)";
        if($conn->query($query)){
            header("refresh:0; url=index.php?mess=success");
        } else {
            echo "<script>console.log('Not Inserted!' );</script>";
        } 
    }

    if(isset($_POST['appointmentsBtn'])){
        addAppointments();
    }

    function addGoalsPlans(){
        require 'db_connection.php';
        $task = $_POST['addGoalsPlans'];
        $query = "INSERT INTO goalsplans(ListOfGoalsPlans, Status) VALUES ('$task', 0)";
        if($conn->query($query)){
            header("refresh:0; url=index.php?mess=success");
        } else {
            echo "<script>console.log('Not Inserted!' );</script>";
        } 
    }

    if(isset($_POST['goalsBtn'])){
        addGoalsPlans();
    }

    function addErrands(){
        require 'db_connection.php';
        $task = $_POST['addErrands'];
        $query = "INSERT INTO errands(ListOfErrands, Status) VALUES ('$task', 0)";
        if($conn->query($query)){
            header("refresh:0; url=index.php?mess=success");
        } else {
            echo "<script>console.log('Not Inserted!' );</script>";
        } 
    }

    if(isset($_POST['errandsBtn'])){
        addErrands();
    }
?>