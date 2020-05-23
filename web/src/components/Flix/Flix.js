import Project from 'src/components/Project'

import cover from './cover.png'
import index from './index.png'
import movie from './movie.png'
import newReview from './new_review.png'
import reviews from './reviews.png'

const Flix = () => {
  const slides = [index, movie, newReview, reviews]
  const description =
    'Flix is a movie review site where users can read plot summaries and previous reviews, ' +
    'rate movies on a five-star scale, and leave their own comments.'
  const tags = ['React', 'RedwoodJS', 'GraphQL', 'Bulma']

  return <Project title="Flix" {...{ cover, slides, description, tags }} />
}

export default Flix
