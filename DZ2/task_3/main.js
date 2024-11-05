var color = prompt("Введите цвет светофора: ").toLocaleLowerCase().trim()

if (color === "красный") {
    alert("Стоп")
}else if( color === "желтый" || color === "жёлтый"){
    alert("Ждите")
}else if( color === "зеленый" || color === "зелёный"){
    alert("Идите")
}else{
    alert("Введите один из трёх цветов: красный, жёлтый, зелёный!")
}