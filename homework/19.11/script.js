

const number = 86;

function secretsGame() {
    while (true) {
        const userInput = prompt("Найдите секретную цифру от 1 до 100! (Введите 'стоп' для выхода)");

       
        if (userInput == "стоп") {
            alert("Вы вышли с игры");
            break;
        }

        const user = Number(userInput); 
    

        if (user < number) {
            alert("Цифра слишком маленькая!");
        } else if (user > number) {
            alert("Цифра слишком большая!");
        } else {
            alert("Вы выбрали правильное число!");
            break; 
        }
    }
}

secretsGame();
