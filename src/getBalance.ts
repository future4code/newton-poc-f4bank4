import * as fs from 'fs';

const nameUser: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const fileName = 'users.json';

const getBalance = (name: string, cpf: number) => {
  const users: string = fs.readFileSync(fileName).toString();
  const usersAsJSON = JSON.parse(users);

  const filteredUser = usersAsJSON.filter((el: any) => {
    return el.name === name && el.cpf === cpf;
  });

  if (filteredUser.length > 0) {
    console.log('Seu saldo é de: ', filteredUser[0].balance);
  } else {
    console.log('Nome ou email incorreto!');
  }
};

getBalance(nameUser, cpf);
