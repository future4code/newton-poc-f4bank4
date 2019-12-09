"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
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
    const todayDate = moment();
    const userDate = moment(`${date}`, 'DD/MM/YYYY');
    const diffInYears = todayDate.diff(userDate, 'years');
    if (diffInYears >= 18) {
        const data = fs.readFileSync(fileName).toString();
        const dataAsJSON = JSON.parse(data);
        const validate = dataAsJSON.filter((user) => {
            return user.cpf === cpf;
        }).length;
        if (validate >= 1) {
            console.log('CPF já cadastrado!');
        }
        else {
            dataAsJSON.push(newUser);
            const userAsJSON = JSON.stringify(dataAsJSON);
            fs.writeFileSync(fileName, userAsJSON);
            console.log('Sua conta foi criada com sucesso!');
        }
    }
    else {
        console.log('Não é permitido abertura de conta para menores de 18 anos!');
    }
};
createAccount(nameUser, cpf, date);
//# sourceMappingURL=createAccount.js.map