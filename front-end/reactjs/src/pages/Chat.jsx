import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatHeads from "../components/ChatHeads";
import Conversation from "../components/Conversation";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import "../style/chat.css";

const Chat = () => {

let navigate = useNavigate();

const [typeId, setTypeId] = useState();

const getUserApi = "http://localhost:8080/users/"

const getUser = async () => {
    const token = localStorage.getItem("user");
    axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
    .then(response => {
        setTypeId(response.data.user_type_id)
    }).catch (err => {
        console.log(err)
    });
}

useEffect(() => { 
    getUser() 
}, []);

const [chatHeads, setChatHeads] = useState([]);
const [receiver, setReceiver] = useState(null);

const firebaseConfig = {
    apiKey: "AIzaSyB-W8nuhgszpCkf0CqxWQGH4kXyGSdArlE",
    authDomain: "kaffi-project.firebaseapp.com",
    databaseURL: "http://kaffi-project.firebaseio.com",
    projectId: "kaffi-project",
    storageBucket: "gs://kaffi-project.appspot.com",
    messagingSenderId: "884089590617",
    appId: "1:884089590617:web: '23ffbd6d7275d23315f248'",
    measurementId: "G-LLYVEJH9WW",
};
    
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseConfig.storageBucket);

const db = getFirestore();
const auth = getAuth();

const [fs_user, setFsUser] = useState();

useEffect(() => {
const fs_user = JSON.parse(localStorage.getItem("fs_user"));
if (fs_user) setFsUser(fs_user);
else navigate("/");
}, [navigate, setFsUser]);

useEffect(() => {
if (!fs_user) return;

(async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setChatHeads(
    querySnapshot.docs
        .map((doc) => doc.data())
        .filter((obj) => obj.user_type_id != typeId)
    );
})();
}, [fs_user]);


    return (
        <div className="chat-screen">
            <div className="half-screen chat-heads">
                <ChatHeads items={chatHeads} setReceiver={setReceiver} />
            </div>

            <div className="half-screen">
                <Conversation receiver={receiver} user={fs_user} />
            </div>
        </div>
    )
}

export default Chat