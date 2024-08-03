import { CustomInput } from '../../components/custom-input'
import Layout from '../../components/layout'
import { Card, Row, Form, Space, Typography } from 'antd'
import { PasswordInput } from '../../components/password-input/input'
import { CustomButton } from '../../components/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Register' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name='email' placeholder='Name' />
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
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}