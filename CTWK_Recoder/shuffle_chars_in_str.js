let Shyffle_chars_in_str = (str) =>
{
    let idx = 0;
    let chr = '';
    let out_str = '';

    while(str.length > 0)
    {
        idx = Math.floor( Math.random() * str.length );
        chr = str[ idx ];
        str = str.replace( chr, '' );
        out_str += chr;
    }

    return out_str;
}