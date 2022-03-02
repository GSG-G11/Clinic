const form = document.querySelector('.form');
const fullName = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const address = document.querySelector('.address-input');
const date = document.querySelector('.date-input');
const time = document.querySelector('.time-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(
    fullName.value,
    phone.value,
    address.value,
    date.value,
    time.value
  );
  fetch('/postData', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name: fullName.value,
      phone: phone.value,
      address: address.value,
      date: date.value,
      time: time.value,
    }),
  });
});
