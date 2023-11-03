import { useState, useEffect } from "react";
import "../App.css";
import { db } from "../config/firebase";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc
} from "@firebase/firestore";
import {Minus, TriangleFill} from "akar-icons";

export default function Todo() {

    let [Input, setInput] = useState('');
    let [DailyTask, setDailyTask] = useState([]);

    const collectionRef = collection(db, 'todos');

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef);
            setDailyTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
    }, [DailyTask]);


    // add task to DB //
    async function CreateTask() {
        await addDoc(collectionRef, { NewTask: Input, isComplete: false});
        Input = '';
    }

    // delete task from DB //
    async function DeleteTask(id) {
        const deleteUserTask = doc(db, 'todos', id);
        await deleteDoc(deleteUserTask);
        let filterTask = DailyTask.filter((task) => task.id !== id);
        setDailyTask(filterTask);
    }

    return (
        <div className="Todo-div">
            <div className="Input-todo">
                <input type="text" placeholder="New task" value={Input} onChange={(e) => setInput(e.target.value)} />
                <button id='Add-btn' onClick={() => CreateTask()}>Add</button>
                <p id = "task-size">your daily challenge: {DailyTask.length} tasks</p>
            </div>
           <div className="Todo-task-list">
           {
                DailyTask.map((item, id) => {
                    return (
                        <div className="task-list-wrapper" key={id}>
                                <div className="input-and-list">
                                  <TriangleFill size={10}/>
                                   <li>{item.NewTask}</li>
                                </div>
                                <div>
                                    <button onClick={() => DeleteTask(item.id)} className="delete-btn"><Minus size={18}/></button>
                                </div>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}
