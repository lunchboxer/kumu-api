module.exports = function(Student) {
  
  // avoid pointless, case-sensitivity validation errors
  Student.observe('before save', function uppperCaseGender(ctx, next) {
    if (ctx.instance) {
      ctx.instance.gender = ctx.instance.gender.toUpperCase();
    } else {
      ctx.data.gender = ctx.data.gender.toUpperCase();
    }
    next();
  });

  // Make sure the time parts of the birthdate are zero
  Student.observe('before save', function bornAtMidnight(ctx, next) {
    if (ctx.instance) {
      ctx.instance.birthdate.setHours(0,0,0,0);
    } else {
      ctx.data.birhtdate.setHours(0,0,0,0);
    }
    next();
  });

  Student.validatesInclusionOf('gender', {in: ['M','F']});

};
