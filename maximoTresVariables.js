var barbijo;
var jabon;
var alcohol;


// barbijo=1;
// jabon=2;
// alcohol=3;


// barbijo=3;
// jabon=2;
// alcohol=1;


// barbijo=2;
// jabon=3;
// alcohol=1;

// barbijo=2;
// jabon=3;
// alcohol=1;


// COMO SE HACE !!!!!!!!!!!!!
if(jabon>alcohol && jabon>barbijo)
{
    alert("jabon "+jabon);
}
else
{
    if(barbijo>alcohol)
    {
        alert("barbijo "+barbijo);
    }
    else
    {
        alert("alcohol "+alcohol);
    }
}



// COMO NO SE HACE !!!!!!!!!!!!
if(alcohol>barbijo)
{
    if(alcohol>jabon)
    {
        // alcohol 
        alert("alcohol "+ alcohol);
    }
    else// if(jabon>=alcohol)
    {
        // jabon
        alert("jabon "+ jabon);
    }
}
else// if(barbijo>=alcohol)
{
    if(barbijo>jabon)
    {
        //barbijo
        alert("barbijo"+ barbijo);
    }
    else// if(jabon>=barbijo)
    {
        // jabon
        alert("jabon "+ jabon);
    }
}

