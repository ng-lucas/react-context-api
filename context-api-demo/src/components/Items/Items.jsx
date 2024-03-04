import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { convertToUSD, capitalizeFirstChar } from '../../helper';
import styles from './Items.module.scss';

export default function Items() {
  const { items, option, selectedCompany, selectedCategory } = useContext(AppContext);
  const [dataItems, setDataItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (items && option !== 'default') {
      let sortedItems;
  
      switch (option) {
        case 'a-z':
          sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'z-a':
          sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'company':
          sortedItems = [...items].sort((a, b) => a.company.localeCompare(b.company));
          break;
        case 'category':
          sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
          break;
        case 'low-to-high':
          sortedItems = [...items].sort((a, b) => a.price - b.price);
          break;
        case 'high-to-low':
          sortedItems = [...items].sort((a, b) => b.price - a.price);
          break;
        default:
          sortedItems = items;
      }
      setDataItems(sortedItems);
    } else if (items) {
      let filteredItems = items;
  
      if (selectedCompany) {
        filteredItems = filteredItems.filter(item => item.company === selectedCompany);
      }
  
      if (selectedCategory) {
        filteredItems = filteredItems.filter(item => item.category === selectedCategory);
      }
  
      setDataItems(filteredItems);
    }
    setIsLoading(false);
  }, [items, option, selectedCompany, selectedCategory])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='cards-wrapper container-fluid px-1'>
      <div className="row">
        {dataItems.map((item, index) => (
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