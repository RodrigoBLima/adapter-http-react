import React from "react";
import AxiosAdapter from "./infra/AxiosAdapter";
import UserService from "./infra/UserService";

export default function App() {
  const httpServer = new AxiosAdapter();
  const userService = new UserService(httpServer);

  async function getUser() {
    const response = await userService.getUser("10");
    console.table("user response", response);
  }

  async function createUser() {
    const response = await userService.createUser({
      name: "Example test",
      email: "example.example@example.com",
      cellphone: "099876534",
    });
    console.table("user response", response);
  }

  async function updateUser() {
    const response = await userService.updateUser({
      name: "User corerctly name",
      email: "correctly@text.com",
      cellphone: "966453628",
    });
    console.table("user response", response);
  }

  async function deleteUser() {
    const { deleted } = await userService.deleteUser("10");
    console.table("user response", deleted);
  }

  return (
    <div className="app-container">
      <button onClick={() => getUser()}>GET</button>
      <button onClick={() => createUser()}>POST</button>
      <button onClick={() => updateUser()}>PUT</button>
      <button onClick={() => deleteUser()}>DELETE</button>
    </div>
  );
}
