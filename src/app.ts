import { request as githubApi } from "@octokit/request";
import { fork } from "./Services/GithubApi"
import shell from 'shelljs';

console.log('roi')

const res = shell.exec('git status', {silent: false}, ()=> {
    console.log('aoba')
});

// console.log(res);


// githubApi('GET /repos/{owner}/{repo}', {
//     owner: 'galdo0139',
//     repo: 'NodeTask'
// }).then(res => {
//     console.log('oi', res);
// })

// fork({owner: 'galdo0139', name: 'NodeTask'}).then(res => {
//     console.log(res.data);
// })