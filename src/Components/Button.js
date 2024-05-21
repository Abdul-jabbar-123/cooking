import React from 'react';
import './Navbar.css';
import { AiOutlineRight } from "react-icons/ai";

const Button = ({ text, onClick, style }) => {
    return (
        <div>
            <button onClick={onClick} style={style}>{text}<AiOutlineRight className='icons'/></button>
        </div>
    );
};

export default Button;
