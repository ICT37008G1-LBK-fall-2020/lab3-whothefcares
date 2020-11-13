var USD = 2.6;
var input = prompt ("input the number");
var currency = input.substring (0, 1);
var value = parseFloat(input.substring (1)).toFixed(2);
if (currency == "L")
{
    var dollars = value/USD;
    alert ("$" + dollars)
}
else if (currency == "$")
{
    var gel = value*USD;
    alert ("L" + gel)
}