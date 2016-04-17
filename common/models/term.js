module.exports = function(Term) {
  // Make sure the time parts are zero
  Term.observe('before save', function atMidnight(ctx, next) {
    if (ctx.instance) {
      ctx.instance.beginDate.setHours(0,0,0,0);
      ctx.instance.endDate.setHours(0,0,0,0);
    } else {
      ctx.data.beginDate.setHours(0,0,0,0);
      ctx.data.endDate.setHours(0,0,0,0);
    }
    next();
  });

  Term.validate('endDate', afterBegin, {message: 'End date must be after begin date.'})
  function afterBegin(err) {
    if(this.endDate <= this.beginDate) err();
  }

};
