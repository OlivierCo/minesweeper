import * as chalk from "chalk";
import { init } from "./server";

require("dotenv").config();

const log = console.log;

log(chalk.green("--- Gateway Service ---"));

init()
	.listen()
	.then(({ url }) => log(chalk.blue(`🚀 Server ready at ${url}graphql`)));

log(chalk.green("--- Gateway started succesfully  ---"));
