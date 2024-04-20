const params = new URLSearchParams(window.location.search);

const email = params.get("email");
const password = params.get("password");
const name = params.get("name");
const dateOfBirth = params.get("dateOfBirth");
const gender = params.get("gender");
const languages = params.get("languages") ? params.get("languages").split(",") : [];
const city = params.get("city");
const address = params.get("address");


document.getElementById("user-info").innerHTML = `
  <p>Email: ${email}</p>
  <p>Password: ${password}</p>
  <p>Name: ${name}</p>
  <p>Date of Birth: ${dateOfBirth}</p>
  <p>Gender: ${gender}</p>
  <p>Languages: ${languages.join(", ")}</p>
  <p>City: ${city}</p>
  <p>Address: ${address}</p>
`;
