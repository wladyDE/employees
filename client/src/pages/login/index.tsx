import { CustomInput } from '../../components/custom-input'
import Layout from '../../components/layout'
import { Card, Row, Form, Space, Typography } from 'antd'
import { PasswordInput } from '../../components/password-input/input'
import { CustomButton } from '../../components/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Login' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
