let posts = []
let searchAll = "" 

function addPost() {
    const titleInput = document.getElementById('titleInput')
    const contentInput = document.getElementById("contentInput")

    if (titleInput.value && contentInput.value) {
        const post = {
            id: Date.now(),  
            title: titleInput.value,
            content: contentInput.value,
            date: new Date().toLocaleDateString('kk-kz'),
        }
        posts.push(post)  
        renderPosts()

        titleInput.value = ""  
        contentInput.value = ""
    }
}
function renderPosts() {
    const blogPostDiv = document.getElementById('blogPosts')
    blogPostDiv.innerHTML = ''  

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchAll.toLowerCase()))

    filteredPosts.forEach(post => {
        const postDiv = document.createElement('div')
        postDiv.className = 'post'
        postDiv.innerHTML = `
            <h2>${post.title}</h2>  
            <p>${post.content}</p>
            <small>${post.date}</small>
            <button onclick="editPost(${post.id})" class="button" style="background-color: orange;">Өндеу</button>
            <button onclick="removePost(${post.id})" class="button" style="background-color: red;">Жою</button> 
        `
        blogPostDiv.appendChild(postDiv)
    })
}

document.getElementById('addPostBtn').addEventListener('click', addPost)

document.getElementById('searchBtn').addEventListener('click', function() {
    searchAll = document.getElementById('searchInput').value; 
    renderPosts();  
})

function removePost(id) {
    posts = posts.filter(post => post.id !== id) 
    renderPosts()  
}

function editPost(id) {
    const post = posts.find(post => post.id === id)

    document.getElementById('titleInput').value = post.title
    document.getElementById('contentInput').value = post.content
    removePost(id) 
}
