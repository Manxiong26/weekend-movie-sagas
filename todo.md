[x] When a movie poster is clicked, a user should be brought to the `/details` 
    view for that movie.

[x] Have a way to get to the Add Movie Page


### Details Page

[x] The details page should have a `Back to List` button, which should bring the 
    user to the Home/List Page
        [x] make a GET request for a specific movie
        **haven't gotten the pressing on the movie to just show that one detail yet**

### Add Movie Page

This should show:
    [x] an input field (for the movie title) 
    [x] an input field (for the movie poster image URL)) 
    [x] a textarea (for the movie description) 
    [x] a dropdown (for the genres) 
**Base functionality does not require the movie details to load correctly after refresh of the browser**

The Add Movie page should have the buttons:
    [x] `Cancel` button, which should bring the user to the Home/List Page
    [x] `Save` button, which should update the title and description in the 
        database and bring the user to the Home/List Page (which now has the new movie)
**Base functionality does not require being able to select more than one genre for a new movie**

### General Considerations
    [ ] Invest some time in styling it up!
        [ ] Research cards for your movie posters on the list page
        [ ] Research grids for your movie posters on the Movie List page
        [ ] Commit your code frequently! You should have at 15+ commits on a project
            of this size.              
        [ ] Use branches to help break down your features. 
    [ ] Comment your code.
    [ ] Update this README to include a description of the project in your own 
        words.