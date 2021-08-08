module.exports = class UserInfo {
    
    email       //Email  
    id          //id пользователя
    groupName   //Название группы
    groupType   //Тип группы (Б/М/А)
    year        //Год обучения

    constructor(user, group) {
        this.email = user.email
        this.id = user._id
        this.groupName = group.groupName
        this.groupType = group.groupType
        this.year = group.year
    }
}
