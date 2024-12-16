function getcountry()
{
    fetch('https://restcountries.com/v3.1/name/bharat').then
    (function(response)
    {
        console.log(response);
        return response.json();

    }).then(function(data)
    {
        console.log(data);
        return fetch('https://restcountries.com/v3.1/name/usa')
    }).then((res)=>
    {
        return res.json();
    }).then((data)=>
    {
        console.log(data);
        return fetch('https://restcountries.com/v3.1/name/uk').then
    }).then((res)=>
    {
        return res.json();
    }).then((data)=>
    {
        console.log(data);
    }).catch((err)=>
    {
        console.log(err)
    });
    }
    getcountry();
