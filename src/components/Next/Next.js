import './Next.scss'

export default function Next(props) {
    return (
        <div className='next'>
            <h1 className='next-title'>Ready to get started?</h1>
            <div className='next-cards'>
                <div className='next-card1'>
                    <p className='next-cards-title'>Start trading now</p>
                    <p className='next-cards-text'>We make it easy and secure to trade cryptocurrency. With commission free investing, instant deposits and 7 cryptocurrencies, you’re ready to hit the ground running!</p>
                    <div className='next-card-button'>Sign Up</div>
                </div>
                <div className='next-card2'>
                    <p className='next-cards-title'>Try our simulator</p>
                    <p className='next-cards-text'>Still not sure about investing in crypto? Explore trading risk-free with our simulator! Compete with friends, and earn rewards!</p>
                    <div className='next-card-button'>Coming Soon</div>
                </div>
            </div>
        </div>
    )
}