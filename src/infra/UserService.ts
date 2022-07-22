import HttpServer from "./httpServer";
import User from "./UserEntity";

export default class UserService {
  constructor(readonly httpServer: HttpServer) {}

  async getUser(id: string) {
    const userData = await this.httpServer.get("", {
      id,
    });
    return userData;
  }

  async createUser(user: User) {
    const response = await this.httpServer.post("", { user });
    return response;
  }

  async updateUser(user: User) {
    const response = await this.httpServer.put("", { user });
    return response;
  }

  async deleteUser(id: string) {
    const response = await this.httpServer.delete("", { id });
    return response;
  }
}
