var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', insertContact);
btn2.addEventListener('click', insertCards);

const profile = document.getElementById('profile');
const contact1 = document.getElementById('contact1');

// profile.style.display = "none";
// contact1.style.display = "none";

function insertContact() {
  // profile.style.display = "none";
  // contact1.style.display = "";
  contact1.scrollIntoView ({
    behavior: 'smooth'
  });
}

function insertCards() {
  // contact1.style.display = "none";
  // profile.style.display = "";
  profile.scrollIntoView ({
    behavior: 'smooth'
  });
}
