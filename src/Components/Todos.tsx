import React from "react";
import { useContext } from "react";
import { Context } from "../Context/ContextApi";
import { AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import styles from "@/styles/Home.module.css";
import {
  AiFillCheckSquare,
  AiFillEdit,
  AiFillCloseSquare,
} from "react-icons/ai";
import { Philosopher } from "@next/font/google";
const ph = Philosopher({ weight: "700", preload: false });
import { date } from "@/utils";
import { BsSuitDiamondFill } from "react-icons/bs";


const Todos = () => {
  const { arr, setArr } = useContext(Context);
  const [selectedTodoIndex, setSelectedTodoIndex] = React.useState<
    number | null
  >(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const deleteTodo = (idx: any) => {
    const filteredData = arr.filter((item: any, curridx: number) => {
      return curridx !== idx;
    });
    setArr(filteredData);
  };


  const updateTodo = (props: any) => {
    if (props.title!=='' && props.title.trim().length!==0 ){
        const newTodos: any = [];
        arr.map((item: any) => {
          if (item.id === props.id) {
            var newTodo = {
              ...item,
              date: date,
              title: props.title,
            };
          }
          newTodos.push(newTodo);
        });
        setArr(newTodos);
        setSelectedTodoIndex(null)
    }
  };

  const handleCheck = (idx: number) => {
    arr[idx].completed = !arr[idx].completed;
    setArr([...arr]);

    if (arr[idx].completed) {
      setTimeout(() => {
        deleteTodo(idx);
      }, 1500);
    }
  };

  const setEditToggle = (idx: number|null) => {
    setSelectedTodoIndex(idx);
  };

  

  return (
    <div className={styles.todosContainer}> 
      <div className={styles.BoxFlex}>
        <div className={styles.Box1}></div>
        <h4 className={ph.className}>Completed</h4>
        <div className={[styles.Box2, ph.className].join(" ")}></div>
        <h4 className={ph.className}>Pending</h4>
      </div>
      
        {arr.map((item: any, idx: number) => {
          return (
            <div className={styles.TodoItems} key={idx}>
              <p className={ph.className} style={{ marginBottom: "5px" }}>
                {item.title}
              </p>
              <div
                style={{
                  backgroundColor: item.completed ? "#26de81" : "#fc5c65",
                }}
                className={styles.Box3}
              ></div>

              {/* <p className={[styles.Description,ph.className].join(" ")}>{item.description}</p> */}
              <p className={[styles.Date, ph.className].join(" ")}>
                {item.date}
              </p>

              <div className={styles.container}>
                <AiFillEdit
                  className={styles.edit}
                  onClick={() => setEditToggle(idx)}
                  size={20}
                />
              </div>
              {selectedTodoIndex === idx && (
                <div className={styles.editBox}>
                  <BsSuitDiamondFill
                    className={styles.diamond}
                    size={20}
                   
                  />
                  <AiFillCloseCircle
                    className={styles.closeUdatedBox}
                    onClick={() => setEditToggle(null)}
                    size={20}
                  />
                  <input
                    className={ph.className}
                    placeholder="update Todo"
                    type="text"
                    ref={inputRef}
                  />
                  <button
                    className={[
                      styles.addtodobtn,
                      ph.className,
                      styles.disabled,
                    ].join(" ")}
                    onClick={() =>
                      updateTodo({
                        id: item.id,
                        title: inputRef?.current?.value,
                      })
                    }
                  >
                    Save
                  </button>
                </div>
              )}
              <AiFillDelete
                className={styles.Deletbtn}
                onClick={() => deleteTodo(idx)}
                size={20}
              />
              <button className={styles.Check} onClick={() => handleCheck(idx)}>
                {item.completed ? (
                  <AiFillCheckSquare className={styles.IconStyle} size={20} />
                ) : (
                  <AiFillCloseSquare className={styles.IconStyle} size={20} />
                )}
              </button>
            </div>
          );
        })}
      </div>

  );
};

export default Todos;
