const form = document.querySelector('.form');
const fullName = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const address = document.querySelector('.address-input');
const date = document.querySelector('.date-input');
const time = document.querySelector('.time-input');
const patientForm = document.querySelector('#new-patient');
const dataList = document.querySelector('.data-list');
const patientName = document.querySelector('.input-patient');

patientName.addEventListener('change', () => {
  console.log(patientName.value);
});
fetch('/getPatient').then((res) =>
  res.json().then((patients) => {
    console.log(patients);
    patients.forEach((element) => {
      const name = elementWithValue('option', element.full_name);
      appendElement(dataList, name);
    });
  })
);

patientForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('/postPatient', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name: fullName.value,
      phone: phone.value,
      address: address.value,
    }),
  });
  window.location.href = '/';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/postData', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      date: date.value,
      time: time.value,
    }),
  });
});
