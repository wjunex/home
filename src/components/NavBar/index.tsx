
import { Drawer } from "antd";
import React, { useState } from "react"

import {
  SettingOutlined
} from '@ant-design/icons';
import style from "./NavBar.module.scss"

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={style.navbar}>
      {/* <SettingOutlined onClick={showDrawer} /> */}

      <Drawer title="建设工具" onClose={onClose} open={open}>

      </Drawer>
    </div>
  )
}

export default NavBar