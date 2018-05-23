const COMMIT_COUNT = 10;
const SOLIDUS_URL = 'http://github.com/solidusio/solidus'

function populateCommits() {
  let json = JSON.parse(sessionStorage.getItem('github_json'));
  let template = document.querySelector('.commit-template').content;
  let commitList = document.querySelector('.commit-list');

  for (let i=0; i<COMMIT_COUNT; i++) {
    let commit = template.cloneNode(true);
    let commit_json = json[i]

    setTitle(commit, commit_json);
    setAuthorElements(commit, commit_json);
    setRelativeTime(commit, commit_json);
    setSHA(commit, commit_json);
    setCodeLink(commit, commit_json);
    setCommitMessage(commit, commit_json);
    setVerifiedText(commit, commit_json);
    setClipboardData(commit, commit_json);

    commitList.appendChild(commit);
  }
  new ClipboardJS('.clipboard');
}

function setClipboardData(commit, commit_json) {
  commit.querySelector('.clipboard').setAttribute('data-clipboard-text', commit_json['sha']);
}

function setVerifiedText(commit, commit_json) {
  if (!commit_json["commit"]["verification"]["verified"]) {
    commit.querySelector('.verified').style.display = 'none';
  }
}

function setCommitMessage(commit, commit_json) {
  let commitMessage = commit_json["commit"]["message"].split('\n\n')[1];
  if (commitMessage) {
    commit.querySelector('.commit-message').innerHTML = commitMessage;
  } else {
    commit.querySelector('.ellipsis-container').remove();
  }
}

function setCodeLink(commit, commit_json) {
  commit.querySelector('.code-link').href = commit_json["html_url"].replace('commit', 'tree');
}

function setSHA(commit, commit_json) {
  commit.querySelector('.sha').innerHTML = commit_json["sha"].substring(0,7);
  commit.querySelector('.sha').href = commit_json["html_url"];
}

function setRelativeTime(commit, commit_json) {
  commit.querySelector('.relative-time').innerHTML = moment(commit_json['commit']['author']['date']).fromNow();
}

function setAuthorElements(commit, commit_json) {
  commit.querySelector('.commit-author').innerHTML = commit_json["author"]["login"];
  commit.querySelector('.commit-author').title = "View all commits by " + commit_json["author"]["login"];
  commit.querySelector('.commit-author').href = SOLIDUS_URL + "/commits?author=" + commit_json["author"]["login"];
  commit.querySelector('.avatar img').setAttribute("src", commit_json["author"]["avatar_url"]);
  commit.querySelector('.avatar-link').href = commit_json["author"]["html_url"];
}

function setTitle(commit, commit_json) {
  if ((commit_json['committer']['login'] === 'web-flow') && commit_json['commit']['message'].startsWith('Merge')) {
    setWebFlowTitle(commit, commit_json);
    commit.querySelector('.user-commit').remove();
  } else {
    setUserTitle(commit, commit_json);
    commit.querySelector('.web-flow-commit').remove();
  }
}

function setUserTitle(commit, commit_json) {
  commit.querySelector('.user-commit a').innerHTML = commit_json["commit"]["message"].split('\n\n')[0];
  commit.querySelector('.user-commit a').href = commit_json["html_url"];
  commit.querySelector('.user-commit a').title = commit_json["commit"]["message"];
}

function setWebFlowTitle(commit, commit_json) {
  let issueRegex = /#[0-9]+/;
  let issue = issueRegex.exec(commit_json["commit"]["message"])[0];

  commit.querySelector('.action').innerHTML = commit_json["commit"]["message"].split(issue)[0];
  commit.querySelector('.action').title = commit_json["commit"]["message"];
  commit.querySelector('.action').href = commit_json["html_url"];

  commit.querySelector('.issue').innerHTML = issue;
  commit.querySelector('.issue').href = SOLIDUS_URL + "/pull/" + issue.substring(1);

  commit.querySelector('.branch').innerHTML = commit_json["commit"]["message"].split(issue)[1].split('\n\n')[0];
  commit.querySelector('.branch').title = commit_json["commit"]["message"];
  commit.querySelector('.branch').href = commit_json["html_url"];
}

function toggleCommitMessage(el) {
  commitMsg = findAncestor(el, "commit").querySelector(".commit-message");
  commitMsg.classList.toggle("hide");
}

function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

let http = new XMLHttpRequest();
http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    sessionStorage.setItem('github_json', this.responseText);
    populateCommits();
  }
}
http.open('GET', 'https://api.github.com/repos/solidusio/solidus/commits', true);

if (sessionStorage.getItem('github_json') ===  null) {
  http.send();
} else {
  populateCommits();
}
