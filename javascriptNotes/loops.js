function forExample(){
    var i = 0;
    for(;;){
        if(i === 5){
            console.log('we can use for loop without existing any statements in for paranthesis: for(;;){}');
            i++;
            continue;
        }else if(i > 10){
            break
        }else{
            console.log(i);
        }
        i++
    }
}

var person = {name:"Ali", lname:"Kürekçi", age:23, job: "student"}
var x;
var info = "";
var keys = "";
function fonInExample(){
    for(x in person){
        info += person[x] + " ";
        keys += x + " ";
    }
    return keys + info;
}

var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}