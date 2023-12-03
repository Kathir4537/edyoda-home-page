import React from 'react';
import './App.css';
import { TfiAngleDown } from "react-icons/tfi";
function Header() {
    return (
        <div className='head-containor'>
            <div className='left-head'>
                <div className='head-logo'>
                    <div className='top-head'>EDYODA</div>
                    <p className='down-head'>Stories</p>
                </div>
                <div className='head-explore'>
                    <p>Explore Categories</p>
                    <div className='drop-down'><TfiAngleDown /></div>
                </div>
            </div>
            <div className='right-head'>
                <p>EdYoda is a learning and knowledge
                    sharing platform for techies</p>
                <button>Go To Main Website</button>
            </div>
        </div>
    )
}

export default Header;