import React from 'react'
// automatic arrow function

const Coin = ({ name, image, symbol, price, volume, rank,pricechange}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1 className='coin-name col'>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
                </div>
                
            
            <div className="coin-data">
                <p className="coin-price col">{price}€</p>
                
                <p className="coin-volume col">{volume.toLocaleString()
                }€</p>
                
                {pricechange < 0 ? (
                    <p className="coin-percent col red">{pricechange.toFixed(2)}%</p>
                ) :
                    <p className="coin-percent col green">{pricechange.toFixed(2)}%</p>
            }
            </div>
            </div>
            
        </div>
    )
}

export default Coin
