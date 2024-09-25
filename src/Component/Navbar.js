import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Import the antd styles
import './Navbar.css'; // Import your custom CSS

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className="header_section">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src="images/logo.jpg" alt="Logo" width={100} />
            </a>
          </div>
          <nav className="navbar-menu">
            <Menu mode="horizontal" className="nav-list">
              <Menu.Item key="home">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item key="about">
                <a href="/about">About</a>
              </Menu.Item>
              <Menu.Item key="services">
                <a href="/services">Services</a>
              </Menu.Item>
              <Menu.Item key="awards">
                <a href="/awards">Awards</a>
              </Menu.Item>
              <Menu.Item key="bios">
                <a href="/bios">Bios</a>
              </Menu.Item>
              <Menu.Item key="learn-languages">
                <a href="/ApplicationForm">Learn Languages</a>
              </Menu.Item>
              <Menu.Item key="contactus">
                <a href="/contactus">Contact Us</a>
              </Menu.Item>
            </Menu>
          </nav>
          <Button
            className="menu-toggle"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            title="Navigation"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <Menu
              mode="vertical"
              onClick={onClose}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="home">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item key="about">
                <a href="/about">About</a>
              </Menu.Item>
              <Menu.Item key="services">
                <a href="/services">Services</a>
              </Menu.Item>
              <Menu.Item key="awards">
                <a href="/awards">Awards</a>
              </Menu.Item>
              <Menu.Item key="bios">
                <a href="/bios">Bios</a>
              </Menu.Item>
              <Menu.Item key="learn-languages">
                <a href="/ApplicationForm">Learn Languages</a>
              </Menu.Item>
              <Menu.Item key="contactus">
                <a href="/contactus">Contact Us</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
