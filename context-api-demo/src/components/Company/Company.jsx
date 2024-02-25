import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Company() {
  const { companies } = useContext(AppContext);
  
  return (
    <div>
      <h4>Company</h4>
      <div className="category-items">
        {companies && companies.map((company, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id={`company-${index}`} />
            <label className="form-check-label" htmlFor={`company-${index}`}>
              { company }
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}