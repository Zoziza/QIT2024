

function convertMeters(distance, unit) {
    if (unit == "метр") {
        return distance;
    } else if (unit == "дециметр") {
        return distance / 10;
    } else if (unit == "километр") {
        return distance * 1000;
    } else {
        alert("Қате!");
        return 0;
    }
}

let totalDistance = 0;

while (true) {
    let distance = +prompt("Қашықтықты енгізіңіз "); // Я забыла как убрать второе сообщение перед результатом 
  
    if (distance === 0) { //Почему если не бы не было === он отказывался работать?Можете указать все эио в комментариях?
        break;  
    }

    let unit = prompt("Өлшем бірлігін енгізіңіз (метр, дециметр, километр):");

    totalDistance += convertMeters(distance, unit); 
}

alert("Барлық қашықтық: " + totalDistance + " метр"); 
