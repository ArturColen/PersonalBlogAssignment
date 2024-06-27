function getSuggestedContent(processData) {
    fetch(
        'https://a25f6d67-4313-438f-a3c9-28bc62759a2f-00-3blersxcfx53d.janeway.replit.dev/suggestions'
    )
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do JSON Server: ', error);
        });
}

function getColleaguesData(processData) {
    fetch(
        'https://a25f6d67-4313-438f-a3c9-28bc62759a2f-00-3blersxcfx53d.janeway.replit.dev/colleagues'
    )
        .then((response) => response.json())
        .then((data) => {
            processData(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do JSON Server: ', error);
        });
}
