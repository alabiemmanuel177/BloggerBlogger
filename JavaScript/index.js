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
        <p id= "postId" > ${element.id} </p>
        <a>Username</a>
        <h2 id='result'style="text-transform: uppercase;>
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
    const postPage = `<h3 style="margin-bottom: 20px; text-transform: uppercase;"><a href="">${element.title}</a></h3>
    <h5>${element.body}</h5>`
    return new DOMParser().parseFromString(postPage, 'text/html').firstChild
}

function getUserInfo(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userID = urlParams.get('userID')
    // console.log(userID)
    fetch(`${APIurl}/users/${userID}`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        // console.log(response)
        var result = document.getElementById('userName')
                result.appendChild(displayInfo(response))                                
        })
}

function displayInfo(element){
    const infoPage = ` <h4>${element.name}</h4>
    <h4>${element.username}</h4>
    <h4>${element.email}</h4>`
    return new DOMParser().parseFromString(infoPage, 'text/html').firstChild
}

 function albumPageRequest(){
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     const userID = urlParams.get('userID')
    
    //  console.log(userID)
   fetch(`${APIurl}/users/${userID}/albums`)
     .then(function(response){
        return response.json()
    })
    .then((response) => {
        // console.log(response)
        var result = document.getElementById('album-body')
        // console.log(response)
        response.forEach(element => {
                result.appendChild(albumPageDisplay(element))                                
        })
    })
}

function albumPageDisplay(element){
     const AlbumPage = `<div class="album-card-1"style="text-transform: uppercase;"><a href="">${element.title}</a></div>`
     return new DOMParser().parseFromString(AlbumPage, 'text/html').firstChild
 }
function pass_album(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userID = urlParams.get('userID')
    // console.log(userID)
    fetch(`${APIurl}/users/${userID}`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        console.log(response)
        var result = document.getElementById('btn-spc')
                result.appendChild(albumURL(response))                                
        })
   
}
 function albumURL(element){
     const albUrl= `<hr>
     <a href="./album.html?userID=${element.id}"><button class="btn-lenght">Album</button></a>`
     return new DOMParser().parseFromString(albUrl, 'text/html').firstChild

 }



