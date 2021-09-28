import React, { useContext, useEffect, useState } from 'react';
import { Spin, Space } from 'antd';
import { UserContext } from '../../App';
import user from "../../images/cse-logo.png";
import { all_users } from '../../utils/fakeData';
import ChatBox from '../ChatBox/ChatBox';
import './Users.css';
import { getUsers, setUser } from '../Services/User.Service';

const Client = () => {
    const [loggedInUser, setLoggedInUser, users, setUsers] = useContext(UserContext);
    const [filterUsers, setFilterUsers] = useState([]);
    const [user1, setUser1] = useState(loggedInUser);
    const [user2, setUser2] = useState({});
    const addUserDB = async(curUser) => {
        const result = await setUser({body: curUser});
        setUsers(result);
        const user1 = result?.find(user => user.email === curUser?.email);
        const otherUsers = result.filter(user => user.email != curUser.email);
        setFilterUsers(otherUsers);
        setUser1(user1);
        setLoggedInUser(user1);
        // console.log({result});
    }
    const getUsersWithoutCurrentUser = async(curUser) => {
        console.log({curUser});
        const result = await getUsers();
        console.log({result});
        
        const user1 = result?.find(user => user.email === curUser?.email);
        // console.log({flag});
        const otherUsers = result.filter(user => user.email != curUser.email);
        if(!user1?.email) {
            addUserDB(curUser);
            // otherUsers.push(curUser);
        }else{
            setFilterUsers(otherUsers);
            setUser1(user1);
            setLoggedInUser(user1);
        }
        // console.log({otherUsers});
        // history.replace(from);
    }
    useEffect(() => {
        getUsersWithoutCurrentUser(loggedInUser);
    }, [""])
    return (
        <main className="position-relative d-flex justify-content-center">
            {
                filterUsers?.length < 1 ? <div style={{top: "250px"}} className="position-relative">
                    <Spin size="large" />
                </div>
                : <>
                    <div className="w-25 border left-section" style={{position: "stick", height: "100vh"}}>
                        <div className="sticky-top">
                            <div className="bg-light shadow p-3 border-bottom d-flex justify-content-between">
                                <img className="rounded-circle shadow border" style={{height: "70px", width: "70px"}} src={loggedInUser?.img} alt="" />
                                <h5 className="align-items-center my-auto">{loggedInUser?.name}</h5>
                            </div>
                        </div>
                        {
                            filterUsers.map((user, idx) => <div 
                                onClick={() => setUser2(user)}
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
                    <div className="w-75 border" style={{position: "stick", height: "100vh"}}>
                        {
                            <ChatBox user1={user1} user2={user2}/>
                        }
                    </div>
                </>
            }
        
        </main>
    );
};

export default Client;