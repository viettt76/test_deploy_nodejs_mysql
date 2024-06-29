var EntitySchema = require("typeorm").EntitySchema;

const PurchasedCourse = new EntitySchema({
  name: "Purchased_Course",
  tableName: "purchased_courses",
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

module.exports = { PurchasedCourse };
