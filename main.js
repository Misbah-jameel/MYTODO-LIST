#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
//print welcome message
console.log("================================================================================================");
console.log(chalk.blueBright.bold("\n \t------ WELLCOME TO MY TODO LIST -ITS MISBAH JAMEEL--------\n"));
console.log("================================================================================================");
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            { name: "choice",
                type: "list",
                message: "select an option you want to do :",
                choices: ["Add Task", "Delete Task", "update Task", "view Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "update Task") {
            await updateTask();
        }
        else if (option.choice === "view Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function to add new task  to the list 
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} task added successfully in Todo-List`);
};
//function to view all Todo-List Task
let viewTask = () => {
    console.log("\nYour Todo-List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
//function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt({
        name: "index",
        type: "number",
        message: "Enter the'index no'of the task  you want to delete :",
    });
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n${deletedTask} this task has been deleted successfully from your todo-list\n`);
};
//functions to update a task 
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index no'of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter the new Task name:",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task add 'index no' ${update_task_index.index - 1} updated successfully [for updated list check option:'view todo list']`);
};
main();
