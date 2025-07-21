import React from 'react'
import StripeConnection from './StripeConnection';
import Transactions from './Transactions';

function Payments() {
    const [isConnected, setIsConnected] = React.useState(false);

    return (
        isConnected ? (
            <Transactions />
        ) : (
            <StripeConnection />
        )
    );
}

export default Payments