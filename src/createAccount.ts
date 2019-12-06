import * as moment from 'moment';
import * as fs from 'fs'

const nameUser: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const date: any = process.argv[6];
const fileName = 'users.json'

type user = {
  name: string,
  cpf: number;
  date: moment.Moment,
  balance: number,
}

type transactions = {
  userTransactions: {
    valueTransaction: number,
    dateTransaction: any,
    descriptionTransaction: string
  }[]
}

const createAccount = (name: string, cpf: number, date: any): user => {
  const newUser: user = {
    name,
    cpf,
    date,
    balance: 0
  }

  const data = fs.readFileSync(fileName).toString();
  const dataAsJSON = JSON.parse(data);
  dataAsJSON.push(newUser);
  const userAsJSON = JSON.stringify(dataAsJSON);
  fs.writeFileSync(fileName, userAsJSON);
  
  return newUser;
}

console.log(createAccount(nameUser, cpf, date));