import './Stats.scss'
import bitcoin from '../../assets/images/bitcoin.png'
import dogecoin from '../../assets/images/dogecoin.png'
import ethereum from '../../assets/images/ethereum.png'
import notFound from '../../assets/images/notfound.png'
import { useState, useEffect } from 'react'
import PredictionCard from '../PredictionCard/PredictionCard'

export default function Stats(props) {
    const [crypto, setCrypto] = useState({})

    const cryptoData = [
        {
            "name": "bitcoin",
            "image": bitcoin,
            "fluctuations": "The price is determined by many factors, including supply and demand, competition and even current events. In some ways, it acts similarly to gold and other traditionally traded commodities. As with any investment, you should consider volatility when you’re considering investing in cryptocurrencies. Learn more about volatility here.",
            "coinName": "BTC",
            "investments": [
                {
                    "time": "1 year Ago",
                    "return": "+1,900.37",
                    "color": "green"
                },
                {
                    "time": "6 months Ago",
                    "return": "+195.96",
                    "color": "green"
                },
                {
                    "time": "3 months Ago",
                    "return": "+133.56",
                    "color": "green"
                },
                {
                    "time": "1 month Ago",
                    "return": "-152.16",
                    "color": "red"
                },
                {
                    "time": "24 hours Ago",
                    "return": "-72.92",
                    "color": "red"
                }
            ]
        },
        {
            "name": "dogecoin",
            "image": dogecoin,
            "fluctuations": "The price is determined by many factors, including supply and demand, competition and even current events. In some ways, it acts similarly to gold and other traditionally traded commodities. As with any investment, you should consider volatility when you’re considering investing in cryptocurrencies. Learn more about volatility here.",
            "coinName": "DOGE",
            "investments": [
                {
                    "time": "1 year Ago",
                    "return": "+$95,534.05",
                    "color": "green"
                },
                {
                    "time": "6 months Ago",
                    "return": "-$381.17",
                    "color": "red"
                },
                {
                    "time": "3 months Ago",
                    "return": "-$223.38",
                    "color": "red"
                },
                {
                    "time": "1 month Ago",
                    "return": "+$228.27",
                    "color": "green"
                },
                {
                    "time": "24 hours Ago",
                    "return": "+$183.46",
                    "color": "green"
                }
            ]
        },
        {
            "name": "ethereum",
            "image": ethereum,
            "fluctuations": "The price is determined by many factors, including supply and demand, competition and even current events. In some ways, it acts similarly to gold and other traditionally traded commodities. As with any investment, you should consider volatility when you’re considering investing in cryptocurrencies. Learn more about volatility here.",
            "coinName": "ETH",
            "investments": [
                {
                    "time": "1 year Ago",
                    "return": "+$6,213.19",
                    "color": "green"
                },
                {
                    "time": "6 months Ago",
                    "return": "+$712.04",
                    "color": "red"
                },
                {
                    "time": "3 months Ago",
                    "return": "+$251.80",
                    "color": "red"
                },
                {
                    "time": "1 month Ago",
                    "return": "+$213.63",
                    "color": "green"
                },
                {
                    "time": "24 hours Ago",
                    "return": "+$41.48",
                    "color": "green"
                }
            ]
        }
    ]

    useEffect(() => {
        setCrypto(cryptoData[0])
    }, [])

    const handleSearch = (event) => {
        if(event.key === 'Enter') {
            let found = false
            event.preventDefault()
            cryptoData.forEach((data) => {
                if(data.name === event.target.value.toLowerCase()) {
                    found = true
                    setCrypto(data)
                }
            })
            if(!found) {
                setCrypto({
                    image: notFound,
                    fluctuations: "The cryptocurrency you searched for does not exist."
                })
            }
        }
    }

    return (
        <div className='stats'>
            <h1 className='stats-title'>See it in Action</h1>
            <p className='stats-text'>Type a cryptocurrency into the searchbar to see how its been performing</p>
            <form>
                <input onKeyPress={handleSearch} type='text' className='stats-search' placeholder='Search...'/>
            </form>
            <div className='stats-container'>
                <img src={crypto.image} className="stats-image" alt='stats'/>
                <div className='fluctuation'>
                    <h2 className='fluctuation-title'>Fluctuations</h2>
                    <p className='fluctuation-text'>{crypto.fluctuations}</p>
                </div>
            </div>
            <h2 className='predictions-title'>{crypto.investments && `If you invested $1000 in ${crypto.coinName}...`}</h2>
            <div className='predictions'>
                {crypto.investments && crypto.investments.map((card) => (
                    <PredictionCard card={card}/>
                ))}
            </div>
            <div className='risk'>
                <div className='risk-title-container'>
                    <div className='risk-icon'/>
                    <h2 className='risk-title'>All investments carry a degree of risk</h2>
                </div>
                <p className='risk-text'>It’s important to consider your comfort with risk before making any investments. With high risk investments, there’s potential for big returns, but this isn’t the best investment strategy for everyone.</p>
            </div>
        </div>
    )
}