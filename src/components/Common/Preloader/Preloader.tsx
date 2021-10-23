import { Spin } from 'antd';
import s from './Preloader.module.css';

let Preloader: React.FC = () => {
    return <Spin size={'large'} className={s.preloader} />
}

export default Preloader;