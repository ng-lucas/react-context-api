import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [items, setItems] = useState(null);
  const [option, setOption] = useState('default');
  const [inputValue, setInputValue] = useState('');

  //select company name
  const [selectedCompany, setSelectedCompany] = useState(null);

  //select category name
  const [selectedCategory, setSelectedCategory] = useState(null);

  //search data
  const [searchQuery, setSearchQuery] = useState('');


  const clearData = () => {
    setSelectedCompany(null);
    setSelectedCategory(null);
    setSearchQuery('');
    setInputValue('');
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch('http://localhost:8888/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }
    fetchCategory();
  }, [])

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch('http://localhost:8888/companies');
      const data = await response.json();
      setCompanies(data);
    }
    fetchCompanies();
  }, [])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:8888/products');
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, [])

  return <AppContext.Provider 
    value={{
      categories,
      companies,
      items,
      option,
      setOption,
      selectedCompany,
      setSelectedCompany,
      selectedCategory,
      setSelectedCategory,
      searchQuery, 
      setSearchQuery,
      inputValue,
      setInputValue,
      clearData
    }}>
    {children}
  </AppContext.Provider>
}