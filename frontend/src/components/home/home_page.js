import { Container, Grid } from '@material-ui/core'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { SecondarySubmitInput } from '../styles/styles';

const HomePage = () => {
  return (
    <div>
      <Container maxwidth='sm'>
        <Grid container xs>
          <Grid item xs={1}>
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
          </Grid>
          <Grid item xs={11}>
            <GridList>
              <GridListTile key='Img1' rows='3'>
                <img src='https://tn.fishki.net/26/upload/en/201305/16/10539/249ef8594bfc63ff717e6048dc454285.jpg' alt='Img1' />
              </GridListTile>
              <GridListTile key='Img2' rows='3'>
                <img src='https://tn.fishki.net/26/upload/en/201305/16/10539/f6a0aefbf36aa3feee14cd6fc7013603.jpg' alt='Img2' />
                <div className="homepage-hero-cta">
                  <SecondarySubmitInput as="a" href="#/classes">EXPLORE CLASSES</SecondarySubmitInput>
                </div>
              </GridListTile>
            </GridList>
          </Grid>

        </Grid>
        <Grid container xs alignItems="center">
          <Grid item xs={6}>
            <h2>Sweat with Us Virtually on our Class App.</h2>
          </Grid>
          <Grid item xs={6}>
            <p className="homepage-hero-paragraph">Our newest Online Class Experience platform connects you with our Kitten Ambassadors around the globe.</p>
          </Grid>
          <footer>
            <p>Coming Soon 🚧</p>
            <p>Copyright &copy; 2021 H.L.</p>
          </footer>
        </Grid>
      </Container>
    </div>
  )
}

export default HomePage;