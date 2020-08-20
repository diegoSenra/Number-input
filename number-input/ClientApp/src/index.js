import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageDefault from './components/pageDefault/PageDefault'
import App from './App'
import DbForm from './components/Forms/DbForm'
import SumForm from './components/Forms/SumForm'

import './index.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  
  <BrowserRouter>
    <PageDefault>
      <Switch>
        <Route path="/sumForm" component={SumForm} />
        <Route path="/dbForm" component={DbForm} />
        <Route path="/" component={App} exact/>
        <Route component={()=> <div>404 PAGE NOT FOUND</div>} />
      </Switch>
    </PageDefault>
  </BrowserRouter>,
  rootElement)

