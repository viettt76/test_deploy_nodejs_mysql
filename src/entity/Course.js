var EntitySchema = require("typeorm").EntitySchema;

const Course = new EntitySchema({
  name: "Course",
  tableName: "courses",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    img: {
      type: "longblob",
    },
    name: {
      type: "varchar",
    },
    description: {
      type: "text",
    },
    authorId: {
      type: "uuid",
    },
    price: {
      type: "int",
    },
    level: {
      type: "varchar",
    },
    numberOfParticipants: {
      type: "int",
    },
    numberOfReviews: {
      type: "int",
    },
    totalStars: {
      type: "int",
    },
  },
});

module.exports = { Course };
