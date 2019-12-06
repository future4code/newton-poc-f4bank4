"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nameUser = process.argv[4];
const cpf = Number(process.argv[5]);
const fileName = 'users.json';
const getBalance = (name, cpf) => {
    const users = fs.readFileSync(fileName).toString();
    const usersAsJSON = JSON.parse(users);
    const filteredUser = usersAsJSON.filter((el) => {
        return el.name === name && el.cpf === cpf;
    });
    if (filteredUser.length > 0) {
        console.log('Seu saldo é de: ', filteredUser[0].balance);
    }
    else {
        console.log('Nome ou email incorreto!');
    }
};
getBalance(nameUser, cpf);
//# sourceMappingURL=getBalance.js.map