import { Page, Navbar, List, Toolbar, Link, Icon, Button } from 'konsta/react'
import categoryStore from '../stores/category'
import { MdLogin } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import labels from '../config/labels';
import { useState } from 'react';

const Home = () => {
  const [mainPages] = useState(() => [
    {id: '1', name: labels.orders, path: '/orders'},
    {id: '2', name: labels.stores, path: '/stores'},
    {id: '3', name: labels.products, path: '/products/0'},
    {id: '4', name: labels.purchases, path: '/purchases'},
    {id: '5', name: labels.customers, path: '/customers'},
    {id: '6', name: labels.stock, path: '/stock'},
    {id: '7', name: labels.spendings, path: '/spendings'},
    {id: '8', name: labels.notifications, path: '/notifications'}
  ])
  let i = 0
  let navigate = useNavigate()
  const stateCategories = categoryStore(state => state.categories)
  return (
    <Page>
      <Navbar title={labels.appTitle} />
      <Toolbar className="left-0 bottom-0 fixed w-full">
        <Link toolbar iconOnly onClick={() => navigate('/login')}>
          <Icon ios={<MdLogin className="w-6 h-6" />} material={<MdLogin className="w-6 h-6" />}/>
        </Link>
      </Toolbar>
      <List>
        {mainPages.map(p => 
          <Button key={p.id} large rounded outline className='m-3 w-full' href={p.path}>{p.name}</Button>
        )}
      </List>
    </Page>
  )
}

export default Home
