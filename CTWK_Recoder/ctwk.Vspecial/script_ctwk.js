let Get_data_ = () =>
{
	let txt = document.getElementById("txt").value;
	let key = document.getElementById("key").value;
	let in_out_code = document.getElementById("in_out_code").value;

	if(txt == '')
	{
		alert('!type text');
	}
	else if(key == '')
	{
		alert('!type key');
	}

	document.getElementById("outxt").innerHTML = Recode( txt, key, in_out_code );
}
let Recode = ( txt, key, in_out_code ) =>
{
	let chrs = '-"|+gD;8k=r\\u~#>YC]6bl\'@E57axcKhe4t`UJV$*iv39SZ&wI^<0(H{yB!_?jQ/T}Fo:pM,O2zNqL [ndPs.G)%fXmW1AR';
	let out_idx = [];

	for(i = 0; i < txt.length; i++)
	{
		if(in_out_code == '+')
		{
			out_idx.push( chrs.indexOf(txt[i]) + chrs.indexOf(key[ i % key.length ]) );
		}
		else if(in_out_code == '-')
		{
			out_idx.push( chrs.indexOf(txt[i]) - chrs.indexOf(key[ i % key.length ]) );
		}
		//here can be added * / ^ coding options
	}

	let out = '';

	for(i = 0; i < out_idx.length; i++)
	{
		while(out_idx[i] < 0)
		{
			out_idx[i] += chrs.length;
		}
		out_idx[i] = out_idx[i] % chrs.length;
		out += chrs.charAt(out_idx[i]);
	}

	return out;
}
/*
	html codes

 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
*/