'use strict'

module.exports = function (LearningSession) {
  LearningSession.validate('endTime', afterBegin, {
    message: 'End must be after beginning.'
  })

  function afterBegin (err) {
    if (this.endTime <= this.beginTime) err()
  }
}
