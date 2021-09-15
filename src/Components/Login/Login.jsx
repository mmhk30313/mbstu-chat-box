import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { GoogleOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from 'react-router';
import { Button } from 'antd/lib/radio';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
// import firebase from 'firebase/compat/app';
// import * as firebase from "firebase/app";
firebase.initializeApp({
    apiKey: "AIzaSyCdRx0j7V96Ox7TdvDnvJF3GqptdwaBNAU",
    authDomain: "mbstu-chat-box.firebaseapp.com",
    projectId: "mbstu-chat-box",
    storageBucket: "mbstu-chat-box.appspot.com",
    messagingSenderId: "664717229828",
    appId: "1:664717229828:web:8a7a21c9dcc16f0dc2da51"
});
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [myUser, setMyUser] = useState("");
    const [wrongMessage, setWrongMessage] = useState(false);
    
    // // const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const history = useHistory();
    const location = useLocation();
    // console.log(location);
    let {pathname} = location;
    // console.log(location.state.from.pathname);
    const [allAdmin, setAllAdmin] = useState([]);
    useEffect(() => {
        if(location.state && location.state.from.pathname === '/admin'){
            setMyUser('admin');
        }
        else{
            // console.log(location.state)
            setMyUser('client');
        }
        // fetch(`https://travel-solution-server.herokuapp.com/find-admins`)
        // .then(res => res.json())
        // .then(data => {
        // //    console.log(data);
        //    setAllAdmin(data);
        // })
    },[location.state])
    // console.log(myUser);
    const {from} = location.state || { from: { pathname: "/"}};
    const handleClick = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            const {displayName, email, photoURL} = user;
            const curUser = {
                email,
                displayName,
                photoURL,
                userType: myUser
            }
            console.log({user: curUser});
            setLoggedInUser(curUser);
            history.replace(from);
            // const isAdminEmail = allAdmin.find( admin => admin.email === curUser.email);
            // // console.log(isAdminEmail);
            // // console.log(isAdminEmail);
            // if( ( location.state && location.state.from.pathname === '/admin' && myUser === 'client' )  || (!location.state && myUser === 'client') || ( !location.state && myUser === 'admin' && isAdminEmail )){
            //     // console.log(1,"->", isAdminEmail)
            //     setWrongMessage(false);
            //     setLoggedInUser(curUser);
            //     history.replace('/');
            // }
            // else if( location.state && myUser === 'client'){
            //     // console.log(2,"->", isAdminEmail)
            //     setLoggedInUser(curUser);
            //     setWrongMessage(false);
            //     history.replace(from);
            // }
            // else if( location.state && myUser === 'admin' && isAdminEmail ){
            //     // console.log(3,"->", isAdminEmail);
            //     setLoggedInUser(curUser);
            //     setWrongMessage(false);
            //     history.replace(from);
            // }
            // else{
            //     // console.log(4,"->", isAdminEmail)
            //     setLoggedInUser({});
            //     setWrongMessage("Sorry!!! you are not an admin of travel solution")
            // }
            
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage, loggedInUser);
        });
    }
    // console.log(loggedInUser);
    const handleUserClick = (userType) =>{
        setMyUser(userType);
    }
    return (
        <div className="bg-home">
            <div style={{position: 'relative',top: '35%'}} 
                className="d-flex justify-content-center"
         >
                <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" 
                    className="card rounded shadow p-5"
                >
                    <h1 onClick={() => handleClick()} className="btn btn-outline-warning d-flex align-items-center"><GoogleOutlined className="mt-1" /><span className="mx-2"> Login With Google</span></h1>

                </div>
            </div>
        </div>
    );
};

export default Login;