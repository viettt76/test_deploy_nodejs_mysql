const { AppDataSource } = require("../data-source");
const { Chapter } = require("../entity/Chapter");

class ChapterController {
  constructor() {
    this.chapterRepository = AppDataSource.getRepository(Chapter);
  }

  async all(request, response, next) {
    return this.chapterRepository.find();
  }
}

module.exports = { ChapterController };
