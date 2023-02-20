const requ=new XMLHttpRequest();
requ.open('GET','https://restcountries.com/v3.1/all');
requ.send();
requ.onload = () =>{
    if((requ.status=200)){
        let res=JSON.parse(requ.response);
        res.map((data)=>{
            // console.log(data)
            //console.log(data.flags.png)
            console.log(data.currencies)

        });
    }
    else{
        console.log("ERR")
    }
}
