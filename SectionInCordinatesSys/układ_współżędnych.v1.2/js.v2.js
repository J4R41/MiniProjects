let xtab = [];
let ytab = [];
let n_p = 0;

function main()
{
	let tab_size = 25;
	
	let tab_2d = [tab_size];
	
	for(let i = 0; i < tab_size; i++)
	{
		tab_2d[i] = [tab_size];
	}
	
	document.write('<style>* { color: #6400ff; background-color: black; line-height: 0.7; } </style>');
	
	for(let i = 0; i < tab_size; i++)
	{
		for(let j = 0; j < tab_size; j++)
		{
			if(i == 12 && j == 12)
			{
				tab_2d[i][j] = '1';
			}
			else if(i == 12)
			{
				tab_2d[i][j] = '2';
			}
			else if(j == 12)
			{
				tab_2d[i][j] = '3';
			}
			else
			{
				tab_2d[i][j] = '0';
			}
			
			document.write(tab_2d[i][j]);
		}
		document.write('<br>');
	}
	
}
