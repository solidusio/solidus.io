function toggleCommitMessage(el) {
  commitMsg = findAncestor(el, "commit").querySelector(".commit-message");
  commitMsg.classList.toggle("hide");
}

function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}
