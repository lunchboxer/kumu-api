'use strict'

module.exports = function (Seating) {
  // check that a given seatnumber is unique for a class
  Seating.validateAsync('seatNumber', seatUnique, {
    message: 'A student with that seat number already exists for that class'
  })
  function seatUnique (err, done) {
    Seating.findOne({
      where: {
        and: [{
          classId: this.classId
        }, {
          seatNumber: this.seatNumber
        }, {
          id: {
            nin: [this.id]
          }
        }]
      }
    }, function (nerr, result) {
      if (result) {
        err()
      }
      done()
    })
  }

  // check that a student is not part of the same class twice
  Seating.validateAsync('student', studentUnique, {
    message: 'This student is already assigned to the class'
  })

  function studentUnique (err, done) {
    Seating.findOne({
      where: {
        and: [{
          classId: this.classId
        }, {
          studentId: this.studentId
        }, {
          id: {
            nin: [this.id]
          }
        }]
      }
    }, function (nerr, result) {
      if (result) {
        console.log('failed studentUnique')
        err()
      }
      done()
    })
  }
}
