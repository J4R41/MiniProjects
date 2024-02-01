let tabx = [];
let taby = [];
let P_n = [];
let n = 0;
let max = 25;
let data = '';
let test = false;
let section = [];
let max_chars;
let chars_in_Sn;
let Sn = '';
let the_section;
let n1 = '';
let n2 = '';
let x1 = '';
let y1 = '';

/*
	Pn(x,y)
	
	Sn.początkowy_x,początkowy_y.szerokość(),wysokość
	Sn.x1,yi.n1,n2
*/

function main()
{	
	if(test == false)
	{
		max = document.getElementById('max').value;
		if(max == '')
		{
			max = 25;
		}
		
		max = parseInt(max);
	}
	
	max = max + 1;
	
	let tab = [max];
	
	for(let i = 0; i < max; i++)
	{
		tab[i] = [max];
	}
	
	document.write('<style>* { color:#6400ff; background-color: black; font-family: monospace; font-size: 10px; transform-origin: left top; transform: scale(1.33, 1); width: ' + (max+3)*5.5 + 'px;} </style>');
	
	for(let j = -1; j <= max; j++)
	{
		for(let i = -1; i <= max; i++)
		{
			if(i == -1 && j == -1)
			{
				document.write('\\');
				data = data + '\\';
			}
			else if(i == -1)
			{
				if((j % 10) == 0)
				{
					document.write('═');
					data = data + '═';
				}
				else
				{
					document.write('║');
					data = data + '║';
				}
			}
			else if(j == -1)
			{
				if((i % 10) == 0)
				{
					document.write('║');
					data = data + '║';
				}
				else
				{
					document.write('═');
					data = data + '═';
				}
			}
			
			else if(i == 0 && j == max)
			{
				document.write('╚');
				data = data + '╚';
			}
			else if(i == max && j == 0)
			{
				document.write('╗');
				data = data + '╗';
			}
			
			else if(i == 0 && j == 0)
			{
				document.write('%');
				data = data + '%';
			}
			else if(i == 0)
			{
				document.write('║');
				data = data + '║';
			}
			else if(j == 0)
			{
				document.write('═');
				data = data + '═';
			}
			else if(i == max && j == max)
			{
				document.write('╝');
				data = data + '╝';
			}
			else if(i == max)
			{
				document.write('║');
				data = data + '║';
			}
			else if(j == max)
			{
				document.write('═');
				data = data + '═';
			}
			else
			{
				document.write(find(i,j));
				data = data + find(i,j);
			}
		}
		document.write('<br>');
		data = data + '<br>';
	}
	
	document.write('<br>Dane:<br>max = ' + (max-1) + '<br>');
	data = data + '<br>Dane:<br>max = ' + (max-1) + '<br>';
	
	if(P_n.length > 0)
	{
		for(let i = 0; i < P_n.length; i++)
		{
			document.write(P_n[i] + '(' + tabx[i] + ',' + taby[i] + ')<br>');
			data = data + P_n[i] + '(' + tabx[i] + ',' + taby[i] + ')<br>';
		}
	}
	document.write('<br><br>');
	document.write('<input id="designate_sections" type="button" value="Wyznacz przedziały" onClick="designate_sections()" style="color: #6400ff; height: 30px; width: 115px; background-color: #111111; border-color: #6400ff;"/>');
	
}
function add()
{
	let x = parseInt(document.getElementById('in_x').value);
	let y = parseInt(document.getElementById('in_y').value);
	
	if(x == '' || y == '')
	{
		alert('Type x and y!');
		return;
	}
	
	tabx.push(x);
	taby.push(y);
	n++;
	P_n.push('P' + n);
	
	document.getElementById('P').value = P_n.join('\n╶╶╶╶╶╶\n');
	document.getElementById('x').value = tabx.join('\n╶╶╶╶╶╶\n');
	document.getElementById('y').value = taby.join('\n╶╶╶╶╶╶\n');
	
	document.getElementById("in_x").value = '';
	document.getElementById("in_y").value = '';
}
function find(i,j)
{	
	let foundi = 0;
	let foundj = 0;

	for(let k = 0; k < tabx.length; k++)
	{
		if(tabx[k] == i)
		{
			foundi = '1';
		}
	}
	for(let k = 0; k < tabx.length; k++)
	{
		if(taby[k] == j)
		{
			foundj = '1';
		}
	}
	
	if(foundi == '1' && foundj == '1')
	{
		return '┿';
	}
	else if(foundi == '1')
	{
		return '│';
	}
	else if(foundj == '1')
	{
		return '━';
	}
	else
	{
		return '&#8226;';
	}
}
function test_f()
{
	test = true;
	
	max = 20;
	
	P_n[0] = 'P1';
	tabx[0] = 4;
	taby[0] = 4;
	
	P_n[1] = 'P2';
	tabx[1] = 7;
	taby[1] = 7;
	
	P_n[2] = 'P3';
	tabx[2] = 25;
	taby[2] = 10;
	
	main();
}
function designate_sections()
{
	document.write('<br><br><br>Przedziały:<br>S+nr.współżędne punktu początkowego.szerokość,wysokość<br>');
	
	let section_n = 0;
	
	tabx.push(max);
	taby.push(max);
	
	tabx.reverse();
	taby.reverse();
	tabx.push(0);
	taby.push(0);
	tabx.reverse();
	taby.reverse();
	
	for(let j = 0; j < taby.length-1; j++)
	{
		for(let i = 0; i < taby.length-1; i++)
		{
			if((tabx[i+1] - tabx[i]-1) > 0 && (taby[j+1] - taby[j]-1) > 0)
			{
				section_n++;
				section.push('S' + section_n + '.' + (tabx[i]+1) + ',' + (taby[j]+1) + '.' + (tabx[i+1] - tabx[i]-1) + ',' + (taby[j+1] - taby[j]-1)); 
			}
		}
	}
	
	document.write(section.join('<br>') + '<br><br><br>Wpisywanie danych do danej sekcji:<br><br><br><input id="change_section" type="text" value="" placeholder="Wpisz nr sekcji" style="color: #6400ff; height: 30px; width: 115px; background-color: #111111; border-color: #6400ff; transform: scale(1, 1.5);">    <br><br><br>    <button id="type_into_section" onClick="type_into_section()" style="color: #6400ff; height: 50px; width: 87px; background-color: #111111; border-color: #6400ff;">wybierz</button>');

}
function type_into_section()
{
	let S_n = document.getElementById('change_section').value;
	if(S_n == '')
	{
		alert('Wpisz nr sekcji!');
	}
	
	for(let i = 0; i < S_n.length; i++)
	{
		Sn = Sn + S_n[i];
	}
	
	parseInt(Sn);
	
	the_section = section[Sn-1];
	let dot = 0;
	let dot2 = 0;
	
	document.write('<br><br><br>' + the_section + '<br><br><br>');
	
	for(let i = 0; i < (the_section.length); i++)
	{
		if(the_section[i] == '.')
		{
			dot++;
		}
		else if(the_section[i] == ',')
		{
			dot2++;
		}
		
		if(dot == 1 && dot2 < 1 && the_section[i] != '.')
		{
			x1 = x1 + the_section[i];
		}
		else if(dot == 1 && dot2 == 1 && the_section[i] != ',')
		{
			y1 = y1 + the_section[i];
		}
		
		if(dot == 2 && dot2 < 2 && the_section[i] != '.')
		{
			n1 = n1 + the_section[i];
		}
		else if(dot == 2 && dot2 == 2 && the_section[i] != ',')
		{
			n2 = n2 + the_section[i];
		}
	}
	
	console.log(n1 + ' ' + n2 + ' x ' + x1 + ' y ' + y1);
	
	max_chars = n1 * n2;
	
	document.write('Maxymalna ilość znaków w ' + S_n + ' jest ' + max_chars + '<br><br> <textarea id="chars_in_Sn" value="" placeholder="Wpisz zawartość sekcji" style="color: #6400ff; height: 30px; width: 115px; background-color: #111111; border-color: #6400ff; transform: scale(1, 1.5);"></textarea>    <br><br><br><br>    <button id="chars_to_Sn" onClick="type_to_Sn()" style="color: #6400ff; height: 30px; width: 115px; background-color: #111111; border-color: #6400ff;">Wpisz do sekcji</button>');
}
function type_to_Sn()
{
	chars_in_Sn = document.getElementById('chars_in_Sn').value;
	if(chars_in_Sn.length > max_chars)
	{
		alert('maxymalna ilość znaków to: ' + max_chars + ' !');
	}
	else 
	{
		//wpisywanie do danej sekcji potrzebne(max_chars , chars_in_Sn , section[] , Sn , the_section , data)
		
		let n_br = 0;
		let old_n_br;
		let line_chars = '';
		let datax = 0;
		let datay = 0;
		let n_chars_in_Sn = 0;
		
		for(let i = 0; i < data.length; i++)
		{
			old_n_br = n_br;
			if(data[i] == '\n')
			{
				n_br = n_br + 1;
			}
			
			if(old_n_br != n_br)
			{
				line_chars = '';
			}
			else
			{
				line_chars = line_chars + data[i];
			}
			
			datax = line_chars.length - 2;
			datay = n_br - 1;
			
			if
			(
				datax >= x1 &&
				datay >= y1 &&
				datax < x1 + n1 &&
				datay < y1 + n2
			)
			{
				data[i] = 'X';//chars_in_Sn[n_chars_in_Sn];
				console.log(data[i]);
				n_chars_in_Sn = n_chars_in_Sn + 1;
			}
			else
			{
				data = data + 'o';
			}
		}
		
		document.write(data);
		
	}
}