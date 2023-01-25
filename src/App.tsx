import {AppContext} from './core/AppContext'
import './styles/global.css'

function App() {
  return (
    <AppContext.Provider value='to-do-list' >
     <main>
      hello
     </main>
    </AppContext.Provider>
  );
}

export default App;
