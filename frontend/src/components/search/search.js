import ClassIndexContainer from '../class/class_index_container';
import FilterForm from './filter_form'
import { Container } from '@material-ui/core'
import HeroImage from '../home/hero_image';

const Search = ({
  // classes, 
  filters,
  updateFilter,
  updateFilterParams,
  fetchSaves,
  fetchBookings,
  fetchClasses, 
  fetchAllClassTimes,
  isAuthenticated,
  bookings, 
  saves,
  }) => (
  <div>
    <Container maxwidth="sm">
      <div className="category-hero">
        <HeroImage img1={'https://tn.fishki.net/26/upload/en/201305/16/10539/244866f48d04f3aa4e363be2036a094f.jpg'}
        />
        <h3 className="category-hero-text">
          Enjoy Online Classes with our Ambasssadors
        </h3>
      </div>
      <FilterForm 
        filters={filters}
        updateFilter={updateFilter}
        updateFilterParams={updateFilterParams}
        fetchClasses={fetchClasses}
        fetchAllClassTimes={fetchAllClassTimes}
        fetchSaves={fetchSaves}
        fetchBookings={fetchBookings}
        isAuthenticated={isAuthenticated}
        bookings={bookings}
        saves={saves}
      />
      <ClassIndexContainer />
    </Container>
  </div>
)

export default Search;