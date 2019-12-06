"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nameUser = process.argv[4];
const cpf = Number(process.argv[5]);
const date = process.argv[6];
const fileName = 'users.json';
const createAccount = (name, cpf, date) => {
    const newUser = {
        name,
        cpf,
        date,
        balance: 0
    };
    const data = fs.readFileSync(fileName).toString();
    const dataAsJSON = JSON.parse(data);
    dataAsJSON.push(newUser);
    const userAsJSON = JSON.stringify(dataAsJSON);
    fs.writeFileSync(fileName, userAsJSON);
    return newUser;
};
console.log(createAccount(nameUser, cpf, date));
//# sourceMappingURL=index.js.map