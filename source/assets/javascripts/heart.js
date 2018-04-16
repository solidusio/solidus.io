window.onload = function() {

  heart = document.querySelector('.heart')

  function addAnimation() {
    heart.classList.add('animate-heart')
    heart.removeEventListener('animationiteration', removeAnimation);
    heart.removeEventListener('webkitAnimationIteration', removeAnimation);
  }

  function removeAnimation() {
    heart.classList.remove('animate-heart')
    heart.removeEventListener('animationiteration', removeAnimation);
    heart.removeEventListener('webkitAnimationIteration', removeAnimation);
  }

  function removeAnimationAfterCurrentIteration () {
    heart.addEventListener('animationiteration', removeAnimation);
    heart.addEventListener('webkitAnimationIteration', removeAnimation);
  }

  heart.addEventListener("mouseover", addAnimation);
  heart.addEventListener("mouseleave", removeAnimationAfterCurrentIteration);
}
