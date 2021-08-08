module.exports = class UserDto {
    email           //почта
    id              //id пользователя
    isActivated     //активирован или нет

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated
    }
}