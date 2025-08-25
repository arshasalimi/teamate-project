import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './component/partial/layout/Layout.jsx'
// import { Provider } from 'react-redux'
// import { store } from './store/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <Layout>
        <App />
      </Layout>
    {/* </Provider> */}
  </StrictMode>,
)
