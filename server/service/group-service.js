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
            console.log(createGroup)
            return createGroup
        } catch(e) {
            return null
        }
    }       

    async addStudentToGroup (groupId,students) {
        try{
            const addStudent = await Group.updateOne({_id:groupId}, {$push: { students:students } }) 
            console.log(addStudent)
            return addStudent
        } catch(e) {
            return null
        }
    }

    async addCoursesToGroup (groupId,courses) {
        try{
            console.log(groupId,courses)
            const addCourses = await Group.updateOne({_id:groupId}, {$push: { courses } }) 
            console.log(addCourses)
            return addCourses
        } catch(e) {
            return null
        }
    }
}

module.exports = new GroupService();