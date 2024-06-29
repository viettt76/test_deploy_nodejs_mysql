const { AppDataSource } = require("../data-source");
const { User } = require("../entity/User");

class UserController {
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async all(request, response, next) {
    return this.userRepository.find();
  }

  async one(request, response, next) {
    const id = parseInt(request.params.id);

    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async save(request, response, next) {
    const { firstName, lastName, age } = request.body;

    const user = Object.assign(new User(), {
      firstName,
      lastName,
      age,
    });

    return this.userRepository.save(user);
  }

  async remove(request, response, next) {
    const id = parseInt(request.params.id);

    let userToRemove = await this.userRepository.findOne({
      where: { id },
    });

    if (!userToRemove) {
      return "this user not exist";
    }

    await this.userRepository.remove(userToRemove);

    return "user has been removed";
  }
}

module.exports = { UserController };
