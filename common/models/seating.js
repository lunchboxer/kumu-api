
module.exports = function(Seating) {

  // check that a given seatnumber is unique for a class
  Seating.validateAsync('seatNumber', seatUnique, {message: 'A student with that seat number already exists for that class'})
  function seatUnique(err, done) {
    Seating.findOne({where: {and: [{classId: this.classId}, {seatNumber: this.seatNumber}]}}, function(nerr, result) {
      if (result) err();
      done()
    })
  }

  // check that a student is not part of the same class twice
  Seating.validateAsync('student', studentUnique, {message: 'This student is already assigned to the class'})
  function studentUnique(err, done) {
    Seating.findOne({where: {and: [{classId: this.classId}, {studentId: this.studentId}, {id: {nin: [this.id]}}]}}, function(nerr, result) {
      if (result) err();
      done()
    })
  }

  // Check that the student is not already part of another class this term
  Seating.validateAsync('class', oneClassPerTerm, {message: 'A student cannot be in two different classes in one term'})
  function oneClassPerTerm(err, done) {
    // find classes that this student already belongs to
    Seating.find({'include': {
                    'relation': 'class',
                    'where': {id: this.classId}
                  }
    }, function(nerr, result) {
      if (result) {

        console.log("result returned")
      }
      // find the term of those classes
      // comare them to the term of this.class
      done()
    })
  }

  // check that student exists
  Seating.validateAsync('student', studentExists, {message: 'Student id not found in records'})
  function studentExists(err, done) {
    var stuff = Seating.findOne({where: {studentId: this.studentId}}).then(result => {
      if (!result) err();
      done();
    })
  }
  // check that class exists
  Seating.validateAsync('class', classExists, {message: 'Class not found in records'})
  function classExists(err, done) {
    var stuff = Seating.findOne({where: {classId: this.classId}}).then(result => {
      if (!result) err();
      done();
    })
  }
};
