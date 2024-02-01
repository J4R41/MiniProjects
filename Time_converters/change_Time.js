
document.write('<input type="text" id="d" placeholder="Day"></input>');
    document.write('<input type="text" id="m" placeholder="Month"></input>');
    document.write('<input type="text" id="y" placeholder="Year"></input>');
document.write('<input type="button" id="d" value="Go" onclick="main()"></input>');
document.write('<div id="div"></div>');


function main()
{   
    let d = parseInt(document.getElementById('d').value);
    let m = parseInt(document.getElementById('m').value);
    let y = parseInt(document.getElementById('y').value);
    
    d += m2d(m,leap_y(y));
    
    document.getElementById('div').innerHTML = d + ',' + y;
}
function leap_y(y)
{
    if(y % 4 == 0)
    {
        return true;
    }
    return false;
}
function m2d(m,ly)
{
    let out;
    switch(m)
    {
        case 1:
            out = 0;
            break;
        case 2:
            out = 31;
            break;
        case 3:
            out = 59;
            break;
        case 4:
            out = 90;
            break;
        case 5:
            out = 120;
            break;
        case 6:
            out = 151;
            break;
        case 7:
            out = 181;
            break;
        case 8:
            out = 212;
            break;
        case 9:
            out = 243;
            break;
        case 10:
            out = 273;
            break;
        case 11:
            out = 304;
            break;
        case 12:
            out = 334;
            break;
    }
    if(ly && m > 2)
    {
        out += 1;
    }
    return out;
}
