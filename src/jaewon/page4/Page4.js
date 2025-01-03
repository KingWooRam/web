import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './styles4';
import { PiPottedPlantDuotone } from "react-icons/pi";
import Contents from './Contents.js';

function Page4() {
    return (
        <div className="Page4" style={style.pageContainer}>
            <p className='PageTitle' style={style.pageTitle}>
                <span style={style.potIcon}><PiPottedPlantDuotone /></span >
                <span style={style.titleText}>끝말잇기</span>
            </p>

            <Contents></Contents>

            <p className='PageNum' style={style.pageNum}>3</p>

            <Link to="/page3" style={{ marginRight: '10px' }}>이전</Link>
            <Link to="/page5">다음</Link>
        </div>
    );
}

export default Page4;
