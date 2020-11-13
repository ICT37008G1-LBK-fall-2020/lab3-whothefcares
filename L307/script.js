var students1 = prompt ("how many students?");
var arr1 = [];
for (var i = 0; i<students1; i++)
{
    arr1.push (prompt ("type in first student's names"))
}
var students2 = prompt ("how many students?");
var arr2 = [];
for (var i = 0; i<students2; i++)
{
    arr2.push (prompt ("type in second student's names"))
}
var arr3 = [];
for (var i = 0; i<students1; i++)
{
    if (!arr3.includes (arr1 [i]))
    {
        arr3.push (arr1 [i])
    }
}
for (var i = 0; i<students2; i++)
{
    if (!arr3.includes (arr2 [i]))
    {
        arr3.push (arr2 [i])
    }
}
for (var i = 0; i<arr3.length; i++)
{
    alert (arr3 [i])
}