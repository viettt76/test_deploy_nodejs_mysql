var EntitySchema = require("typeorm").EntitySchema;

const Chapter = new EntitySchema({
  name: "Chapter",
  tableName: "chapters",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    courseId: {
      type: "uuid",
    },
    chapterNumber: {
      type: "smallint",
    },
    title: {
      type: "varchar",
    },
  },
});

module.exports = { Chapter };
