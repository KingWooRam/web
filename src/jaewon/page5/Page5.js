import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './styles5';
import { PiPottedPlantDuotone } from "react-icons/pi";
import Contents from './Contents';

function Page5() {
    return (
        <div className="Page5" style={style.pageContainer}>
            <p className='PageTitle' style={style.pageTitle}>
                <span style={style.potIcon}><PiPottedPlantDuotone /></span >
                <span style={style.titleText}>입출금 계산하기</span>
            </p>

            <Contents></Contents>

            <p className='PageNum'>4</p>

            <Link to={'/page4'}>p.4 이동</Link>
            <Link to={'/page6'}>p.6 이동</Link>

        </div>
    );
}

export default Page5;
