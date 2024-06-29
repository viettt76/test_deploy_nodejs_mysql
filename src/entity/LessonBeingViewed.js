var EntitySchema = require("typeorm").EntitySchema;

const LessonBeingViewed = new EntitySchema({
  name: "Lesson_Being_Viewed",
  tableName: "lesson_being_viewed",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    userId: {
      type: "uuid",
    },
    lessonId: {
      type: "uuid",
    },
    timeStamp: {
      type: "time",
    },
  },
});

module.exports = { LessonBeingViewed };
