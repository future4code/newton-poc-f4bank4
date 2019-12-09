import * as moment from 'moment';
import * as fs from 'fs';

const nameUser: string = process.argv[4];
const cpf: number = Number(process.argv[5]);
const date: string = process.argv[6];
const fileName = 'users.json';

export type user = {
  name: string;
  cpf: number;
  date: string;
  balance: number;
};

type transactions = 
  {
    valueTransaction: number;
    dateTransaction: any;
    descriptionTransaction: string;
  }

const createAccount = (name: string, cpf: number, date: string): void => {
  const newUser: user = {
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

    const validate = dataAsJSON.filter((user: user) => {
      return user.cpf === cpf;
    }).length;
    if (validate >= 1) {
      console.log('CPF já cadastrado!');
    } else {
      dataAsJSON.push(newUser);
      const userAsJSON = JSON.stringify(dataAsJSON);
      fs.writeFileSync(fileName, userAsJSON);
      console.log('Sua conta foi criada com sucesso!');
    }
  } else {
    console.log('Não é permitido abertura de conta para menores de 18 anos!');
  }
};

createAccount(nameUser, cpf, date);
