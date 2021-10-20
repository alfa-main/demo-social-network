import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemType = {
  name: string
  id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
