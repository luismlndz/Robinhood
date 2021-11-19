import './Stats.scss'
import bitcoin from '../../assets/images/bitcoin.png'
import notFound from '../../assets/images/notfound.png'
import { useState, useEffect } from 'react'

export default function Stats(props) {
    const [crypto, setCrypto] = useState({})

    const cryptoData = [
        {
            "name": "bitcoin",
            "image": bitcoin,
            "fluctuations": "The price of Bitcoin is determined by many factors, including supply and demand, competition and even current events. In some ways, it acts similarly to gold and other traditionally traded commodities. As with any investment, you should consider volatility when you’re considering investing in cryptocurrencies. Learn more about volatility here. "
        },
        {
    
        },
        {
    
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
            <h1 className='stats-title'>See Crypto in Action</h1>
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
        </div>
    )
}