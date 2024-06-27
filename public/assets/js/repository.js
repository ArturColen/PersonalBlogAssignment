let githubRepositoriesData = [];

document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    let repositoryId = getQueryParam('id');

    if (repositoryId) {
        getGitHubRepositoriesData((data) => {
            githubRepositoriesData = data;
            displayReposityData(repositoryId);
        });
    }
});

function displayReposityData(repositoryId) {
    let pageTitle = document.querySelector('title');
    let repositorySection = document.querySelector('#repository');
    const repository = githubRepositoriesData.find(
        (repo) => repo.id === parseInt(repositoryId)
    );

    pageTitle.innerHTML = `${repository.name} | Artur Bomtempo`;

    if (repository) {
        let createdAt = formatDate(new Date(repository.created_at));
        let topicsHTML = repository.topics
            .map((topic) => `<span>${topic}</span>`)
            .join('');

        repositorySection.innerHTML = `
            <h3 class="title mt">Repositório: ${repository.name}</h3>
            <div id="decription">
                <h6>Descrição</h6>
                <p>${repository.description}</p>
            </div>
            <div class="information">
                <div class="data">
                    <h6>Data de Criação</h6>
                    <p>${createdAt}</p>
                </div>
                <div class="icon grey">
                    <i class="fa-solid fa-star"></i>
                    <span>${repository.stargazers_count}</span>
                </div>
            </div>
            <div class="information">
                <div class="data">
                    <h6>Principal linguagem</h6>
                    <p>${repository.language}</p>
                </div>
                <div class="icon green">
                    <i class="fa-solid fa-user"></i>
                    <span>${repository.watchers_count}</span>
                </div>
            </div>
            <div id="acess-link">
                <h6>Link de Acesso</h6>
                <p>
                    <a href="${repository.html_url}" target="_blank">${repository.html_url}</a>
                </p>
            </div>
            <div id="topics">
                <h6>Tópicos</h6>
                <div id="unit">
                    ${topicsHTML}
                </div>
            </div>
        `;
    }
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    return `${day}/${month}/${year}`;
}
