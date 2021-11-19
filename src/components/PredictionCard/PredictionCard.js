import './PredictionCard.scss'

export default function PredictionCard(props) {
    return (
        <div className='prediction-card'>
            <p className='prediction-card-time'>{props.card.time}</p>
            <div className='return-container'>
                <p className={`return ${props.card.color}`}>{props.card.return}</p>
            </div>
        </div>
    )
}