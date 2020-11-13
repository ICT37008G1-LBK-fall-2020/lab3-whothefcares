var students = prompt ("how many students?");
var arr = [];
for (var i = 0; i<students; i++)
{
    arr.push (prompt ("type in student's names"))
}
var remove = prompt ("who to remove?");
for (var i = 0; i<arr.length; i++)
{
    if (arr [i] .includes (remove))
    {
        arr.splice (i, 0)
        students--
    }
    else alert (arr [i])
}