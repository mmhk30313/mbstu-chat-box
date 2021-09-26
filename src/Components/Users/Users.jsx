import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import user from "../../images/cse-logo.png";
import ChatBox from '../ChatBox/ChatBox';
import { all_users } from '../utils/fakeData';
import './Users.css';

const Client = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [users, setUsers] = useState(all_users);
    const [chatWithUser, setChatWithUser] = useState({});
    return (
        <main className="position-relative d-flex justify-content-center">
            <div className="w-25 border left-section" style={{position: "stick", height: "100vh"}}>
                <div className="sticky-top">
                    <div className="bg-light shadow p-3 border-bottom d-flex justify-content-between">
                        <img className="rounded-circle shadow border" style={{height: "70px", width: "70px"}} src={loggedInUser?.photoURL} alt="" />
                        <h3 className="align-items-center my-auto">{loggedInUser?.displayName}</h3>
                    </div>
                </div>
                {
                    users.map((user, idx) => <div 
                        onClick={() => setChatWithUser(user)}
                        style={{cursor: "pointer"}} 
                        className="card m-2 py-2 px-3"
                    >
                        <div className="d-flex justify-content-between">
                            <img className="rounded-circle" style={{height: "60px", width: "70px"}} src={user?.img} alt="M" />
                            <div className="my-auto">
                                <p>{user?.name}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-75 border" style={{position: "stick", overflowY: "scroll", height: "100vh"}}>
                {
                    <ChatBox user={loggedInUser} userFriend={chatWithUser}/>
                }
            </div>
        </main>
    );
};

export default Client;