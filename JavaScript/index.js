const APIurl = 'https://jsonplaceholder.typicode.com'
function getUserPost(){      
        fetch(`${APIurl}/posts`)
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            let result = document.getElementById('cardholder')            
            response.forEach(element => {  
                result.appendChild(displayUsersPost(element))                                
        })
        })
    }
function displayUsersPost(element){
    const holder = `<a href="./post.html?postID=${element.id}&userID=${element.userId}" ><div class="commentCard">
        <!--<p id= "postId" > ${element.id} </p>-->
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

function getPostComments(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postID = urlParams.get('postID')
    fetch(`${APIurl}/posts/${postID}/comments`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        let result = document.getElementById('commentholder')
        response.forEach(element => {
            result.appendChild(displayPostComments(element))
        })
    })
}

function displayPostComments(element){
    const commentholder = `
    <div class="Comments">
    <h3 class="Margin-style; "  style="text-transform: uppercase; margin-bottom:15px">${element.name}</h4>
    <h4 class="Margin-style2">${element.body}</h4>
    </div>`
    
    return new DOMParser().parseFromString(commentholder, 'text/html').firstChild
}
function getPostPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postID = urlParams.get('postID')
    fetch(`${APIurl}/posts/${postID}`)
        .then(function(response){
            return response.json()
        })
        .then((response) => {
            let result = document.getElementById('postContent')
                result.appendChild(displayPostPage(response))                                
        })
}
function displayPostPage(element){
    const postPage = `<h3 style="margin-bottom: 20px; text-transform: uppercase;"><a href="">${element.title}</a></h3>
    <h5>${element.body}</h5>`
    return new DOMParser().parseFromString(postPage, 'text/html').firstChild
}

function getUserInfo(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userID = urlParams.get('userID')
    fetch(`${APIurl}/users/${userID}`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        let result = document.getElementById('userName')
                result.appendChild(displayUserInfo(response))                                
        })
}

function displayUserInfo(element){
    const infoPage = `<h4>${element.name}</h4>
    <h4>${element.username}</h4>
    <h4>${element.email}</h4>`
    return new DOMParser().parseFromString(infoPage, 'text/html').firstChild
}

 function getUserAlbum(){
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     const userID = urlParams.get('userID')    
   fetch(`${APIurl}/users/${userID}/albums`)
     .then(function(response){
        return response.json()
    })
    .then((response) => {
        let result = document.getElementById('album-body')
        response.forEach(element => {
                result.appendChild(displayUserAlbum(element))                                
        })
    })
}

function displayUserAlbum(element){
     const AlbumPage = `<div class="album-card-1"style="text-transform: uppercase;"><a href="./photo.html?albumID=${element.id}&albumTitle=${element.title}">${element.title}</a></div>`
     return new DOMParser().parseFromString(AlbumPage, 'text/html').firstChild
    
     
 }
function getAlbum(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userID = urlParams.get('userID')
    fetch(`${APIurl}/users/${userID}`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        console.log(response)
        let result = document.getElementById('btn-spc')
                result.appendChild(passAlbumUrl(response))                                
        })
   
}
 function passAlbumUrl(element){
     const albUrl= `<hr>
     <a href="./album.html?userID=${element.id}&userName=${element.username}"><button class="btn-lenght">Album</button></a>`
     return new DOMParser().parseFromString(albUrl, 'text/html').firstChild
     }
function getAlbumUserName(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get('userName')
    console.log(userName)
    let result = document.getElementById('album-head1')
        result.append(`Welcome to ${userName}'s Album`)
}
function getPhoto(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const albumID = urlParams.get('albumID')
    fetch(`${APIurl}/albums/${albumID}/photos`)
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        let result = document.getElementById('photo-body')
        response.forEach(element => {
            result.appendChild(getPhotoURL(element))
        })                                                
        })
   
}
 function getPhotoURL(element){
     const holder= `
     <div class="photo-card-1" ><img src="${element.url}" width="400px" heigth="400px"></div>`
     return new DOMParser().parseFromString(holder, 'text/html').firstChild
     }


function getAlbumTitle(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const albumTitle = urlParams.get('albumTitle')
    let result = document.getElementById('Photo-title')
        result.append(`${albumTitle}`)
                                        
}

 function getPhotoTitle(element){
     const holder= `${element.title}`
    
     return new DOMParser().parseFromString(holder, 'text/html').firstChild
     }

