import React from 'react'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import { CartContext } from './CartContext'

const List = ({ items }) => {
  const { handlers } = React.useContext(CartContext)

  return (
    <div className={'list'}>
      <h2>Products</h2>
      { items.map(item =>
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>
            <button className={'addToCart'} onClick={(e) => handlers.addItem(item)}>
              <AddShoppingCart style={{ fontSize: 16 }} />
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default List
