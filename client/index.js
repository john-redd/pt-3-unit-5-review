const API_BASE_URL = 'http://localhost:9000';

getPosts();

async function getPosts() {
  const { data } = await axios.get(`${API_BASE_URL}/api/posts`);

  addPostsToDOM(data);
}

function addPostsToDOM(posts) {
  const postsContainer = document.getElementById('posts-container');

  const postElements = posts
    .map((p) => {
      return `
      <div>
        <h2>${p.title}</h2>
        <p>${p.content}</p>
        <p>By: ${p.user.firstName} ${p.user.lastName}</p>
      </div>
    `;
    })
    .join('');

  postsContainer.innerHTML = postElements;
}
