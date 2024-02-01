let draw = () =>
{
    let canvas = document.getElementById('idcanvas');
    if (canvas.getContext)
    {
        let ctx = canvas.getContext('2d');

        //remake chars from text

        let text = document.getElementById('text').value;
        let n_t = [];

        document.getElementById('numbers_of_chars').value = text.length;

        for(i = 0; i < text.length; i++)
        {
            n_t.push(text[i].charCodeAt(0).toString(10));
        }

        //make table with pxs-data

        let px_t = [];

        for(i = 0; i < n_t.length; i+=3)
        {
            px_t.push([n_t[i], n_t[i+1], n_t[i+2]]);
        }

        //corect size

        let size_v = size(px_t.length);

        canvas.height = size_v;
        canvas.width = size_v;
        
        //Draw check points

        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(0, 0, 3, 3);
        ctx.clearRect(1, 1, 1, 1);

        ctx.fillStyle = 'rgba(0, 255, 0, 1)';
        ctx.fillRect(canvas.width-3, 0, 3, 3);
        ctx.clearRect(canvas.width-2, 1, 1, 1);

        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
        ctx.fillRect(0, canvas.height-3, 3, 3);
        ctx.clearRect(1, canvas.height-2, 1, 1);
        
        //draw px-data to pxs

        let px_t_n = 0;

        for(j = 0; j < size_v; j++)
        {
            for(i = 0; i < size_v; i++)
            {
                if(j < 4 && i < 4 || j < 4 && i > size_v-5 || j > size_v-5 && i < 4)
                {
                    //if check-point
                }
                else if(px_t_n < px_t.length)
                {
                    ctx.fillStyle = 'rgb(' + px_t[px_t_n][0] + ', ' + px_t[px_t_n][1] + ', ' + px_t[px_t_n][2] + ')';
                    ctx.fillRect(i, j, 1, 1);
                    px_t_n++;
                }
                else if(px_t_n > px_t.length)
                {
                    break;
                }
            }
            if(px_t_n > px_t.length)
            {
                break;
            }
        }
    }
}
let size = (px_t_l) =>
{
    let x = 8;

    while(((x * x) - 48) < px_t_l)
    {
        x++;
    }
    return x;
}

let Download_img = () =>
{
    canvas = document.getElementById('idcanvas');
    
    var image1 = canvas.toDataURL("image/png");

    async function downloadImage(imageSrc)
    {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
    
        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    downloadImage(image1);
}


let onload_button = () =>
{
    document.getElementById('onload_div').innerHTML = '<input type="file" id="imageLoader" name="imageLoader"/>';
}
let Onload = () =>
{
    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('idcanvas');
    var ctx = canvas.getContext('2d');

    function handleImage(e)
    {
        var reader = new FileReader();
        reader.onload = function(event)
        {
            var img = new Image();
            img.onload = function()
            {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
}
