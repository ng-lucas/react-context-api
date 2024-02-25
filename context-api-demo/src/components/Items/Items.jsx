import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { convertToUSD, capitalizeFirstChar } from '../../helper';
import styles from './Items.module.scss';

export default function Items() {
  const { items } = useContext(AppContext);

  return (
    <div className='cards-wrapper container-fluid px-1'>
      <div className="row">
        {items && items.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card p-2">
              <img src={item.image} className={`card-img-top ${styles.image}`} alt="..." />
              <div className="card-body px-1 pb-0">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className='card-title text-primary fs-6 mb-0' style={{textDecoration: 'none'}}><b>{ capitalizeFirstChar(item.name)}</b></a>
                  <b className="card-text text-warning">{convertToUSD(item.price)}</b>
                </div>
                <div className="">
                  <p className="mb-0 text-secondary">Company: <b>{ capitalizeFirstChar(item.company) }</b></p>
                  <span className="mb-0 text-secondary fw-light" style={{ fontSize: '14px' }}>{ item.category }</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  )
}

