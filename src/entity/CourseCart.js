var EntitySchema = require("typeorm").EntitySchema;

const CourseCart = new EntitySchema({
  name: "Course_Cart",
  tableName: "course_carts",
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
module.exports = { CourseCart };
