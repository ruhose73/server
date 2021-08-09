const Group = require('../models/Group')

class GroupService {

    async getGroupInfoByGroupname (groupName) {
        try{
            const group = await Group.findOne({groupName})
            console.log(group)
            return group
        } catch(e){
            return null
        }
    }

    async createGroup (groupName,groupType,year,students) {
        try{
            const createGroup = await Group.create({groupName,groupType,year,students})
            return createGroup
        } catch(e) {
            return null
        }
    }

    async addStudentToGroup (groupId,students) {
        try{
            const addStudent = await Group.findByIdAndUpdate({groupId}, {$push: { students } }) 
            return addStudent
        } catch(e) {
            return null
        }
    }

    async addCoursesToGroup (groupId,students) {
        try{
            const addCourses = await Group.findByIdAndUpdate({groupId}, {$push: { courses } }) 
            return addCourses
        } catch(e) {
            return null
        }
    }
}

module.exports = new GroupService();