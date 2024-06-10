import React, { useState } from "react"
import style from "./footer.module.scss"

const Footer: React.FC = () => {
  const [info] = useState('2024/6/10 by wangjun')


  return (
    <div className={style.footer} >{info}</div>
  )
}

export default Footer