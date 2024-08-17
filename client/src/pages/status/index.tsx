import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Result, Row } from 'antd'

const Statuses: Record<string, string> = {
    created: 'User was successfully created',
    updated: 'User was successfully updated',
    deleted: 'User was successfully deleted'
}

const Status = () => {
    const {status} = useParams()

    return (
        <Row align='middle' justify='center' style={{width: '100%'}}>
            <Result
                status={status ? 'success' : 404}
                title={status ? Statuses[status] : 'Not found'}
                extra={
                    <Button key='dashboard'>
                        <Link to='/'>Home</Link>
                    </Button>
                }
            />
        </Row>
    )
}

export default Status