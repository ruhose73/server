const ApiError = require('../handler/errorHandler')
const GroupService = require('../service/group-service')

class GroupController {

    async createGroup (req,res,next) {
        try {
            const {groupName,groupType,year,students} = req.body
            if (!groupName || !groupType || !year || !students) {
                return next(ApiError.internal())
            }
            const createGroup = await GroupService.createGroup(groupName,groupType,year,students)
            console.log(createGroup)
            return res.status(201).json({...createGroup})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }

    async addStudentToGroup (req,res,next) {
        try {
            const {groupId,students} = req.body
            if (!groupId || !students) {
                return next(ApiError.internal())
            }
            const addStudentToGroup = await GroupService.addStudentToGroup(groupId,students)
            return res.status(201).json({...addStudentToGroup})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }

    async addCoursesToGroup (req, res, next) {
        try {
            const {groupId,courses} = req.body
            if (!groupId || !courses) {
                return next(ApiError.internal())
            }
            const addCoursesToGroup = await GroupService.addCoursesToGroup(groupId,courses)
            return res.status(201).json({...addCoursesToGroup})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }
}

module.exports = new GroupController()