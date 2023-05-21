import PropTypes from 'prop-types'
import css from './Feedback.module.css'

const Feedback = ({ options, onClickFeedback }) => {
    const onBtnClick = feedback => () => {
        onClickFeedback(feedback);
    };

    return (
        <div>
            {Object.keys(options).map(feedback => {
                return (
                    <button
                        onClick={onBtnClick(feedback)}
                        className={css.Feedback__buttn}
                    > {feedback}</button>
                   
                );
            })}
        </div>
    )
}

  

// const FeedbackButton = ({ feedback, onClickFeedback }) => {
//     return (<button type='button' data-feedback={feedback} onClick={onClickFeedback} className={css.Feedback__buttn}>
//         {feedback}
//     </button>)
// }

// const Feedback = ({ options, onClickFeedback }) => {
//     return (
//         <div>
//             {options.map(option => <FeedbackButton feedback={option} onClickFeedback={onClickFeedback}/>)}
//         </div>
//     )
// }



Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onClickFeedback: PropTypes.func.isRequired,
}

export default Feedback;