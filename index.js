import inquirer from "inquirer";
import chalk from "chalk";
const Calculator = await inquirer.prompt([{
        type: `number`,
        name: `num1`,
        message: `Enter Your First Number`
    }, {
        type: `number`,
        name: `num2`,
        message: `Enter Your Second Number`
    }, {
        type: `list`,
        name: `Operator`,
        message: `Choose Your Operator`,
        choices: [`Add`, `Subtract`, `Multiply`, `Divide`]
    }]);
let result;
switch (Calculator.Operator) {
    case `Add`:
        result = Calculator.num1 + Calculator.num2;
        console.log(chalk.red(`Your Answer is ${result}`));
        break;
    case `Subtract`:
        result = Calculator.num1 - Calculator.num2;
        console.log(chalk.green(`Your Answer is ${result}`));
        break;
    case `Multiply`:
        result = Calculator.num1 * Calculator.num2;
        console.log(chalk.yellow(`Your Answer is ${result}`));
        break;
    case `Divide`:
        result = Calculator.num1 / Calculator.num2;
        console.log(chalk.blue(`Your Answer is ${result}`));
        break;
}
