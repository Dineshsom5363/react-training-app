import userRepository from "../Repositories/userRepository";

const userService = {
  getUsers: () => {
    return userRepository.getUsers();
  },

  deleteUser: (id) => {
    return userRepository.deleteUser(id);
  },
};

export default userService;