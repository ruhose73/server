const Group = require('../models/Group')

class GroupService {

    async getGroupInfoById (groupName) {
        try{
            const group = await Group.findOne({groupName})
            console.log(group)
            return group
        } catch(e){
            return null
        }

    }
}

module.exports = new GroupService();