var USD = 2.6;
var input = prompt ("input the number");
var currency = input.substring (0);
var value = input.substring (1, input.length - 1);
if (currency == "L")
{
    var dollars = value*USD;
    alert ("$" + dollars)
}
else if (currency == "$")
{
    var gel = value/USD;
    alert ("L" + gel)
}