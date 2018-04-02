const chalk = require('chalk');
const moment = require('moment');

function log(cmessage){
  console.log(chalk.green("-- " + moment(moment()).format("DD MMM YYYY hh:mm:ss a") + " -- ") + cmessage);
}

function error(message) {
  log(chalk.rgb(255, 0, 0)(message));
}

function info(message) {
  log(chalk.rgb(43, 0, 255)(message));
}

function warn(message) {
  log(chalk.rgb(255, 180, 51)(message));
}

function debug(message) {
  log(chalk.rgb(124, 8, 255)(message));
}

function silly(message) {
  log(chalk.rgb(66, 238, 255)(message));
}

function rgb(r,g,b,message){
  log(chalk.rgb(r, g, b)(message));
}

function hex(hex,message) {
  log(chalk.hex(hex)(message));
}
error("Should log current time and print this in red");
info("Should log current time and print this in blue");
warn("Orange");
debug("caught your eye");
silly("Low level");
rgb(247,28,251,"pink");
hex("#0eff2d","green");
