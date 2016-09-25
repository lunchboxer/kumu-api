'use strict'

module.exports = function (LessonNote) {
  LessonNote.beforeRemote('create', function (context, user, next) {
    var req = context.req
    req.body.date = Date.now()
    req.body.authorId = req.accessToken.userId
    next()
  })
}
