module.exports = class UserDto {

    id;
    email;
    isActivated;
    role;
    phone;

    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.phone = user.phone;
    }
}