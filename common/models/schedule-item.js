module.exports = function(ScheduleItem) {
  // Since we only care about the time, let's zero the date parts
  ScheduleItem.observe('before save', function GoBackToRunnymede(ctx, next) {
    if (ctx.instance) {
      ctx.instance.start.setFullYear(1215, 5, 15);
      ctx.instance.end.setFullYear(1215, 5, 15);
    } else {
      ctx.data.start.setFullYear(1215, 5, 15);
      ctx.data.end.setFullYear(1215, 5, 15);
    }
    next();
  });

  ScheduleItem.validatesInclusionOf('day', { in : [0, 1, 2, 3, 4, 5, 6],
    message: "Day should be 0-6, where 0 is Sunday and 6 is Saturday."
  });
  ScheduleItem.validate('end', afterStart, {
    message: 'End must be after start.'
  })

  function afterStart(err) {
    if (this.end <= this.start) err();
  }
};
