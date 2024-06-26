import React from 'react'
import style from './FastTitle.module.css'
import fastImg from '../../assets/fast.png'

const FastTitle = () => {
  return (
    <div className={style.container} id='fast'>
        <h1>The <span className={style.text}  style={{backgroundColor: "#CEEAD6", color: "#188038"}}>
        <img src={fastImg} alt="Fast" />
        fast</span>
        way to do<br/>things online</h1>
    </div>
  )
}

export default FastTitle