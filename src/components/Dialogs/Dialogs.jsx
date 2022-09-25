import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {useNavigate} from "react-router";
import DialogsFormikForm from "./Form/DialogsFormikForm";
import Preloader from "../common/Preloader/Preloader";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    let dialogsElements = dialogs.map(d =>
        <DialogItem key={d.id} id={d.id} name={d.name}/>
    );

    let messagesElements = messages.map(m =>
        <MessageItem key={m.id} message={m}/>
    );

    let navigate = useNavigate()
    useEffect(()=>{
        if(!props.isAuth){
            return navigate("/login")
        }
    }, [props.isAuth])

    return (
        <React.Suspense fallback={<Preloader />}>
        <div className={s.dialogsContent}>
            <div className={s.dialogsColumn}>
                {dialogsElements}
            </div>
            <div className={s.messagesColumn}>
                {messagesElements}

                <DialogsFormikForm {...props} />

            </div>
        </div>
        </React.Suspense>
    );
}

export default Dialogs;