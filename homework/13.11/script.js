let numbers = 0;

for( let i = 0; i <= 100; i++ ) {
    if ( i % 2 == 0 ) {
        console.log ("Fizz");
       continue;
    } else {
        console.log("Buzz");
    }
}

// Task 2 

let score = 5;
 let attemps = 0;  
do{
   
     let question = +prompt("В каком году впервые полетели на Луну?")
     if (question == "1969") {
        score += 5;
        alert("Правильный ответ!" + score)
     } else {
        score -= 5;

        alert("Неправильный ответ" )
        
     }
     break;
}while ( "Итогывый балл" + score  )

 do {
        let question = prompt("Кто первым полетел на Луну первым?")
        if (question == "Нил Армстронг") {
        score+= 5;
        alert("Правильный ответ!" + score)
        break;
        }else {
            score -= 5;
            attemps < 3 
            alert("Неправильный ответ" )
        }
    
 }while("Итогывый балл" + score )


    do{
        let question = +prompt("Сколько планет в Солнечной системе?")
        if (question == "8") {
        score+= 5;
        alert("Правильный ответ!" + score)
        break;
        }else {
            score -= 5;
            alert("Неправильный ответ" )
        }
    
 } while ("Итогывый балл" + score );


let num1 = 4; 
let num2 = 7;
let i = 1; 

do {
   
    if (i % num1 == 0) {
        console.log("Диапозон 4");
    }
 
    if (i % num2 == 0) {
        console.log("Диапозон 7");
    }

    i++;

} while (i <= 20);



