import PropTypes from 'prop-types'
import css from './Feedback.module.css'

const FeedbackButton = ({ feedback, onClickFeedback }) => {
    return (<button type='button' data-feedback={feedback} onClick={onClickFeedback} className={css.Feedback__buttn}>
        {feedback}
    </button>)
}

const Feedback = ({ options, onClickFeedback }) => {
    return options.map(options => <FeedbackButton feedback={options} onClickFeedback={onClickFeedback}/>)
}

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onClickFeedback: PropTypes.func.isRequired,
}

export default Feedback;