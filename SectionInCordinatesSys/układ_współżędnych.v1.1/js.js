let xtab = [];
let ytab = [];
let n_p = 0;

function main()
{
	let max_x = 25;
	let max_y = 25;
	let tab = [max_x][max_y];
	
	let starti = -(Math.floor(max_x/2));
	let stopi = max_x + starti;
	let startj = -(Math.floor(max_y/2));
	let stopj = max_y + startj;
	
	let fsx;
	let fsy;
	
	document.write('<style>* { background: black; color: #6400ff; font-family: monospace; }</style>');
	
	console.log('Making for:' + xtab.join() + ' and ' + ytab.join());
	
	for(let i = starti; i < stopi; i++)
	{
		for(let j = startj; j < stopj; j++)
		{
			fsx = find_same_x(i);
			fsy = find_same_y(j);
			if(i == fsx && j == fsy)
			{
				document.write(i+'|'+j);
			}
			else if(i == fsx)
			{
				document.write(' - ');
			}
			else if(j == fsy)
			{
			document.write(' | ');
			}
			else
			{
				document.write(' + ');
			}
		}
		document.write('<br>');
	}
}
function add()
{
	let x = document.getElementById('text_x').value;
	let y = document.getElementById('text_y').value;
	
	if(x == '')
	{
		alert('Type x!');
	}
	else if(y == '')
	{
		alert('Type y!');
	}
	
	xtab.push(x);
	ytab.push(y);
	n_p++;
	
	answer = answer + ('P' + n_p + '(' + x + ',' + y + ')  ');
	
	document.getElementById('points').value = answer;
	
	document.getElementById("text_x").value = '';
	document.getElementById("text_y").value = '';
}
function find_same_x(ij)
{
	for(let k = 0; k < xtab.length; k++)
	{
		if(ij == xtab[k])
		{
			return 1;
		}
	}
	return 0;
}
function find_same_y(ij)
{
	for(let k = 0; k < ytab.length; k++)
	{
		if(ij == ytab[k])
		{
			return 1;
		}
	}
	return 0;
}