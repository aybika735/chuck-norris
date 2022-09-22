 function Chuck () {
   
        try{ const list = document.querySelector("#list");
        const button = document.querySelector('button');
        button.addEventListener('click', async function(){



        const res = await fetch('https://api.chucknorris.io/jokes/random ', {
            method: "GET",
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        const data = await res.json();

         
            const div = document.createElement('div');
            div.textContent = data.value;
            list.append(div); 
           
        })

        console.log(data.value);

    }catch(error){
        console.log(error);
    }
}

Chuck();
function refreshPage(){
    window.location.reload();
} 

