import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';
const commandLineURL = process.argv[2];
if (commandLineURL) {
    const isValid = validator.isURL(commandLineURL, { require_protocol: true });
    const data = {
        url: commandLineURL,
        isValid,
        timestamp: new Date().toISOString(),
    };
    if (isValid) {
        const filePath = 'url_validation_results.json';
        const results = fs.existsSync(filePath) 
            ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) 
            : [];
        results.push(data);
        fs.writeFileSync(filePath, JSON.stringify(results, null, 2), 'utf-8');
    }
    console.log(isValid 
        ? chalk.green(`${commandLineURL} is a valid URL.`) 
        : chalk.red(`${commandLineURL} is not a valid URL.`));
} else {
    console.log(chalk.yellow('Please provide a URL to validate.'));
}







// import validator from 'validator';
// import chalk from 'chalk';
// import fs from 'fs';

// const commandLineURL = process.argv[2]; 

// if (commandLineURL) {
//     let validationResult = false;
//     if (validator.isURL(commandLineURL)) {
//         console.log(chalk.green(`${commandLineURL} is a valid URL.`));
//         validationResult = true;
//     } else {
//         console.log(chalk.red(`${commandLineURL} is not a valid URL.`));
//     }
// } else {
//     console.log(chalk.yellow('Please provide a URL to validate.'));
// }



//     const data = {
//         url: commandLineURL,
//         isValid: validationResult,
//         timestamp: new Date().toISOString(),
//     };
//     const filePath = 'url_validation_results.json';
//     let results = [];
//     if (fs.existsSync(filePath)) {
//         const fileData = fs.readFileSync(filePath, 'utf-8');
//         results = JSON.parse(fileData);
//     }
//     results.push(data);
//     fs.writeFileSync(filePath, JSON.stringify(results, null, 2), 'utf-8');
//     console.log(chalk.blue('Validation results have been saved.'));
// } else {
//     console.log(chalk.yellow('Please provide a URL to validate.'));
// }
