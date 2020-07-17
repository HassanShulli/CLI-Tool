#!/usr/bin/env node

const yargs = require("yargs");
var fs = require('fs');
const { Parser } = require('json2csv');

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

 const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

const input = `${options.name}!`;

const printAlternate =  (userInput) => {
    let alternate = userInput.split('');
    let isAlternate = [];
    alternate.map((a, i) => {
        if (i%2 == 0) {
            isAlternate.push(a.toUpperCase());
        } else {
            isAlternate.push(a);
        }
    });
    return isAlternate.join('');
}

const toCSV = (userInput) => {
    // CSV in progress
    // try {
    //     const parser = new Parser(opts);
    //     const csv = parser.parse(userInput);
    //     console.log(csv);
    //     var path='./file'+Date.now()+'.csv'; 
        
    //     fs.writeFile(path, csv, function(err,data) {
    //     if (err) {throw err;}
    //     else{ 
    //         console.log('file Created');
    //         res.setHeader('Content-disposition', 'attachment; filename=data.csv');
    //         res.set('Content-Type', 'text/csv');
    //         res.status(200).send(csv);
    //     }
    // });
    // } catch (err) {
    // console.error(err);
    // }
};

console.log('All uppercase : ',  input.toUpperCase(input));
console.log('alternate : ', printAlternate(input));
console.log('csv : ', toCSV(input));