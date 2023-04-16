"use-client";

import React from "react";
import styles from "@/styles/Home.module.css";
import { BiX } from "react-icons/bi";

import { useContext } from "react";
import { Context } from "../Context/ContextApi";
import uuid from "react-uuid";
import { Philosopher } from "@next/font/google";
const ph = Philosopher({ weight: "700", preload: false });
import { date } from "@/utils";


const InputModel = () => {
  const { setToogle, toggle, arr, setArr, input, setInput} =
    useContext(Context);


    
  const inputHandler = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      id: uuid(),
      date: date,
      [name]: value,
      completed: false,
    });
  };

  const submitHandler = (e: any) => {
    setArr((array:any) => [...array, input]);
    console.log(arr,'array',input)
    setInput({
      ...input,
      title: "",
    });
    setToogle(!toggle);
  };


  const modalToggler = (e: any) => {
    e.preventDefault();
    setToogle(!toggle);
  };

  const disbleModalButton = input.title.trim().length!==0

  return (
    <div className={styles.shadow}>
      <div className={styles.model}>
        <div className={styles.flex}>
          <h2 className={ph.className}>Add Todo</h2>
          <BiX onClick={modalToggler} className={styles.icon} size={40} />
        </div>
        <div className={styles.form}>
          <h3 className={[styles.h3, ph.className].join(" ")}>Task</h3>
          <input
            className={[styles.input, ph.className].join(" ")}
            type="text"
            name="title"
            value={input.title}
            onChange={inputHandler}
            placeholder="Add a task"
          />
        </div>
        <div className={styles.btnContainer}>
          <button
            onClick={modalToggler}
            className={[styles.ModelBtn1, ph.className].join(" ")}
          >
            Cancel
          </button>
          <button
            disabled={!disbleModalButton}
            onClick={submitHandler}
            className={[styles.ModelBtn, ph.className, styles.disabled].join(
              " "
            )}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModel;
