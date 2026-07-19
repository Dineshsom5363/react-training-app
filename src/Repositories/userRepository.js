import users from "../Data/users";

const userRepository = {
  getUsers: () => {
    return users;
  },

  deleteUser: (id) => {
    return users.filter((user) => user.id !== id);
  },
};

export default userRepository;