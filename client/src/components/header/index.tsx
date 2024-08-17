import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { CustomButton } from "../custom-button";
import { Paths } from "../../paths";
import { logout, selectUser } from "../../features/auth/authSlice";
import style from "./index.module.css";

export const Header = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate(Paths.login)
  }

  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>

      {
        user ? (
          <CustomButton
            type='ghost'
            icon={<LogoutOutlined />}
            onClick={onLogoutClick}
          >
            Logout
          </CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton type='ghost' icon={<UserOutlined />}>Register</CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type='ghost' icon={<LoginOutlined />}>Login</CustomButton>
            </Link>
          </Space>
        )
      }
    </Layout.Header>
  );
};
