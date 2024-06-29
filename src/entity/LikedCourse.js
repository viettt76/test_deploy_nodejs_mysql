var EntitySchema = require("typeorm").EntitySchema;

const LikedCourse = new EntitySchema({
  name: "Liked_Course",
  tableName: "liked_courses",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    userId: {
      type: "uuid",
    },
    courseId: {
      type: "uuid",
    },
  },
});

module.exports = { LikedCourse };
