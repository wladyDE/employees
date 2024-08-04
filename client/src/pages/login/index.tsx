import { useState } from 'react'
import { CustomInput } from '../../components/custom-input'
import Layout from '../../components/layout'
import { Card, Row, Form, Space, Typography } from 'antd'
import { PasswordInput } from '../../components/password-input/input'
import { CustomButton } from '../../components/custom-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useLoginMutation, UserData } from '../../app/services/auth'
import { isErrorWithMessage } from '../../utils/is-error-with-message'
import ErrorMessage from '../../components/error-message'

export const Login = () => {

  const navigate = useNavigate()
  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState('')

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap()

      navigate(Paths.home)

    } catch (error) {
      console.log(error);
      
      const maybeError = isErrorWithMessage(error)

      if(maybeError){
        setError(error.data.message)
      } else {
        setError('Uknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Login' style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <CustomInput type='email' name='email' placeholder='Email' />
            <PasswordInput name='password' placeholder='Password' />
            <CustomButton
              type='primary'
              htmlType='submit'
            >
              Login
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              No Accout? <Link to={Paths.register}>Register</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
