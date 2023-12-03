import React from 'react';
import './App.css';

const GridCard = (props) => {
    const renderGridCard = props.Datas.map((Data) => {
        return (
            <div className='grid-cont'>
                <div key={Data.id} className='grid-card'>
                    <img classname='card-img' src={Data.imgURL} alt='img' />
                    <div className='about-card'>
                        <div className='card-title'>{Data.title}</div>
                        <div className='card-sub'>
                            <div className='card-author'>{Data.author}</div>
                            <div className='card-date'>{Data.date}</div>
                        </div>
                        <div className='card-descript'>{Data.description}</div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className='grid-containor'>{renderGridCard}</div>
    );
};

export default GridCard;