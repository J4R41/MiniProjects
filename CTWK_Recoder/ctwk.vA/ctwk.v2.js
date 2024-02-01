/*
	made second key that recode text by key of key like key^(n)

	explenation with coding '0123456789'

	Data:
		text: 12
		key: 34
		key power to the: 5
	calculations:
		recode 12 with 34 return x1
		recode 34 with 34 return k1
		recode x1 with k1
		//so one 5 times
	calculations in another words:
		recode text with key return retext1
		recode key with key return key^2
		recode retext1 with key^2 return
*/
function recode()
{
	let intext = document.getElementById("intext").value;
	let pn_n = document.getElementById("pn_n").value;
	let inkey = document.getElementById("inkey").value;
	let admin = document.getElementById("admin").value;
	
	if(intext == '')
	{
		alert('!type recode text');
	}
	else if(pn_n == '')
	{
		alert('!chose in/out code');
	}
	else if(inkey == '')
	{
		alert('!type recode key');
	}
	
	let pass = 0;
	if(admin == '1')
	{
		pass = 1;
	}
	else if(admin == '2')
	{
		pass = 2;
	}
	
	if(pass == 1)
	{
		console.log('password corect:\n');
		console.log('intext:' + intext + '\n');
		console.log('pn_n:' + pn_n + '\n');
		console.log('inkey:' + inkey + '\n');
		console.log('------ ------ ------ ------');
	}
	
	let l_d = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ '; //'0123456789abcdefghijklmnopqrstuvwxyz';
	let n;
	let key;
	let answer = '';
	
	if(pass == 1 || pass == 2)
	{
		console.log('l_d.lengt:' + l_d.length + '\nl_d:\n' + l_d);
		console.log('------ ------ ------ ------');
	}
	
	for(let i = 0; i < intext.length; i++)
	{
		n = find_char_to_n(intext[i],l_d);
		if(pass == 1)
		{
			console.log('====== ====== ====== ======');
			console.log('i:' + i);
			console.log('n = find_char_to_n(intext[i],l_d);:\n');
			console.log('n:' + n);
			console.log('intext[i]:' + intext[i]);
			console.log('l_d:' + l_d);
			console.log('------ ------ ------ ------');
		}
		
		key = find_char_to_n(inkey[i%inkey.length],l_d);
		if(pass == 1)
		{
			console.log('i:' + i);
			console.log('key = find_char_to_n(inkey[i%inkey.length],l_d);:\n');
			console.log('key:' + key);
			console.log('inkey[i%inkey.length]:' + inkey[i%inkey.length]);
			console.log('i:' + i);
			console.log('inkey.length:' + inkey.length);
			console.log('l_d:' + l_d);
			console.log('------ ------ ------ ------');
		}
		
		answer += number_alpha(n_plus_key(n,key,pn_n,l_d),l_d);
		if(pass == 1)
		{
			console.log('i:' + i);
			console.log('answer += number_alpha(n_plus_key(n,key,pn_n,l_d),l_d);:\n');
			console.log('answer:' + answer);
			console.log('number_alpha(n_plus_key(n,key,pn_n,l_d),l_d):' + number_alpha(n_plus_key(n,key,pn_n,l_d),l_d));
			console.log('n_plus_key(n,key,pn_n,l_d):' + n_plus_key(n,key,pn_n,l_d));
			console.log('n:' + n);
			console.log('key:' + key);
			console.log('n:' + n);
			console.log('pn_n:' + pn_n);
			console.log('l_d:' + l_d);
			console.log('------ ------ ------ ------');
		}
		
		if(pass == 1 || pass == 2)
		{
			console.log(n + '(' + intext[i] + ') ' + pn_n + ' ' + key + '(' + inkey[i%inkey.length] + ') = ' + n_plus_key(n,key,pn_n,l_d) + '(' + number_alpha(n_plus_key(n,key,pn_n,l_d),l_d) + ')');
		}
		
		/*answer += n;
		if(pass == 1)
		{
			console.log('answer += n;:\n');
			console.log('answer:' + answer);
			console.log('n:' + n);
			console.log('------ ------ ------ ------');
		}*/
	}
	
	document.getElementById("outtext").value = answer;
}
function find_char_to_n(chr,l_d)
{
	for(let i = 0; i < l_d.length; i++)
	{
		if(l_d[i] == chr)
		{
			return i;
		}
	}
	return chr;
}
function n_plus_key(n,n_key,pn_n,l_d)
{
	if(pn_n == '+')
	{
		n = n + n_key;
	}
	else if(pn_n == '-')
	{
		n = n - n_key;
	}
	
	if(n >= l_d.length)
	{
		n = n % l_d.length;
	}
	while(n < 0)
	{
		n += l_d.length;
	}
	
	return n;
}
function number_alpha(n,l_d)
{	
	for(let i = 0; i < l_d.length; i++)
	{
		if(i == n)
		{
			return l_d[i];
		}
	}
	
	return i;
}
// html codes
// !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
