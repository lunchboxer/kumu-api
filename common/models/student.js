var pinyin = require('pinyin')

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

  // Convert the Chinese name to pinyin
  // eventually this will need to be done only when ChineseName is changed
  Student.observe('before save', function addPinyin(ctx, next) {
    if (ctx.instance) {
      pinyinName = pinyin(ctx.instance.ChineseName)
      pinyinName = pinyinName.join('')
      pinyinName = pinyinName.charAt(0).toUpperCase() + pinyinName.slice(1);
      ctx.instance.PinyinName = pinyinName
    } else {
      pinyinName = pinyin(ctx.data.ChineseName)
      pinyinName = pinyinName.join('')
      pinyinName = pinyinName.charAt(0).toUpperCase() + pinyinName.slice(1);
      ctx.data.PinyinName = pinyinName
    }
    next();
  });

  Student.validatesInclusionOf('gender', {in: ['M','F']});
  Student.validate('ChineseName', isChinese, {message: 'Chinese characters only'})
  function isChinese(err) {
    onlyChineseCharacters = /[\u3400-\u9FBF]/.test(this.ChineseName)
    if(!onlyChineseCharacters) err();
  }

};
