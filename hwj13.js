let p=new Promise(function(resolve,reject)
{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',this)
    xhr.send();
    xhr.onload=function()
    {
        console.log(xhr);
        if(xhr.statusText=="")resolve(xhr.responseText);
        else reject("something went wrong!!!");
    }
});
p.then(function(data)
{
    console.log(data);
}).catch(function(err)
{
    console.log(err);
})