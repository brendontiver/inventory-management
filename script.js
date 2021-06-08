var xlsx = require("xlsx");

var db = xlsx.readFile("Grocery_UPC_Database.xlsx");

var ws = db.Sheets["UPC_Export"];

var data = xlsx.utils.sheet_to_json(ws);
console.log(data);
