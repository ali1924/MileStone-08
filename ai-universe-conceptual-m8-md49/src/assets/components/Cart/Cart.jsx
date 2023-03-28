import React, { useEffect, useState } from 'react';
import CartData from '../CartData/CartData';
// import React, { useEffect, useState } from 'react';
const Cart = () => {
    // 1. use state
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            // console.log(data.data.tools);
            setData(data.data.tools);
        }
        loadData();
    }, [])
    // console.log(data[1]);
    // const { id, name, description, image, published_in } = data[1];
    // console.log(name);
    // const { features, links } = data[1];
    // console.log(features);

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-16">
                {
                    // data.map(data=>console.log(data))
                    data.map(cartData => {
                        // console.log(singleData);
                        return <CartData
                            cartData={cartData}
                            key={cartData.id}
                        ></CartData>

                    }
                    )
                }
            </div>
        </div>
    )
};

export default Cart;