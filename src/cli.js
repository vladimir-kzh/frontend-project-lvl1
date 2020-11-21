import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const askName = () => readlineSync.question('May I have your name? ');
const hello = name => console.log(`Hello, ${name}!`)

export default () => {
    welcome();
    const name = askName();
    hello(name);
};
