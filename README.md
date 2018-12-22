# WeAreStarters

[Live](https://wearestarters.herokuapp.com)

Welcome to WeAreStarters, a clone of KickStarter. My web app includes many features that you can find on the real KickStarter website. The functionalities include a search bar that searches by title and description, the feature to explore different projects in 15 different categories, and the abilities to create, edit and delete project(s).

#### Search Bar Functionality
```javascript
searchProjects(query) {
    query = query.toLowerCase();
    if (query == '') {
      this.setState({
        projects: [],
      });
    } else {
      let searchedProjects = this.props.projects.filter((project) => {
        return project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query);
      });
      this.setState({ projects: searchedProjects });
    }
  }

  handleSearch(e) {
    this.searchProjects(e.target.value);
  }
```
The `searchProjects(query)` method takes one argument, returns an array of project objects based on user's input and then `setState`/updates the `this.state.projects`. The `handleSearch(e)` method will evaluate the target value and triger the `searchProjects(query)` method.

#### Edit and Delete buttons for logged-in project creators
```javascript
let button;
if (this.props.currentUser === undefined) {
   button = <div></div>;
 }

if (this.props.currentUser === undefined || this.props.currentUser.id !== this.props.project.creator_id) {
  button = <div></div>;
} else {
  button =
  <div>
    <button className="project-delete-edit-btn">
      <Link to={`/projects/${this.props.match.params.id}/edit`}>Edit Project</Link>
    </button>
    <button className="project-delete-edit-btn" onClick={() => this.props.deleteProject(this.props.match.params.id)}>Delete Project</button>
  </div>;
};
```
The above `if` statement evaluates if there is a current logged-in user or the current user is the creator of the projects. If the `session.id` equals to the `project.creator_id`, both edit and delete buttons will be shown next to the projects that are created by the current user. As current user clicks the `Edit` button, the site will redirect the user to the edit page with all pre-filled information, whereas triggering the `Delete` button will delete the project right away and stays on the same page.


**Technologies used**:
* Javascript
* Ruby on Rails for backend
* PostgreSQL for local database
* HTML
* CSS

**Libraries used**:
* React.js
* Redux
* React-Dates
* Bcrypt for user authorization
* AWS S3 bucks to store user and project images

**Features**:
* Sign up with username, email address, and password, log in with only email address and password, and log out
* Search and browse projects by title and description
* Create project with title, description, funding goal, due date, category and local photo file
* Edit and delete project

**To Do**:
* Add backing project feature, and dynamic information, such as pledged amount, days until due date, and number of backers
* Add comment section at the bottom of the each project show page
* Add reminders for the projects that users have saved
