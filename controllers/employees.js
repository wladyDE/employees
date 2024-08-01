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

        const employee = await prisma.employee.create({
            data : {
                ...data,
                userId: req.user.id
            }
        })

        return res.status(201).json(employee)

    } catch {
        res.status(500).json({ message : 'An error occured during adding a new employee'})
    }
}

/**
 * @route POST /api/employees/remove/:id
 * @desc remove Employee
 * @access Private
 */
const remove = async (req, res) => {
    const {id} = req.body

    try {
        await prisma.employee.delete({
            where : {
                id
            }
        })

        return res.status(204).json('OK')
    } catch (error) {
        res.status(500).json({ message : 'An error occured during deleting an employee'})
    }
}

/**
 * @route PUT /api/employees/edit/:id
 * @desc edit Employee
 * @access Private
 */
const edit = async (req, res) => {
    const {id} = req.body
    const data = req.body

    try {
        await prisma.employee.update({
            where : {
                id
            },
            data
        })

        return res.status(204).json('OK')
    } catch (error) {
        res.status(500).json({ message : 'An error occured during updating an employee'})
    }
}

/**
 * @route GET /api/employees/:id
 * @desc get Employee
 * @access Private
 */
const employee = async (req, res) => {
    const {id} = req.params

    try {
        const employee = await prisma.employee.findUnique({
            where : {
                id
            }
        })

        return res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ message : 'An error occured during getting an employee'})
    }
} 

module.exports = {
    all,
    add,
    remove,
    edit,
    employee
}