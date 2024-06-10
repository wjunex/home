'use client';

import React, { useState } from 'react';
import style from "./home.module.scss"
import { Input, Button } from 'antd';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

/* 首页 */
const Home: React.FC = () => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (!value) return;
    const url = `https://www.google.com/search?q=${value}`
    window.open(url, '_blank');
    setValue('');
  }

  return (
    <div>
      <NavBar />
      <div className={style.homeBox}>
        <div className={style.search}>
          <Input value={value}
            onChange={(e) => setValue(e.target.value)}
            onPressEnter={handleSearch}
            className={style.input} placeholder="请输入" allowClear />
          {/* <Button className={style.button} type="primary" onClick={handleSearch}>搜索</Button> */}

        </div>

      </div>
      <Footer />
    </div>
  )

}

export default Home