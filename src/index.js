import './utils/setRem'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '@/stores'
import Route from './router'
import './index.scss'
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  console.log(Component)
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

registerServiceWorker();
