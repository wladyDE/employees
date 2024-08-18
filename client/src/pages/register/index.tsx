import { CustomInput } from '../../components/custom-input'
import Layout from '../../components/layout'
import { Card, Row, Form, Space, Typography } from 'antd'
import { PasswordInput } from '../../components/password-input/input'
import { CustomButton } from '../../components/custom-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useState } from 'react'
import { useRegisterMutation } from '../../app/services/auth'
import { User } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/is-error-with-message'
import ErrorMessage from '../../components/error-message'

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }

export const Register = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [error, setError] = useState('')
  const [registerUser] = useRegisterMutation()

  const register = async (data: RegisterData) => {
    console.log(data);
    
    try {
      await registerUser(data).unwrap()

      navigate('/')
    } catch (err) {
      const maybeError = isErrorWithMessage(err)

      if (maybeError) {
        setError(err.data.message)
      } else {
        setError('Uknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Register' style={{ width: "30rem" }}>
          <Form onFinish={register}>
            <CustomInput name='name' placeholder='Name' />
            <CustomInput type='email' name='email' placeholder='Email' />
            <PasswordInput name='password' placeholder='Password' />
            <PasswordInput name='confirmPassword' placeholder='Confirm password' />
            <CustomButton
              type='primary'
              htmlType='submit'
            >
              Register
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Already registered? <Link to={Paths.login}>Login</Link>
            </Typography.Text>
            <ErrorMessage message={error}/>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}