module.exports = class UserInfo {
    
    email       //Email  
    id          //id пользователя
    groupName   //Название группы
    groupType   //Тип группы (Б/М/А)
    year        //Год обучения
    courseName  //Название курса
    teacherID   //id преподавателя
    //teacherName //имя преподавателя
    courseType  //тип курса (экзамен/зачет)

    constructor(user, group, courses) {
        this.email = user.email
        this.id = user._id
        this.groupName = group.groupName
        this.groupType = group.groupType
        this.year = group.year
        this.courseName = courses.courseName
        this.teacherID = courses.teacherID
        //this.teacherName = courses.teacherName
        this.courseType = courses.courseType
    }
}
