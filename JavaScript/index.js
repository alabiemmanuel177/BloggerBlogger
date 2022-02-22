function request(){      
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            var result = document.getElementById('cardholder')            
            response.forEach(element => {  
                    // console.log(element)
                result.appendChild(cardHolder(element))                                
        })
        })
    }
function cardHolder(element){
    const holder = `<div class="commentCard">
        <p> ${element.id} votes 0 answers 2views</p>
        <h2 id='result'>
            ${element.title}
        </h2>
        <h3 id="stuff">
            ${element.body}
        </h3>
        <p class="posted-by">
            <span><a href="#">${element.name}</a> </span> 23 asked 5 secs ago
        </p>
    </div>`
return new DOMParser().parseFromString(holder, 'text/html').firstChild
}
