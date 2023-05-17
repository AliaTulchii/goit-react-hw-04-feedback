import PropTypes from 'prop-types'
import css from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>           
                <ul className={css.Feedback__list}>
                    <li className={css.Feedback__item}>
                        <p className={css.Feedback__text}>
                        Good:
                        </p>
                        <span className={css.Feedback__value}>
                        {good}
                        </span>
                    </li>
                    
                        <li className={css.Feedback__item}>
                        <p className={css.Feedback__text}>
                        Neutral:
                        </p>
                        <span className={css.Feedback__value}>
                        {neutral}
                        </span></li>
                        <li className={css.Feedback__item}>
                        <p className={css.Feedback__text}>
                        Bad:
                        </p>
                        <span className={css.Feedback__value}>
                        {bad}
                        </span></li>
                    
                        <li className={css.Feedback__item}>
                        <p className={css.Feedback__text}>
                        Total:
                        </p>
                        <span className={css.Feedback__value}>
                        {total}
                        </span>
                    </li>
                    
                    <li className={css.Feedback__item}>
                        <p className={css.Feedback__text}>
                        Positive feedback:
                        </p>
                        <span className={css.Feedback__value}>
                        {positivePercentage}%
                        </span>
                    </li>
                </ul>
                
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;