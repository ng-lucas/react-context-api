import './App.css'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import ItemsHeader from './components/ItemsHeader/ItemsHeader'
import Sidebar from './components/Sidebar/Sidebar'
import { AppProvider } from './context/AppContext'

function App() {
  
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <AppProvider>
            <div className="col-lg-3">
              <Sidebar/>
            </div>

            <div className="col-lg-9">
              <ItemsHeader />
              <Items/>
            </div>
          </AppProvider>
        </div>
      </div>
    </>
  )
}

export default App
