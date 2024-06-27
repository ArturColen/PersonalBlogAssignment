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
    let repositorySection = document.querySelector('#repository');
    const repository = githubRepositoriesData.find(
        (repo) => repo.id === parseInt(repositoryId)
    );

    if (repository) {
        console.log(repository);

        let createdAt = formatDate(new Date(repository.created_at));

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
                                            <span>3</span>
                                        </div>
                                    </div>
                                    <div class="information">
                                        <div class="data">
                                            <h6>Linguagens</h6>
                                            <p>HTML, CSS e JavaScript</p>
                                        </div>
                                        <div class="icon green">
                                            <i class="fa-solid fa-user"></i>
                                            <span>7</span>
                                        </div>
                                    </div>
                                    <div id="acess-link">
                                        <h6>Link de Acesso</h6>
                                        <p>
                                            <a
                                                href="https://github.com/ArturColen/Calculator"
                                                target="_blank"
                                                >https://github.com/ArturColen/Calculator</a
                                            >
                                        </p>
                                    </div>
                                    <div id="topics">
                                        <h6>Tópicos</h6>
                                        <div id="unit">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                            <span>Calculator</span>
                                            <span>Front-end</span>
                                        </div>
                                    </div>
                            `;
    }
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Add leading zero if day or month is less than 10
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    return `${day}/${month}/${year}`;
}