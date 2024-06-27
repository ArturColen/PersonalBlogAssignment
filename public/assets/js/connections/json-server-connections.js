function getSuggestedContent(processData) {
    fetch('/suggestions')
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do JSON Server: ', error);
        });
}

function getColleaguesData(processData) {
    fetch('/colleagues')
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do JSON Server: ', error);
        });
}
