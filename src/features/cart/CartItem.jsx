/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import { getCurrentQuntityById } from './cartSlice'

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalprice } = item

    const currentQuntity = useSelector(getCurrentQuntityById(pizzaId))

    return (
        <li className="gap-2 py-4 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalprice)}
                </p>
                <UpdateItemQuantity pizzaId={pizzaId} currentQuntity={currentQuntity} />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
