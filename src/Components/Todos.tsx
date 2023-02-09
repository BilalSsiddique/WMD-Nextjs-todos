import React from 'react'
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';
import { AiFillDelete } from "react-icons/ai";
import styles from '@/styles/Home.module.css';
import { AiFillCheckSquare } from "react-icons/ai"
import { AiFillCloseSquare } from "react-icons/ai"
import {Philosopher} from '@next/font/google'
const ph= Philosopher({weight:'700',preload: false,})

const Todos = () => {

    const { arr, setArr } = useContext(Context)

    const deleteTodo = (idx: any) => {
        const filteredData = arr.filter((item: any, curridx: number) => {
            return curridx !== idx
        });
        setArr(filteredData)
    };

    const handleCheck = (idx: any) => {
        arr[idx].completed = !arr[idx].completed
        setArr([...arr])
    }

    return (
        <div>
            <div className={styles.BoxFlex}>
                <div className={styles.Box1}></div><h4 className={ph.className}>Completed</h4>
                <div className={[styles.Box2,ph.className ].join(" ")}></div><h4 className={ph.className}>Pending</h4>
            </div>
            <div className={styles.TodoContainer}>
                {arr.map((item: any, idx: number) => {
                    return (
                        <div className={styles.TodoItems} key={idx}>
                            <p className={ph.className} style={{marginBottom: '5px'}}>{item.title}</p>
                            <div style={{
                                backgroundColor: item.completed ? '#26de81' : '#fc5c65',
                            }}  className={styles.Box3}></div>
                          
                            {/* <p className={[styles.Description,ph.className].join(" ")}>{item.description}</p> */}
                            <p className={[styles.Date, ph.className].join(" ")}>{item.date}</p>
                            <AiFillDelete className={styles.Deletbtn} onClick={() => deleteTodo(idx)} size={20} />
                            <button className={styles.Check} onClick={() => handleCheck(idx)}>
                                {item.completed ? <AiFillCheckSquare className={styles.IconStyle} size={20} /> : <AiFillCloseSquare className={styles.IconStyle} size={20} />}
                            </button>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Todos