import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com",
});

const API_KEY = "AIzaSyBljih-jTzaQe9KvfA8clALhEPb2ANA6dw";

export async function createUser(email, password) {
  const response = await instance.post(`v1/accounts:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
}
