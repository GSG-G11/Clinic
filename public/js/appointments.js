
const table = document.querySelector("#appointments")
const elementCreator = (name) => document.createElement(name);

const elementWithValue = (name, value) => {
    const element = elementCreator(name);
    element.innerText = value;
    return element;
  };

  const appendElement = (parent, child) => {
    parent.appendChild(child);
  };

fetch('/getData')
  .then((res) => res.json()
    .then((appointments) => {
      appointments.forEach((element) => {
     const tr = elementCreator('tr')
     appendElement(table,tr)
 
      const fullName=elementWithValue('td',element.full_name)
      appendElement(tr,fullName)

      const phoneNumber=elementWithValue('td',element.phone_number)
      appendElement(tr,phoneNumber)

      const address=elementWithValue('td',element.address)
      appendElement(tr,address)

      const date=elementWithValue('td',element.date)
      appendElement(tr,date)

      const time=elementWithValue('td',element.time)
      appendElement(tr,time)
       

      });
    }));