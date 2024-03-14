const User = require("../../models").User;
export class UserService {
  constructor() {}

  async createUser(data: any) {
    if (!data.name || !data.phone) throw Error("params missing");
    return await User.create(data);
  }

  async getProfile(data: any) {
    return await User.findOne({
      where: {
        id: data.userId,
      },
      raw: true,
    });
  }

  async editUser(data: any) {
    if (!data.userId) throw Error("params missing userId");
    return await User.update(data, {
      where: {
        id: data.userId,
      },
    });
  }

  async deleteUser(data: any) {
    return await User.destroy({
      where: {
        id: data.userId,
      },
    });
  }
}