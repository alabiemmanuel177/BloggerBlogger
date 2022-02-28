const APIurl = 'https://jsonplaceholder.typicode.com'
function postRequest(){      
        fetch(`${APIurl}/posts`)
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            var result = document.getElementById('cardholder')            
            response.forEach(element => {  
                    // console.log(element)
                result.appendChild(postDisplay(element))                                
        })
        })
    }
function postDisplay(element){
    const holder = `<a href="./post.html?postID=${element.id}&userID=${element.userId}" ><div class="commentCard">
        <p id= "postId"> ${element.id} </p>
        <a>Username</a>
        <h2 id='result'>
            ${element.title}
        </h2>
        <h3 id="stuff">
            ${element.body}
        </h3>
        <p class="posted-by">
            <span><a href="#">${element.name}</a> </span> 23 asked 5 secs ago
        </p>
    </div></a>`
return new DOMParser().parseFromString(holder, 'text/html').firstChild
}

function commentRequest(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postID = urlParams.get('postID')
    // console.log(postID);
    fetch(`${APIurl}/posts/${postID}/comments`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        // console.log(response)
        var result = document.getElementById('commentholder')
        response.forEach(element => {
            result.appendChild(commentDisplay(element))
            // console.log(element)
        })
    })
}

function commentDisplay(element){
    const commentholder = `<h3 class="Margin-style">${element.name}</h4>
    <h4 class="Margin-style2">${element.body}</h4>`
    return new DOMParser().parseFromString(commentholder, 'text/html').firstChild
}
function postPageRequest(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postID = urlParams.get('postID')
    fetch(`${APIurl}/posts/${postID}`)
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            var result = document.getElementById('postContent')
                result.appendChild(postPageDisplay(response))                                
        })
}
function postPageDisplay(element){
    const postPage = `<h3 style="margin-bottom: 20px;">${element.title}</h3>
    <h5>${element.body}</h5>`
    return new DOMParser().parseFromString(postPage, 'text/html').firstChild
}



