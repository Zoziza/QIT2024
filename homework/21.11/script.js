// 1 ex  
  
 /*function userNumbers () {
let user = +prompt("Введите число :")

    
   if ( user % 1 == 0 && user > 1 ) {
   return "Это простое число"
   }else { 
 return "Введите только простые числа!"
   }
}
alert(userNumbers())*/

// 2 ex


  /*function allNumbers() {
    let sum = 0;
    
    
    for( let i = first; i <= last; i++) {
      sum +i ;

    }
    return sum;
 } 
 const result= allNumbers(1, 100);
console.log(result)*/

// 3 ex

 /*function both () {
   
    let user = +prompt("Сандарды жазыныз :")
   

    if( user % 2 == 0 ) {
        alert("Жұп сан ")
    }else{
        alert("Тақ сан ")
    }
 }
alert(both ())*/

//ex 4 

/*function middleNumber() {
    let user = prompt("Введите числа:")
    let num1 = +prompt("1 число:");
    let num2 = +prompt("2 число:");
    let num3 = +prompt("3 число:");
    let num4 = +prompt("4 число:");
    let num5 = +prompt("5 число:");


     user = num1 + num2 + num3 + num4 + num5;

 
    let result = user / 5;

    return  result;
} alert(middleNumber())*/

// ex 5 

/*function twoNumbers() {
 let num1= +prompt("Введите первое число: "); 
 let num2 = +prompt("Введите второе число:");

    num1++;
    num2++;
 
 return [num1, num2]

} 
const result = twoNumbers();
console.log(result)*/

//  ex 6
/*function secretNumber() {
    let secret = 80;

    while (true) {
        let user = +prompt("Найдите секретную цифру от 1 до 100: ");

        if (user === secret) {
            alert("Правильно!");
            break;
        } else if (user >= secret - 5 && user <= secret + 5) {
            alert("Жақын");
        } else {
            alert("Алыс");
        }
    }
}

secretNumber();*/

// ex 7

/*function Findfactorial () {
    let user = +prompt("Введите цифру для факториала :")
    let factorial = 1;
   
  for (let i = 1; i <= user; i++) {
     factorial *=  i 
  }
   alert(`Факториал ${factorial}`)
} 
Findfactorial();*/


// ex 8  

/*let result = 0; 
  let maxGrade = 0;
  let students = 0;

  while (true) {
    let studentName = prompt('Student atyn zhaz');
    if (studentName == 'stop') break;
    students++;

    let grade = +prompt(`${studentName} бағасын жаз`);
    if (grade > maxGrade) maxGrade = grade; 

    result += grade;
  }

  alert(
    `Students number is ${students} \nThe greatest grade is ${maxGrade}\nAverage grade is ${
      result / students
    }`
  );


studentsGrade();*/ 


// ex 9

/*function reverse () {
  let number = +prompt("Введите ваше число:") 

  for( let i = 1; i <=  number; i--) {

    console.log(i)
  }
} 
reverse();*/


// ex 10 
 function moneyConvert  () {
  let schet = 2000; 
  let money; 


  while( true ) {
    money = prompt("Введите продукт который хотите взять :")
    
    if (schet < money ){
      alert("У вас недосталочно средств на счету!")
      break; 
    }


    let currency = prompt ("Выберите валюту с которой будете опалчивать: (USD ,KZT , CHY)")

    if( currency == "USD"|| currency == "KZT" || currency == "CHY")  {
       currency -= schet 
    
    }
  alert(`Остаток на счету : ${schet} в ${currency}`)
  }


 }

moneyConvert(); 






