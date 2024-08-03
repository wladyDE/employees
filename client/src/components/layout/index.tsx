import { Layout as AntLayout } from 'antd'
import styles from './index.module.css'
import { Header } from '../header'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header/>
            <AntLayout.Content style={{ height : '100%', color : 'white'}}>
                {children}
            </AntLayout.Content>
        </div>
    )
}

export default Layout