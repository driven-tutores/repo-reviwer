import axios from "axios"

const base_url = 'https://api.github.com';

const githubApi = axios.create({
    baseURL: base_url
});

interface RepoURI{
    owner: string;
    name: string;
}

const fork = (repo: RepoURI) => {

    return githubApi.get(`/repos/${repo.owner}/${repo.name}`);
}

export {
    fork
};