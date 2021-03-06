import { Container, Grid } from '@material-ui/core'
import { HomePageHeroCTA } from '../styles/styles';
import HeroImage from './hero_image';

const HomePage = () => {
  return (
    <div>
      <Container maxwidth='sm'>
        <div className="hero">
          <div className='homepage-hero-links'>
            <h1>lulukittens</h1>
            <ul>
              <li>Kitten's What's New</li>
              <li>Cat's What's New</li>
              <li>All Kittens</li>
              <li>All Cats</li>
              <li>All Accessories</li>
            </ul>
          </div>
          <div className="hero-image-container">
          <Grid container alignItems="flex-end">
            <Grid item lg={1}></Grid>
            <Grid item xs={12} lg={11} cols={2}>
                <HeroImage img1={'https://tn.fishki.net/26/upload/en/201305/16/10539/249ef8594bfc63ff717e6048dc454285.jpg'} 
                  img2={'https://tn.fishki.net/26/upload/en/201305/16/10539/f6a0aefbf36aa3feee14cd6fc7013603.jpg'}
                />
            </Grid>
          </Grid>
            <div className="homepage-hero-cta">
              <HomePageHeroCTA as="a" href="#/classes">EXPLORE CLASSES</HomePageHeroCTA>
            </div>
          </div>
        </div>
        
        <Grid container>
          <Grid item xs={false} lg={1}></Grid>
          <Grid item xs={12 }lg ={11}>
            <Grid container alignItems="baseline" justify="center">
              <Grid item sm={12} md={6}>
                <h2 className="homepage-hero-h2">Sweat with Us Virtually on our Class App.</h2>
              </Grid>
              <Grid item sm={12} md={6}>
                <p className="homepage-hero-paragraph">Our newest Online Class Experience connects you with our Kitten Ambassadors around the globe.</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <footer>
          <p>Copyright &copy; 2021 H.L.</p>
        </footer>
      </Container>
    </div>
  )
}

export default HomePage;