module.exports = function(app) {
  var localMongo = app.dataSources.localMongo;

  // create same teachers(users)
  localMongo.automigrate(function(err) {

    var Teacher = app.models.Teacher;

    Teacher.create([
      {
        username: 'Jim',
        email: 'zixingchepeng@163.com',
        password: 'opensesame',
        givenName: 'James',
        surname: 'Smith'
      }
    ], function(err, Teachers) {
      if (err) throw err;

      var Student = app.models.Student;

      Student.create([
        { EnglishName: "Sam", ChineseName: "王朋",
          gender:"M", birthdate:"2006-02-30", id: 1234567890 },
        { EnglishName: "Tina", ChineseName: "王菲",
          gender:"F", birthdate:"2006-04-10", id: 1234567891 }
      ], function(err, Students) {
        if (err) throw err;

        // create sample terms
        var Term = app.models.Term;
        Term.create([
          {
            name: "Fall 2015-16",
            beginDate: "2015-08-24",
            endDate: "2016-01-14"
          },
          {
            name: "Spring 2015-16",
            beginDate: "2016-02-15",
            endDate: "2016-07-02"
          }
        ], function(err, Terms) {
          if (err) throw err;

          // create Classes with new terms
          Terms[1].classes.create([
            { grade: "3", name : "301"},
            { grade: "3", name : "302"},
            { grade: "3", name : "303"},
            { grade: "3", name : "304"},
            { grade: "3", name : "305"},
            { grade: "6", name : "601"},
            { grade: "6", name : "602"},
            { grade: "6", name : "603"}
          ], function(err, Classes) {
            if (err) throw err;

            // seat sample students in the sample classes
            var Seating = app.models.Seating;
            Seating.create([
              {seatNumber:12, classId:Classes[2].id, studentId:Students[0].id},
              {seatNumber:1, classId:Classes[0].id, studentId:Students[1].id}
            ], function(err, Seatings) {
              if (err) throw err;

              //Now for the studentGroups
              // First, create them
              var StudentGroup = app.models.StudentGroup;
              StudentGroup.create([
                { "name": "301 Conversation Odd", "termId": Terms[1].id },
                { "name": "303 Conversation Even", "termId": Terms[1].id }
              ], function(err, StudentGroups){
                if (err) throw err;

                // Next, add students to them
                StudentGroups[0].students.add(Students[1])
                StudentGroups[1].students.add(Students[0])

                // Time to make a sample lesson or two
                var Lesson = app.models.Lesson;
                Lesson.create([
                  {
                    "name": "Ordering a Pizza part 1",
                    "order": 1,
                    "lessonPlan" : "First, teach them stuff",
                    "slides": "stuff, stuff, more stuff",
                    "teacherId": Teachers[0].id,
                    "termId": Terms[1].id
                  },
                  {
                    "name": "Ordering a Pizza part 2",
                    "order": 2,
                    "lessonPlan" : "Teach them more stuff",
                    "slides": "stuff, stuff, more stuff",
                    "teacherId": Teachers[0].id,
                    "termId": Terms[1].id
                  }
                ], function(err, Lessons) {
                  if (err) throw err;

                  // Associate studentgroups with lessons
                  Lessons[0].targetStudentGroups.add(StudentGroups[1])
                  Lessons[0].targetStudentGroups.add(StudentGroups[0])
                  Lessons[1].targetStudentGroups.add(StudentGroups[1])
                  Lessons[1].targetStudentGroups.add(StudentGroups[0])

                  // Time to add the Lesson notes
                  var LessonNote = app.models.LessonNote;
                  LessonNote.create([
                    {
                      "text": "This lesson is great",
                      "lessonId": Lessons[0].id,
                      "authorId" : Teachers[0].id,
                      "date": Date.now()
                    },
                    {
                      "text": "This lesson is really wonderful",
                      "lessonId": Lessons[0].id,
                      "authorId" : Teachers[0].id,
                      "date": Date.now()
                    }
                  ], function(err, LessonNotes) {
                    if (err) throw err;

                    // Make LearningSessions
                    var LearningSession = app.models.LearningSession;
                    var start1 = new Date(2016, 02, 23, 13, 40);
                    var end1 = new Date(2016, 02, 23, 14, 20);
                    var start2 = new Date(2016, 02, 24, 13, 40);
                    var end2 = new Date(2016, 02, 24, 14, 20);

                    LearningSession.create([
                      { "beginTime": start1, "endTime": end1, "lessonId": Lessons[0] },
                      { "beginTime": start2, "endTime": end2, "lessonId": Lessons[1] },
                    ], function(err, LearningSessions) {
                      if (err) throw err;

                      // related the studentGroups
                      LearningSessions[0].studentGroups.add(StudentGroups[0])
                      LearningSessions[1].studentGroups.add(StudentGroups[1])

                      // and the teacher
                      LearningSessions[0].teachers.add(Teachers[0])
                      LearningSessions[1].teachers.add(Teachers[1])

                      var WeeklySchedule = app.models.WeeklySchedule;
                      WeeklySchedule.create([
                        { "name": "Spring 2016 default",
                          "term": Terms[1],
                          "teacher": Teachers[0]
                        }
                      ], function(err, WeeklySchedules) {
                        if (err) throw err;

                        var ScheduleItem = app.models.ScheduleItem;
                        var starttime = new Date(0,0,0,13,40)
                        var endtime = new Date(0,0,0,14,20)
                        ScheduleItem.create([
                          { "day": 1,
                            "start": starttime,
                            "end": endtime,
                            "weeklySchedule": WeeklySchedules[0],
                            "studentGroups" : StudentGroups[0]
                          }
                        ], function(err, SchedulesItems) {
                        if (err) throw err;

                        console.log('Created sample models')
                        console.log('\n -- Ready to roll! -- \n');

                        });// ScheduleItem.create()


                      }); // WeeklySchedule.create()


                    }); // LearningSessions.create()

                  }); // LessonNote.create()
                }); //Lesson.create()
              }); //StudetGroup.create()
            }) //Seating.create()
          }) // Terms[1].classes.create()
        }) //Term.create()
      }); // Student.create()
    }); // Teacher.create()
  }) //automigrate
};
