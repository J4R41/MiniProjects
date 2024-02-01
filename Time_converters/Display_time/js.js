let go = () =>
{
	let d = new Date();
	let Year = d.getFullYear();
	let Month = d.getMonth()+1;
	let Day = d.getDate();
	let Hour = d.getHours();
	let Minute = d.getMinutes();
	let Second = d.getSeconds();

    if( Year > 2000 )
    {
        Year -= 2000;
    }
	
	document.getElementById('normal').innerHTML = d;
	document.getElementById('my').innerHTML = 'T:' + Year + '.' + Month + '.' + Day + '.' + Hour + '.' + Minute + '.' + Second;
}
let convertTime = () =>
{
    let year = parseInt(document.getElementById('year').value);
    let month = parseInt(document.getElementById('month').value);
    let day = parseInt(document.getElementById('day').value);
    let hour = parseInt(document.getElementById('hour').value);
    let minute = parseInt(document.getElementById('minute').value);
    let second = parseInt(document.getElementById('second').value);

    if( year > 2000 )
    {
        year -= 2000;
    }

    if( isNaN(year) )
    {
        year = '';
    }
    if( isNaN(month) )
    {
        month = '';
    }
    if( isNaN(day) )
    {
        day = '';
    }
    if( isNaN(hour) )
    {
        hour = '';
    }
    if( isNaN(minute) )
    {
        minute = '';
    }
    if( isNaN(second) )
    {
        second = '';
    }

    document.getElementById('Time').innerHTML = 'T:' + year + '.' + month + '.' + day + '.' + hour + '.' + minute + '.' + second;
}