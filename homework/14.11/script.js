let correctPass = "amjilt_the_best"
let attemps = 0;

do {
    let use = prompt("Введите правильный пороль...");

  if  (use == correctPass) {
    alert("Поздравляем , вы зашлит в сайт");
    break;
  } else {
    attemps++;
    if (attemps >= 5 )
        alert ("Too many attempts");
  } 
} while(attemps < 5 )

