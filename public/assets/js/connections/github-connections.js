function getGitHubData(processData) {
    fetch('https://api.github.com/users/ArturColen')
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados da API do GitHub: ', error);
        });
}

function getGitHubRepositoriesData(processData) {
    fetch('https://api.github.com/users/ArturColen/repos')
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados da API do GitHub: ', error);
        });
}
