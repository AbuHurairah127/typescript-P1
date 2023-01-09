import inquirer from "inquirer";
const user = await inquirer.prompt([
    {
        name: "Age",
        type: "number",
        message: "enter your age",
    },
]);
console.log(user.Age);
