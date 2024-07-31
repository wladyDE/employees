const {prisma} = require('../prisma/prisma-client')

/**
 * @route GET /api/employees
 * @desc get all Employees
 * @access Private
 */
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()

        res.status(200).json(employees)
    } catch {
        res.status(500).json({ message : 'An error occured during getting all employees'})
    }
}

/**
 * @route GET /api/employees/add
 * @desc add Employee
 * @access Private
 */
const add = async (req, res) => {
    try {
        const data = req.body

        if(!data.firstName || !data.lastName || !data.address || !data.age){
            return res.status(400).json({message : 'All fields are required'})
        }

        const employee = await prisma.user.update({
            where : {
                id : req.user.id,
            },
            data : {
                createdEmployee : {
                    create: data
                }
            }
        })

        return res.status(201).json(employee)

    } catch {
        res.status(500).json({ message : 'An error occured during adding a new employee'})
    }
}

module.exports = {
    all,
    add
}