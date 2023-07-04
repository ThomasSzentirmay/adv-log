const form = document.querySelector('#adventure-form');
const logoutBtn = document.querySelector('.logout');

function getUser() {
    return JSON.parse(localStorage.getItem('adventure_user'));
}

function handleSubmit(e) {
    e.preventDefault();

    const titleInput = document.querySelector('#title-input');
    const locationInput = document.querySelector('#location-input');
    const user = getUser();

    fetch('/api/adventure', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleInput.value,
            location: locationInput.value,
            user_id: user.id
        })
    }).then(() => window.location.reload());
}

function getAdventures() {
    const user = getUser();
    const output = document.querySelector('.adventures');

    fetch(`/api/adventures/${user.id}`)
        .then(res => res.json())
        .then(adventures => {

            if(!adventures.length) output.innerHTML = '<p>No Adventures Have Been Added.</p>';

            adventures.forEach(adventure => {
                output.insertAdjacentHTML('beforeend', `
                <article class="card">
                    <h3 class="card-header">${adventure.title}</h3>
                    <div class="card-body flex-row">
                        <p class="mr-5">Added By: You</p>
                        <p>Added On: ${adventure.createdOn}</p>
                    </div>
                </article>
                `)
            })
        })
}

function logout() {
    e.preventDefault();

    localStorage.removeItem('adventure_user');
    window.location = '/adventures';
}

function isAuthenticated() {
    const user = localStorage.getItem('adventure_user');

    if (!user) window.location = '/login';
}

isAuthenticated();
getAdventures();
logoutBtn.addEventListener('click', logout);
form.addEventListener('submit', handleSubmit);