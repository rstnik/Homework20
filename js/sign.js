document.getElementById("btn").addEventListener("click", (event) => {
  const email = document.forms[0].email.value;
  const password = document.forms[0].password.value;
  const name =
    document.forms[0].firstName.value + " " + document.forms[0].lastName.value;
  const dateOfBirth = document.forms[0].dateOfBirth.value;
  const gender = document.forms[0].gender.value;
    const city = document.forms[0].city.value;
    const address = document.forms[0].address.value;
  const languages = [];

  document.forms[0].languages.forEach((language) => {
    if (language.checked) {
      languages.push(language.value);
    }
  });

  const dataUser = {
    email,
    password,
    name,
    dateOfBirth,
    gender,
    languages,
    city,
    address
  };
  const queryString = new URLSearchParams(dataUser).toString();
  window.location.href = `userInfo.html?${queryString}`
});


