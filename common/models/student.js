module.exports = function(Student) {
  Student.validatesInclusionOf('gender', {in: ['M','F']});

};
