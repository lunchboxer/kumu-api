module.exports = function(ScheduleItem) {
  // Since we only care about the time, let's zero the date parts
  ScheduleItem.observe('before save', function GoBackToRunnymede(ctx, next) {
    if (ctx.instance) {
      ctx.instance.start.setFullYear(1215,5,15);
        ctx.instance.end.setFullYear(1215,5,15);
    } else {
      ctx.data.start.setFullYear(1215,5,15);
      ctx.data.end.setFullYear(1215,5,15);
    }
    next();
  });
};
