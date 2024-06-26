import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com",
});

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function authenticate(mode, email, password) {
  const url = `/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await instance.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export default instance;
