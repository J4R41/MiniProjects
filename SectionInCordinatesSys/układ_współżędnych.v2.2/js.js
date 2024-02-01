let maxx = 25;
let maxy = 25;

let Data = []; //Data[y][x]

let Pn = []; // doda [n,x,y]
let xt = [];
let yt = [];

let Sn = []; //doda [n,x,y,width,height]

let n_of_P = 0;

let main_test = 0;

function add()
{
	let x = parseInt(document.getElementById('x_of_point').value);
	let y = parseInt(document.getElementById('y_of_point').value);
	n_of_P = n_of_P + 1;
	
	Pn.push([n_of_P,x,y]);
	xt.push(x);
	yt.push(y);
	
	let output_points = Pn.map(e => e.join(',')).join('\n');
	
	document.getElementById('points').value = output_points;
	
	document.getElementById('x_of_point').value = '';
	document.getElementById('y_of_point').value = '';
}
function test()
{
	maxx = 30;
	maxy = 15;
	
	Pn.push([0,20,5]);
	xt.push(20);
	yt.push(5);
	
	Pn.push([0,10,10]);
	xt.push(10);
	yt.push(10);
	
	n_of_P = 3;
	
	main();
}
function main_test_f()
{
	if(main_test == 1)
	{
		alert('You can\'t change width/height if you are working on another project');
		document.getElementById('width').value = maxx;
		document.getElementById('height').value = maxy;
	}
}
function main()
{
	main_test = 1;
	
	if(document.getElementById('width').value != '')
	{
		maxx = parseInt(document.getElementById('width').value);
		maxx = maxx + 1;
	}
	if(document.getElementById('height').value != '')
	{
		maxy = parseInt(document.getElementById('height').value);
		maxy = maxy + 1;
	}
	
	for(let j = 0; j < maxy; j++)
	{
		Data.push([]);
		for(let i = 0; i < maxx; i++)
		{
			Data[j].push([]);
		}
	}
	
	for(let j = 0; j < maxy; j++)
	{
		for(let i = 0; i < maxx; i++)
		{
			if(i == 0 && j == 0)
			{
				Data[j][i] = '%';
			}
			else if(i == 0)
			{
				if(j % 10 == 0)
				{
					Data[j][i] = '═';
				}
				else
				{
					Data[j][i] = '║';
				}
			}
			else if(j== 0)
			{
				if(i % 10 == 0)
				{
					Data[j][i] = '║';
				}
				else
				{
					Data[j][i] = '═';
				}
			}
			else
			{
				Data[j][i] = if_point(i,j);
			}
		}
	}
	document.getElementById('data').innerHTML = Data.map(e => e.join('')).join('<br>');
}
function if_point(i,j)
{
	let foundi;
	let foundj;
	let k;
	let l;
	
	for(k = 0; k < xt.length; k++)
	{
		if(xt[k] == i)
		{
			foundi = true;
			break;
		}
	}
	for(l = 0; l < yt.length; l++)
	{
		if(yt[l] == j)
		{
			foundj = true;
			break;
		}
	}
	
	if(foundi && foundj)
	{
		if(k == l)
		{
			return '#';
		}
		return '┿';
	}
	else if(foundi)
	{
		return '│';
	}
	else if(foundj)
	{
		return '━';
	}
	else
	{
		return '.';
	}
}
function type_sections()
{
	document.getElementById('sectionst').value = '';
	
	if(Pn[Pn.length - 1][1] != maxx && Pn[Pn.length - 1][2] != maxy)
	{
		n_of_P = n_of_P + 1;
		Pn.push([n_of_P,maxx,maxy]);
		xt.push(maxx);
		yt.push(maxy);
	}
	
	if(Pn[0][1] != 0 && Pn[0][2] != 0)
	{
		Pn.reverse();
		xt.reverse();
		yt.reverse();
		
		Pn.push([0,0,0]);
		xt.push(0);
		yt.push(0);
		
		Pn.reverse();
		xt.reverse();
		yt.reverse();
	}
	
	let n_of_S = 0;
	let x = xt[0];
	let y = yt[0];
	
	while(y < maxy)
	{
		while(x < maxx)
		{
			n_of_S++;
			Sn.push([n_of_S,(x + 1),(y + 1),(find_in_t(x,'xt') - x - 1),(find_in_t(y,'yt') - y - 1)]);
			
			x = find_in_t(x,'xt');
		}
		x = xt[0];
		y = find_in_t(y,'yt');
	}
	
	document.getElementById('sectionst').value = Sn.map(e => e.join(',')).join('\n');
}
function find_in_t(n,xy)
{
	let found = false;
	let k = n;
	
	if(xy == 'xt')
	{
		while(!found)
		{
			k++;
			for(let i = 0; i < xt.length; i++)
			{
				if(xt[i] == k)
				{
					return xt[i];
					found = true;
				}
			}
		}
	}
	else //xy == 'yt'
	{
		while(!found)
		{
			k++;
			for(let i = 0; i < yt.length; i++)
			{
				if(yt[i] == k)
				{
					return yt[i];
					found = true;
				}
			}
		}
	}
	return 0;
}
function type_into_section()
{
	let text = document.getElementById('text_into_sn').value;
	let S_nr = document.getElementById('s_n').value;
	let color = document.getElementById('colorid').value;
	
	if(color =='')
	{
		color = '#8800ff';
	}
	
	if(text == '')
	{
		alert('Type text');
	}
	else if(S_nr == '')
	{
		alert('Type S number');
	}
	else
	{
		if(text.length > (Sn[S_nr - 1][3] * Sn[S_nr - 1][4]))
		{
			alert('In section nr: ' + S_nr + ' you can add max: ' + (Sn[S_nr - 1][3] * Sn[S_nr - 1][4]) + ' chars');
		}
		else
		{
			let n = 0;
			
			for(let i = 0; i < text.length; i++)
			{
				if(text[i] == ' ' || text[i] == '\n')
				{
					n++;
				}
			}
			
			while(text.length < (Sn[S_nr - 1][3] * Sn[S_nr - 1][4]))
			{
				text = text + '.';
			}
			
			let text_nth = 0;
			for(let j = 0; j < Sn[S_nr - 1][4]; j++)
			{
				for(let i = 0; i < Sn[S_nr - 1][3]; i++)
				{
					Data[Sn[S_nr - 1][2] + j][Sn[S_nr - 1][1] + i] = '<span style="color:' + color + ';">' + text[text_nth] + '</span>';
					text_nth++;
				}
			}
			document.getElementById('text_into_sn').value = text;
			document.getElementById('data').innerHTML = Data.map(e => e.join('')).join('<br>');
		}
	}
}
function max_chars()
{
	let text = document.getElementById('text_into_sn').value;
	let S_nr = document.getElementById('s_n').value;
	
	document.getElementById('n_of_chars').value = text.length + '/' + (Sn[S_nr - 1][3] * Sn[S_nr - 1][4]) + ' chars';
}