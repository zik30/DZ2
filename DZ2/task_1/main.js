var arr = [10, 20, 30, 50, 235, 3000,345, 533, 23, 77, 45]
for (var i of arr){
    var k = i.toString()
    if (k[0] === "1" || k[0] === "2" || k[0] === "5"){
        console.log(k)
    }
}