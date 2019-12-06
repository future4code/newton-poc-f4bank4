import * as fs from 'fs'
import {user} from './createAccount'

const nameUser: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const value: number = Number(process.argv[6]);

const fileName = 'users.json'

const addBalance = (name: string, cpf: number, value: number): void => {

  const usersDataJSON = fs.readFileSync(fileName).toString();
  const mutableUsersData = JSON.parse(usersDataJSON);
  
  mutableUsersData.map((user: user) => user.name === name && user.cpf === cpf ? user.balance = user.balance + value : null);

  const userNewBalanceAsJSON = JSON.stringify(mutableUsersData);
  fs.writeFileSync(fileName, userNewBalanceAsJSON);
  
}

console.log(addBalance(nameUser, cpf, value));