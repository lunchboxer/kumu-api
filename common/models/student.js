module.exports = function(Student) {
  Student.validatesInclusionOf('gender', {in: ['m','f']});

};
