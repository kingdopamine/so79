import React, {useState, useRef, useEffect} from 'react';


import './Checkout.css'


function Checkout(props){
    
    const [loaded, setLoaded] = useState(false);
   // const [SO79Collection, setSO79Collection] = useState(props.SO79Collection)
    

    let paypalRef = useRef();

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = 'https://www.paypal.com/sdk/js?client-id=AY0utaXPaeCSsq49hSwH_m98xzDJ6NOV622FT6owdF5epOtt3pus4LUwmT5o_Eh_p03JSzlyp1o0qPYh&currency=GBP';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);

        if(loaded){
           setTimeout(()=>{
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: 'SO79',
                                        amount: {
                                            currency_code: 'GBP',
                                            value: props.SO79CollectionSubtotal
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();
                            
                            

                            console.log(order);
                        }
                    })
                    .render(paypalRef).then(console.log(props.SO79Collection));
            });
        }

    });

    


return(
    <div> 
        <div id="checkoutList">
            <h1>Your Cart:</h1>
            <table id="checkoutTable">
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            {
            props.SO79Collection.map((collection)=>{
                return <tr>
                            <th>{collection.name}</th>
                            <th>{collection.quantity}</th>
                            <th>{collection.price}</th>
                        </tr>    
            })}
            <tr id="lastRow">
                <th>Total:</th>
                <th></th>
                <th>£{props.SO79CollectionSubtotal}</th>
            </tr>
            </table>
        </div>
             
        <div id="checkoutButton" ref={v => (paypalRef = v)}/>
    </div>
)

}


export default Checkout