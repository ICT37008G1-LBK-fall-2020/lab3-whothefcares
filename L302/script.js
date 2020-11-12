var str = prompt ("sentence")
if (str.length > 15)
{
    str = str.substring(0, 15) +"..." 
}
alert (str)