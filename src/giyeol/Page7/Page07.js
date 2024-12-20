import React from 'react';
import { Link } from 'react-router-dom';
import  style  from './styles';

function Page7() {
    return (
        <div className="Page7" style={style.cBox}>
            <Link to={'/page6'}>p.6 이동</Link>
            <Link to={'/page8'}>p.8 이동</Link>

        </div>
    );
}

export default Page7;