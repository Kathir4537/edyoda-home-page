import React from 'react';
import './App.css';
import { FaFilter } from "react-icons/fa";

const Category = () => {
    return (
        <section className='category-containor'>
            <div className='category-head'>Latest Posts</div>
            <div className='category-filter'>
                <FaFilter className='filte-icon'></FaFilter><span className='filter-head'>Filter by Category</span>
            </div>
            <div className='category-flex'>
                <ul>
                    <li>All</li>
                    <li>Artificial Intelligence
                    </li>
                    <li>Cloud Computing
                    </li>
                    <li>DevOps</li>
                    <li>Programming Languages
                    </li>
                    <li>Mobile Application Development</li>
                    <li>Technology and Tools</li>
                    <li>Get a Job in a Tech Company</li>
                    <li>Others</li>
                </ul>
            </div>
        </section>
    )
}

export default Category;