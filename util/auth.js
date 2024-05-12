import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com",
});

const API_KEY = "AIzaSyBljih-jTzaQe9KvfA8clALhEPb2ANA6dw";

async function authenticate(mode, email, password) {
  const url = `/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await instance.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
