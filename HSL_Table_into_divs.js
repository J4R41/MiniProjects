function HSLCombinations(h,s,l)
{
	let HSL = [ HCombinations(h), SLCombinations(s), SLCombinations(l)];

	for(i = 0; i < 3; i++)
	{
		if( HSL[i].indexOf('Symetric') != -1 )
		{
			HSL[i].splice(HSL[i].indexOf('Symetric'), 1);
		}
	}

	let out = [];

	for(i = 0; i < HSL[1].length; i++)
	{
		for(j = 0; j < HSL[2].length; j++)
		{
			for(k = 0; k < HSL[0].length; k++)
			{
				out += ( '<div style="float:left; width:' + 100/h + '%; height:' + 100/l + '%; background-color: HSL(' + HSL[0][k] + ', ' + HSL[1][i] + '%, ' + HSL[2][j] + '%);"> </div>' );
			}
		}
	}

	out += '<br>';

	return out;
}
function HCombinations(nOfPoints)
{
	if( nOfPoints < 1 || nOfPoints > 360)
	{
		return 'Error';
	}

	let step = parseInt( 360 / nOfPoints );
	let n = 0;
	let out = [];

	while(n < 360)
	{
		out.push(n);
		n += step;
		if(n == 360)
		{
			out.push('Symetric');
			break;
		}
	}
	return out;
}
function SLCombinations( nOfPoints )
{
	let out = [];

	if( nOfPoints < 1 || nOfPoints > 101 )
	{
		return 'Error';
	}
	else if( nOfPoints == 1 )
	{
		out.push(100);
		return out;
	}

	let step = parseInt( (( 101 - nOfPoints ) / ( nOfPoints - 1 )) + 1 );
	let n = 0;

	while( n < 100 )
	{
		out.push(n);
		n += step;
		if( n == 100 )
		{
			out.push(100);
			out.push('Symetric');
			break;
		}
	}
	return out;
}
document.write( HSLCombinations(36,10,10) );