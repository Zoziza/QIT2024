
var name = prompt ('Ввыедите свое имя: ');

var use = prompt("Добро пожаловать в Тайный лес" + "\n" + "Хотите начать игру?"  + "\n" + 'Да' + "\n" + "Нет" );

var gameOver = false;

if  (use == 'нет') {
    alert ("Вы покинули игру")
   gameOver = true;

} else if(use == 'да') {
    alert('Вы зашли в лес, будьте бдительны!')
}
if (!gameOver) {
   
   var use = prompt ('Вы оказались  в лесу. Вы не помните кто вы , где вы и как здесь оказались. Вы видите перед собой две тропинки. Кудв вы пойдете?' + "\n" + "Налево " + "\n" + "Направо")
   var use =prompt ('Выбирайте с умом в пути могут быть ловушки! Если вы попадете в ловушку вам придется начать заново!');
       
}  
 if (use == 'Налево'|| use == 'налево') {
    alert('Вы выбрали правильный путь!')
   } else if (use == "Направо" || use == "направо") {
      alert('Упс, вы попали в ловушку !' );
      gameOver = true;
      
   }


if (!gameOver) {
 var use = prompt('Вы шли по тропинке и увидели хижину.' +  "\n" + 'Зайти' + "\n"+  'Остаться в лесу' );


 if (use == "Остаться в лесу"|| use == 'остаться в лесу'|| use == "в лесу") {
    alert( 'Упс, вас съели  призраки! ')
    gameOver = true;
 } else if ( use == "Зайти" || use == 'зайти'){
    alert('Вы без опасности зашли в хижину,  и смогли остаться в живых эту ночь.')
 } 
}

if(!gameOver) {
 var use = prompt('Вы устроили себе место для ночлега, как не странно хоть и хижина была старой но вы нашли там свежую еду'+ '\n'+ "Съесть"+"\n"+ "Не есть" );


 if (use == "Съесть" || use == "съесть") { 
    alert("Упс, эта еда была отравлена!") 
    gameOver = true;
 } else if (use == 'не есть' || use == 'Не есть'){
    alert('Вы дальше продвигаетесь по комнатам.')
 }
}

if (!gameOver) {
 var use = prompt('В одной из комнат вы нашли маленькую странную коробку.' + "\n" + "Открыть ");

 if (use == "Открыть" || use == "открыть"){
    alert('Вы нашли один из кусочкев воспоминаний!' + "\n"+ "P.S: Найдите все кусочки воспоминаний чтобы пройти игру.")
 }
}

if (!gameOver) {
 var use = prompt('Наступил следущий день. Вы  решили дальше пойти по лесу.');

 var use = prompt('Вы увидели по пути человека в тростью' + "\n" + 'Подойти к нему ' + "\n" + 'Уйти дальше по лесной тропинке');


 if ( use== 'Подойти к нему'|| use == 'подойти к нему' || use == "уйти") {
     alert('Этот человек оказался помощником путников и подсказал вам где хранятся оставшие кусочки воспоминаний.')
 } else if (use == 'Уйти дальше по лесной тропинке' || use == 'Уйти' ){

    alert('Упс, вы не смогли найти выход из леса. Вас съели призраки!')
    gameOver = true;
 } 
}

if(!gameOver){
 var use = prompt('Вы в одном из тайных мест в лесу скрытую от людей и призраков нашли тайник, открыть его помог помощник и в обмен сказал отдать ему один из кусков воспоминаний' + '\n' + 'Отдать ему воспоминания' + '\n' + 'Не отдавать');


 if (use == 'Отдать' || use == 'отдать'){
    alert('Вы сможете выйти из леса человеком но, вы не помните как вы сюда пришли . Все остальное вам удалось вспомнить ')
 } else if (use == 'Не отдавать'|| use == 'не отдавать'){
    alert('Помощник оказался хозяином леса , он вас проклял теперь вы призрак в этом лесу.')
    gameOver = true;
 } 
}
if (!gameOver){
 alert( name + '\n' +  "Поздравляю, вы смогли пройти игру и не проиграть!");
}x 
 
