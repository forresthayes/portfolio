import Project from 'src/components/Project'

import cover from './cover.png'
import main from './main.png'
import form from './form.png'
import highScore from './high_score.png'
import warning from './warning.png'

const TypeDash = () => {
  const slides = [main, form, highScore, warning]
  const description =
    'How fast can you type a Shakespearean sonnet? Type Dash calculates your speed in words per minute, ' +
    'records high scores, and blocks copy - and - paste cheating.'

  const tags = ['React', 'Rails', 'Bulma']

  return <Project title="Type Dash" {...{ cover, slides, description, tags }} />
}

export default TypeDash
