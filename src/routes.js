const { ChapterController } = require("./controller/ChapterController");
const { UserController } = require("./controller/UserController");

module.exports = {
  Routes: [
    {
      method: "get",
      route: "/users",
      controller: UserController,
      action: "all",
    },
    {
      method: "get",
      route: "/users/:id",
      controller: UserController,
      action: "one",
    },
    {
      method: "post",
      route: "/users",
      controller: UserController,
      action: "save",
    },
    {
      method: "delete",
      route: "/users/:id",
      controller: UserController,
      action: "remove",
    },
    {
      method: "get",
      route: "/chapter",
      controller: ChapterController,
      action: "all",
    },
  ],
};
