let A = (step) =>
{
	document.body.innerHTML = '';

    let r;
    let g;
    let b;
    let out = [];

    for(i = 0; i < 256; i += step)
    {
        for(j = 0; j < 256; j += step)
        {
            for(k = 0; k < 256; k += step)
            {
                r = i.toString(16);
                g = j.toString(16);
                b = k.toString(16);

                if(r.length == 1)
                {
                    r = '0' + r;
                }
                if(g.length == 1)
                {
                    g = '0' + g;
                }
                if(b.length == 1)
                {
                    b = '0' + b;
                }
                
                out.push('#' + r + g + b);
            }
        }
    }
    return out;
}

let points = 6;
let step = parseInt( 256 / points );

let rgb1 = A(step);

for(i = 0; i < rgb1.length; i++)
{
	document.body.innerHTML += '<div style="float:left;width: 20px;height: 20px; background-color:' + rgb1[i] + ';"> </div>';
}

console.log(rgb1.toString(''));
