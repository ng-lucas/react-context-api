import styles from './ItemsHeader.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Sort from '../Sort/Sort';

export default function ItemsHeader() {
  const { items } = useContext(AppContext);
  
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex">
        <button className={`${styles.btnDisplay}`}><i className='bx bx-grid-alt fs-5' ></i></button>
        <button className={`${styles.btnDisplay}`}><i className='bx bx-menu fs-5'></i></button>
      </div>

      <div className="">
        <h4>{`${items.length} Products Found`}</h4>
      </div>

      <div>
        <Sort/>
      </div>
      
    </div>
  )
}