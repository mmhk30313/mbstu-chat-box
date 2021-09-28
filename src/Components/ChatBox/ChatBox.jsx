import React from 'react';

const ChatBox = ({user1,user2}) => {
    return (
        <div>
            <div className="position-relative border-bottom">
                {
                    user2.name &&<>
                        <div className="sticky-top">
                            <div className="bg-light shadow p-3 border-bottom d-flex justify-content-between">
                                <img className="rounded-circle shadow border" style={{height: "70px", width: "70px"}} src={user2?.img} alt="" />
                                <h3 className="align-items-center my-auto">{user2?.name}</h3>
                            </div>
                        </div>
                        <div style={{height: "77.6vh"}} className="left-section p-3 message">
                            {
                                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, idx) => {
                                    return <div className="card p-2 m-2">
                                        <p>{"name"+ (idx+1)}</p>
                                    </div>
                                })
                            }
                        </div>
                    </>
                }
            </div>
            <div className="position-relative border-top">
                {
                    user2.name && <div className="">
                        <div className="bg-light shadow p-3 border-bottom d-flex justify-content-between">
                            <img className="rounded-circle shadow border" style={{height: "70px", width: "70px"}} src={user2?.img} alt="" />
                            <h3 className="align-items-center my-auto">{user2?.name}</h3>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ChatBox;