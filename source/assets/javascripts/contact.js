function validateForm() {
  let nameElement = document.querySelector('#inputName');
  let emailElement = document.querySelector('#inputEmail');
  let messageElement = document.querySelector('#inputMessage');

  return (nameElement.checkValidity() && emailElement.checkValidity() && messageElement.checkValidity())
}

let displaySuccessMessage = function() {
  document.querySelector('.contact-form fieldset').classList.add('hide');
  document.querySelector('.contact-form-success').classList.remove('hide');
};

let displayErrorMessage = function() {
  document.querySelector('.contact-form fieldset').classList.add('hide');
  document.querySelector('.contact-form-error').classList.remove('hide');
};

let sendToContactService = function(url, data) {
  let http = new XMLHttpRequest();
  http.open('POST', url, true);

  http.setRequestHeader("Accept", "application/json");
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onload = function(a) {
    if (http.status === 200) {
      displaySuccessMessage();
    } else {
      displayErrorMessage();
    }
  };

  http.send(data);
};

let onSubmitContactForm = function(e) {
  e.preventDefault();
  let data = `\
&email=${this.elements.namedItem('inputEmail').value}\
&message=${encodeURIComponent(this.elements.namedItem('inputMessage').value)}\
&_subject=${this.elements.namedItem('inputName').value} Contacted Solidus
`;
  let url = e.target.action;

  if (validateForm()) {
    sendToContactService(url, data);
  };
};

let contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', onSubmitContactForm);
}
