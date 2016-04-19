module.exports = function (StudentNote) {
  StudentNote.observe('before save', function addTimestamp (ctx, next) {
    if (ctx.instance) {
      ctx.instance.created = new Date()
    } else {
      ctx.data.updated = new Date()
    }
    next()
  })
  StudentNote.beforeRemote('create', function (context, user, next) {
    var req = context.req
    req.body.authorId = req.accessToken.userId
    next()
  })
}
