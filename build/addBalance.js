"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nameUser = process.argv[4];
const cpf = Number(process.argv[5]);
const value = Number(process.argv[6]);
const fileName = 'users.json';
const addBalance = (name, cpf, value) => {
    const usersDataJSON = fs.readFileSync(fileName).toString();
    const mutableUsersData = JSON.parse(usersDataJSON);
    mutableUsersData.map((user) => user.name === name && user.cpf === cpf ? user.balance = user.balance + value : null);
    const userNewBalanceAsJSON = JSON.stringify(mutableUsersData);
    fs.writeFileSync(fileName, userNewBalanceAsJSON);
};
console.log(addBalance(nameUser, cpf, value));
//# sourceMappingURL=addBalance.js.map