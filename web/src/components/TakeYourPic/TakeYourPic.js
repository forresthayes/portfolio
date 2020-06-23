import Project from 'src/components/Project'

import cover from './cover.png'
import main from './main.png'
import cart from './cart.png'
import placeOrder from './place_order.png'
import success from './success.png'

const TakeYourPic = () => {
  const slides = [main, cart, placeOrder, success]
  const description =
    'Use this interactive photo-selecting app to "heart" your favorite pics or add them to your cart for purchase.'

  const tags = ['React', 'Chakra UI', 'Unsplash', 'RedwoodJS']
  const links = {
    live: 'https://jovial-wing-579d23.netlify.app',
    github: 'https://github.com/forresthayes/picshop',
  }

  return (
    <Project
      title="Take Your Pic"
      {...{ cover, slides, description, tags, links }}
    />
  )
}

export default TakeYourPic
