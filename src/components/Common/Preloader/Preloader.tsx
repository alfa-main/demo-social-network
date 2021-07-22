import React from 'react';
import preloader from '../../../assets/img/preloader.gif';
import s from './Preloader.module.css';

let Preloader = () => {
    return <div className={s.preloader}>
        <img src={preloader} alt={preloader} />
    </div>
}

export default Preloader;