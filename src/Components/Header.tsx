import React from 'react';
import styles from '@/styles/Home.module.css'
import InputModel from '@/Components/InputModel';
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';
import {Philosopher} from '@next/font/google'
const ph= Philosopher({weight:'700',preload: false,})


const Header = () => {
  const { toggle, setToogle } = useContext(Context)

  const ModelHandler = () => {
    setToogle(!toggle)
    
  }
  return (
    <>
      <div className={styles.header}>
        <h1 className={ph.className}>TODO APP</h1>
        <button className={[styles.addtodobtn,ph.className ].join(" ")}   onClick={ModelHandler}>Add Todo</button>
      </div>
      {toggle && <InputModel /> }
    </>
  )
}

export default Header