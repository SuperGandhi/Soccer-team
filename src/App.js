import React from 'react';
import {Provider} from 'react-redux';
import Players from './components/Players';
import TeamSelect from './components/TeamSelect';
import store from './store'
import "./styles/styles.scss"


const App = () => {
  return (
  <Provider store={store}> 
    <main>
      <h1>Soccer Team Dream!</h1>
      <Players/>
      <TeamSelect/>
    </main>
  </Provider>
  )
}

export default App;
