import { useState} from 'react';

import Feedback from './Feedback/Feedback'
import Section from './Section/Section';
import Statistics from './Statistics';
import Notification from 'components/Notification/Notification';

// import { feedbackOptions } from '../data/constans'

const startOptions = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [options, setOptions] = useState(startOptions);
  const { good, neutral, bad } = options;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const total = countTotalFeedback();

  const handleFeedback = feedback => {
    setOptions(prev => ({...prev, [feedback]: prev[feedback] + 1 }))
    
  };

//  const  handleFeedback = ({ target }) => {
//         const { feedback } = target.dataset;
//         setOptions((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
//       };

  

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  
    // const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    
  return (
      <div>
      <Section title='Please leave feedback'>
        <Feedback
          options={options}
          onClickFeedback={handleFeedback} />
      </Section>
        
        <Section title='Statistics'>
            {!total ? (
              <Notification message={'There is no feedback'} />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          
        </Section>
      </div>
    )
  }


export default App;




// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
// };

//   handleFeedback = ({ target }) => {
//     const { feedback } = target.dataset;
//     this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   }

  
  
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//       <Section title='Please leave feedback'>
//         <Feedback options={FEEDBACK_OPTIONS} onClickFeedback={this.handleFeedback} />
//       </Section>
        
//         <Section title='Statistics'>
//             {!total ? (
//               <Notification message={'There is no feedback'} />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={positivePercentage}
//               />
//             )}
          
//         </Section>
//       </div>
//     )
//   }
// }

// export default App;
