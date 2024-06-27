let githubData = [];
let githubRepositoriesData = [];
let suggestedContent = [];
let colleaguesData = [];

getGitHubData((data) => {
    githubData = data;
    displayProfileData();
});

getGitHubRepositoriesData((data) => {
    githubRepositoriesData = data;
    displayRepositories();
});

getSuggestedContent((data) => {
    suggestedContent = data;
    displaySuggestedContent();
});

getColleaguesData((data) => {
    colleaguesData = data;
    displayColleaguesData();
});

function displayProfileData() {
    let profileContent = document.querySelector('#about #content');

    profileContent.innerHTML = `
                                    <div id="photo">
                                        <img src="${githubData.avatar_url}" alt="${githubData.name}" />
                                    </div>
                                    <div id="information">
                                        <div id="description">
                                            <h6>${githubData.name}</h6>
                                            <p>${githubData.bio}</p>
                                        </div>
                                        <div class="social">
                                            <div class="info" id="info-left">
                                                <p>
                                                    <span>Location:</span> ${githubData.location}
                                                </p>
                                                <p>
                                                    <span>Site:</span>
                                                    <a
                                                        href="${githubData.blog}"
                                                        target="_blank"
                                                        >${githubData.blog}</a
                                                    >
                                                </p>
                                            </div>
                                            <div class="info" id="info-right">
                                                <div id="number">
                                                    <i class="fa-solid fa-user"></i>
                                                    <span>${githubData.followers}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="social" id="icons">
                                            <a
                                                href="https://www.linkedin.com/in/artur-bomtempo"
                                                target="_blank"
                                            >
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a
                                                href="${githubData.html_url}"
                                                target="_blank"
                                            >
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                            <a
                                                href="https://www.instagram.com/artur.bomtempo"
                                                target="_blank"
                                            >
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                `;
}

function displayRepositories() {
    let repositoriesNumber = document.querySelector('#repositories-number');
    let allRepositories = document.querySelector(
        '#repositories #repository-cards'
    );

    repositoriesNumber.innerHTML = `Repositórios (${githubData.public_repos})`;

    allRepositories.innerHTML = '';

    for (let i = 0; i < githubRepositoriesData.length; i++) {
        allRepositories.innerHTML += `
                                    <a href="./pages/repo1.html">
                                        <div class="card" style="width: 18rem">
                                            <img
                                                class="card-img-top"
                                                src="./assets/img/repositories/default-image.webp"
                                                alt="Imagem do card de repositórios"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title">${githubRepositoriesData[i].name}</h5>
                                                <div class="card-content">
                                                    <div class="card-information grey">
                                                        <i class="fa-solid fa-star"></i>
                                                        <span>${githubRepositoriesData[i].stargazers_count}</span>
                                                    </div>
                                                    <div class="card-information green">
                                                        <i class="fa-solid fa-user"></i>
                                                        <span>${githubRepositoriesData[i].watchers_count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                `;
    }
}

function displaySuggestedContent() {
    let suggestionSlide = document.querySelector('.carousel-inner');

    suggestionSlide.innerHTML = '';

    for (let i = 0; i < suggestedContent.length; i++) {
        suggestionSlide.innerHTML += `
                                    <div class="carousel-item ${
                                        i === 0 ? 'active' : ''
                                    }">
                                        <iframe
                                            src="${
                                                suggestedContent[i].contentUrl
                                            }"
                                            title="${suggestedContent[i].title}"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                        >
                                        </iframe>
                                    </div>
                                `;
    }
}

function displayColleaguesData() {
    let colleaguesSection = document.querySelector('#colleagues #people');

    colleaguesSection.innerHTML = '';

    for (let i = 0; i < colleaguesData.length; i++) {
        colleaguesSection.innerHTML += `
                                    <div id="person">
                                        <img
                                            src="${colleaguesData[i].colleaguePhoto}"
                                            alt="Foto de ${colleaguesData[i].colleagueName}"
                                        />
                                        <a href="${colleaguesData[i].colleagueProfile}" target="_blank"><p>${colleaguesData[i].colleagueName}</p></a>
                                    </div>
                                `;
    }
}
