import React from 'react';

const ChatBox = ({user,userFriend}) => {
    return (
        <div className="position-relative">
            {
                userFriend.name && <div className="sticky-top">
                    <div className="bg-light shadow p-3 border-bottom d-flex justify-content-between">
                        <img className="rounded-circle shadow border" style={{height: "70px", width: "70px"}} src={userFriend?.img} alt="" />
                        <h3 className="align-items-center my-auto">{userFriend?.name}</h3>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default ChatBox;