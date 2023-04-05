import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveAllTodosForUsername = (username, token) =>
  apiClient.get(`/users/${username}/todos`, {
    headers: {
      Authorization: token,
    },
  });

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (username, todo) =>
  apiClient.post(`users/${username}/todos`, todo);

export const executeBasicAuthenticationService = (token) =>
  apiClient.get("/basicauth", {
    headers: {
      Authorization: token,
    },
  });
