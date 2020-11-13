var students = prompt ("how many students?");
var arr = [];
for (var i = 0; i<students; i++)
{
    arr.push (prompt ("type in student's names"))
}
arr = arr.sort ();
for (var i = students-1; i>=0; i--)
{
    alert (arr [i])
}