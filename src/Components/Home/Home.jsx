import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleOutlined } from "@ant-design/icons";
import Login from '../Login/Login';
const Home = () => {
    return (
        <div className="bg-home">
            <h1 data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" 
                className="text-light text-center " 
                style={{position: 'relative',top: '30%'}}
            >   
                MBSTU CHAT BOX
            </h1>
            <div style={{position: 'relative',top: '30%'}} className="d-flex justify-content-center">
                <div className="card bg-transparent rounded p-5">
                    <Link className="btn btn-outline-info d-flex align-items-center" to="/client">Start Your Chatting</Link>
                    {/* <Link className="btn btn-outline-warning d-flex align-items-center" to="/login"><GoogleOutlined className="mt-1" /><span className="mx-2"> Login With Google</span></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Home;