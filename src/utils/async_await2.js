const loadData = async () =>{
    try{
        const url = 'http://localhost:3001/campsites';
        
        const res = await fetch(url);
        console.log(res.ok)
        const data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}