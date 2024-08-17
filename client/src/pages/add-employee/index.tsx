import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from '../../components/layout'
import { Row } from 'antd'
import EmployeeForm from '../../components/employee-form'
import { selectUser } from '../../features/auth/authSlice'
import { useAddEmployeeMutation } from '../../app/services/employees'
import { Paths } from '../../paths'
import { Employee } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/is-error-with-message'

const AddEmployee = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [addEmployee] = useAddEmployeeMutation()

    useEffect(() => {
        if(!user) {
            navigate(Paths.login)
        }
    }, [navigate, user])

    const handleAddEmployee = async (data : Employee) => {
        try {
            await addEmployee(data).unwrap()

            navigate(`${Paths.status}/created`)
        } catch(err) {
            const maybeError = isErrorWithMessage(err)

            if(maybeError){
                setError(err.data.message)
            } else {
                setError('Uknown error')
            }
        }
    }

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <EmployeeForm
                    title='Add emloyee'
                    btnText='Add'
                    onFinish={handleAddEmployee}
                    error={error}
                />
            </Row>
        </Layout>
    )
}

export default AddEmployee