import * as fs from 'fs';
import { user } from './createAccount';

const nameUser: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const value: number = Number(process.argv[6]);

const fileName = 'users.json';

const addBalance = (name: string, cpf: number, value: number): void => {
  const usersDataJSON = fs.readFileSync(fileName).toString();
  const mutableUsersData = JSON.parse(usersDataJSON);

  const checkValidUser = mutableUsersData.filter((user: user) => {
    return user.name === name && user.cpf === cpf;
  }).length;

  if (checkValidUser <= 0) {
    mutableUsersData.map((user: user) =>
      user.name === name && user.cpf === cpf
        ? (user.balance = user.balance + value)
        : null
    );
  } else {
    console.log('Não foi possivel encontrar usuário');
  }

  const userNewBalanceAsJSON = JSON.stringify(mutableUsersData);
  fs.writeFileSync(fileName, userNewBalanceAsJSON);
};


addBalance(nameUser, cpf, value);
