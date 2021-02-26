# Class Pass App

An extension to an e-commerce site that allows users to find and book brand ambassadors’ online classes around the world. Inspired by Airbnb Online Experience and Class Pass.

## Live site
[Class Pass App Live](https://hidden-retreat-15215.herokuapp.com/)

## Design documents
[Wiki](https://github.com/thisisharrison/class-pass-app/wiki/)

## Site Features

### Filtering
By default a user will see all the classes. User can filter by clicking Day, Languages Offered and Interests. User can combine multiple filters. 

1. We have a slice of state to keep track of our filters.

2. We have two `actions`: one to tell our `store` to update request query parameters and one to go fetch Classes from our API. 

3. On the Filter Form we have event listeners for when filters are changed. We dispatch `updateFilter` action creator and pass user's newly constructed filters to store.

```js 
// components/search/filter_form.js
  useEffect(() => {
    updateFilter(filter);
    updateFilterParams();
  }, [filter]);
```

4. Then we need to build our application state to reflect the filters. Using thunk middleware, `updateFilterParams` format the query paramter and then call `fetchClasses` passing in the formatted filters from `getState`. We then call the return function with dispatch and update classes in `store`.

```js
// actions/filter_actions.js
export const updateFilterParams = () => (dispatch, getState) => {
  dispatch(changeFilterParams());
  return fetchClasses(getState().ui.filters.queryParams)(dispatch);
};
```
5. Potential enhancements include: filtering classes in the front end using package like [isotope](https://isotope.metafizzy.co/) to save number of API calls, and storing query parameter in `localStorage` or URL path so that when user returns to the Class Index page, it is showing previously filtered results. 

### AdminRoutes and ClassOwner validation
Back end and Front end have validations to ensure only admin users can modify their own classes and see "Edit" link on the Class Show page. 

1. When a user successfully logs in, the back end sends a Json Web Token back in Bearer schema and we include it in our axios header.

2. We decode the token and store user `admin` status and `id` in application state. We pass this information to `Routes` as props, then render Component if user is Admin, and otherwise redirect user to their profile. Lastly we use this new route - `AdminRoutes` for `new-class` and `/classes/:id/edit`.

3. We populate the `admin` field in Class model when calling its APIs, which is also stored in application state. We then conditionally render "Edit Link" by checking if user is an admin and if class's admin equals current user ID. We redirect user using `react-router` if condition fails.

```js
// components/class/class_show.js
  isClassOwner() {
    return this.props._class.admin._id === this.props.currentUserId;
  }
```

4. In the back end, we first check if user is Admin. Then we check if the class's `admin._id` is user's ID before modifying the document. 

Example of Deleting a Class
```js
// routes/api/classes.js
router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can delete a class' })
    }
    Class.findById(req.params.id)
      .then(_class => {
        if (_class.admin._id.toString() !== req.user.id) {
          return res.status(401).json({ ownership: 'Only class owner can delete this class'})
        }
        _class.remove();
        res.json(_class);
      })
      .catch(err => res.status(404).json({ noclassfound: 'No class found with that ID' }));
  }
)
```

## Usage
### Development
1.  **Install dependencies**

    Use the [npm](https://www.npmjs.com/) package manager to install dependencies in root directory.

    ```shell
    npm run dev
    ```

    This will run `frontend-install` and install dependencies from both front end and back end folders. It will also run `concurrently` and start both servers. You can view the frontend on `localhost:3000`.
    
2.  **Start developing.**

    Run the following command when debugging back end: 

    ```shell
    npm run server:debug
    ```

## Built With

Front-end:

* [React](https://reactjs.org/) - Front end framework
* [Redux](https://redux.js.org/) - State management tool used with React
* [axios](https://www.npmjs.com/package/axios) - Used for API calls
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language for site functionality
* [Material-UI](https://material-ui.com/) - Used for advanced styling and design system
* [Styled-Component](https://styled-components.com/) - Used for custom styling React components
* [CSS3](http://www.css3.info/) - Used in conjunction with Material-UI for styling
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used for general structure of webpage

Back-end:

* [Express](https://expressjs.com/) - Back end framework
* [node](https://nodejs.org/en/) - Runtime environment for javascript
* [mongoDB](https://www.mongodb.com/) - NoSQL database
* [mongoose](https://mongoosejs.com/) - Object modeling for node.js and mongodb

## Potential Additions/ Unsolved Issues
- Show avatars of students in Class Time Index Item
- Reviews on Classes and Ambassadors
- Use [`react-dates`](https://github.com/airbnb/react-dates) from Airbnb in Filter Form
- Expired Class Times should be deleted from the database and Users' bookings
- Users should receive notification if Class Times / Classes are modified or removed
- Pagination on Class Times and Classes
- Pictures for Classes
- Payment for Premium Classes
- Google Map integration for Offline Classes