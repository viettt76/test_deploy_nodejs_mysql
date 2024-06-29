var EntitySchema = require("typeorm").EntitySchema;

const RatedCourse = new EntitySchema({
  name: "Rated_Course",
  tableName: "rated_courses",
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
    star: {
      type: "tinyint",
    },
  },
});

module.exports = { RatedCourse };
