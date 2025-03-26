import React, {useEffect, useState} from "react";

export function Counter() {
    let [quantity, setQuantity] = useState(5)
    let [price, setPrice] = useState(5)
    let [result, setResult] = useState(quantity * price)

    useEffect(() => {
        setResult(quantity * price);
    }, [quantity, price]); // Оновлюємо result при зміні data або price

    const quantityUp = () => {
        setQuantity(quantity + 1)
    }
    const quantityLow = () => {
        setQuantity(quantity - 1)
    }
    const priceUp = () => {
        setPrice(price + 1)
    }
    const priceLow = () => {
        setPrice(price - 1)
    }
    return <div>
        <span> Quantity : </span>
        <button onClick={() => quantityUp()}>+</button>

        <span> {quantity} </span>
        <button onClick={() => quantityLow()}>-</button>

        <span> Price : </span>
        <button onClick={() => priceUp()}>+</button>
        <span> {price} </span>
        <button onClick={() => priceLow()}>-</button>

        <span> result : </span>

        <span> {result} </span>

    </div>
}