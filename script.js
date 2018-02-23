 document.getElementById("add").addEventListener("click", addexp);
document.getElementById("calculate").addEventListener("click", add);

var amount = [];

function addexp(){
var expense = document.getElementById("one").value;
var cost = document.getElementById("two").value;

var costs = parseInt(cost);

amount.push(costs);


console.log(amount);

var items = document.createElement("h4");
var list = document.createTextNode(expense);

items.appendChild(list);

document.getElementById("item").appendChild(items);


var val = document.createElement("h4");
var dollar = document.createTextNode("$" + cost);

val.appendChild(dollar);

document.getElementById("liability").appendChild(val);

}

function add(){
        var how = 0;

    for (var i = 0; i < amount.length; i++){
       how +=  amount[i];
    }
      
   
var it = document.createElement("h5");
var money = document.createTextNode("Total is " + "$" + how);

it.appendChild(money);

document.getElementById("result").appendChild(it);
    
}


