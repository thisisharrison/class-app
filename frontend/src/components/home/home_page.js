import { Container, Grid } from '@material-ui/core'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { HomePageHeroCTA } from '../styles/styles';

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
          <Grid container>
            <div className="hero-image-container">
              <Grid item sm={12} md={12}>
                <GridList>
                  <GridListTile key='Img1' rows={3}>
                    <img src='https://tn.fishki.net/26/upload/en/201305/16/10539/249ef8594bfc63ff717e6048dc454285.jpg' alt='Img1' />
                  </GridListTile>
                  <GridListTile key='Img2' rows={3}>
                    <img src='https://tn.fishki.net/26/upload/en/201305/16/10539/f6a0aefbf36aa3feee14cd6fc7013603.jpg' alt='Img2' />
                  </GridListTile>
                </GridList>
              </Grid>
              <div className="homepage-hero-cta">
                <HomePageHeroCTA as="a" href="#/classes">EXPLORE CLASSES</HomePageHeroCTA>
              </div>
            </div>
          </Grid>
        </div>
        
        <Grid container alignItems="center">
          <Grid item sm={12} md={6}>
            <h2>Sweat with Us Virtually on our Class App.</h2>
          </Grid>
          <Grid item sm={12} md={6}>
            <p className="homepage-hero-paragraph">Our newest Online Class Experience platform connects you with our Kitten Ambassadors around the globe.</p>
          </Grid>
        </Grid>
        <footer>
          <p>Coming Soon 🚧</p>
          <p>Copyright &copy; 2021 H.L.</p>
        </footer>
      </Container>
    </div>
  )
}

export default HomePage;