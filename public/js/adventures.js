function getAllAdventures() {
    const output = document.querySelector('.adventures');

    fetch('/api/adventures')
        .then(res => res.json())
        .then(adventures => {
            adventures.forEach(adventure => {
                output.insertAdjacentHTML('beforeend', `
                <article class="card">
                    <h3 class="card-header">${adventure.title}</h3>
                    <div class="card-body flex-row">
                        <p class="mr-5">Added By: ${adventure.username}</p>
                        <p>Added On: ${adventure.createdOn}</p>
                    </div>
                </article>
                `);
            })
        })
}