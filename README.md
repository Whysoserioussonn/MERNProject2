# MERNProject2
The goal of this project was to create a MERN stack app and deploy it online.

## Minimum Project Requirements
- A working full-stack application, built by you, using the MERN stack: Node.js, MongoDB/Mongoose, Express and React.
- At least two models with full CRUD.
- Follow proper MVC backend structure (models, controllers, routes in separate folders)
- As many pages and components as you need
- Include sign up/login (authentication) functionality, with encrypted passwords & an authorization flow
- Use of axios and local storage for tokensto the deployed version of the project 
- Use of a CSS framework for styling (Bootstrap, MaterialUI, Skeleton, Tailwind, etc.)
- At least one GitHub commit per day (at least 15)
- Be deployed online and accessible to the public
- A README.md file (should include a link to your hosted working website) 

## Stretch Goals:
- Manage at least some part of state with the useReducer and useContext hooks (together) or ReduxLinks to an external site. (npm install @reduxjs/toolkit react-redux) 
- Pull from a third party API - either client side with AJAX or server-side with an NPM

I chose to make a Maintainence MERN stack app. At my job, we have this maitenence crew which uses a paper format to repair/maintain appliances int the building, so I thought maybe put that in app and make it easier to track progress of repair.
So basically, there will be 3 roles that can access this app: Adminstrator, Maintenance Manager, and Maintenance Employee.
Only Administrator and Manager will have the authority to have full CRUD capability to create, delete,update, and view all repair notes and current employees that include their username and password. Employee will only be ability to read and update their current repair notes assigned by their manager and have the option of creating a new repair note. 
 The target end user for this project is a company with a maintenance crew that that want to be up to date with current repairs. 

# DEPLOYMENT LINK
https://fanciful-piroshki-652fd2.netlify.app/

## Acknowledgements and their links attached

 - [Understanding and implementing rate limiting in Node.js](https://blog.logrocket.com/rate-limiting-node-js/)
 - [when it says React was Conflicted between  package.json and base.json eslint](https://www.youtube.com/watch?v=LKS-ppJugGk)
 - [REACT SPINNERS](https://www.davidhu.io/react-spinners/)
 - [Tailwind Component templates](https://tailwindcomponents.com/component/form-with-file-input/)
 - [Introductin to TheMovieDB API](https://www.youtube.com/watch?v=bpHtxx_wmqw)
 - [tailwindcss installation guide](https://tailwindcss.com/docs/guides/create-react-app)
 - [Learn The MERN Stack - Express & MongoDB Rest API](https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm
 - [MERN Stack Full Tutorial|8 Hours](https://www.youtube.com/watch?v=CvCiNeLnZ00)






## Installation Front End Dependencies
```bash
 npx install create-react-app my-project
 npm install @reduxjs/toolkit
 jwt-decode
 react-icons
 react-redux
 react-router-dom
 react-spinners

```

## Installation Backend Dependencies

```bash
npm install bcrypt
concurrently
cookie-parser
cors
date-fns
dotenv
express
express-async-handler
express-rate-limit
jsonwebtoken
mongoose
mongoose-sequence
uuid

```

## Recommended Visual Code Extentions
- ES7+ React/Redux/React- Native snippets - loads functions with prefix statements example rafce
- Tailwind CSS IntelliSense - provides users with advanced features such as autocomplete, syntax highlighting, and linting.
- Pettier- Code Formatter - code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Future Developments
- Add a field to upload a picture of the repair/maintence problem
- Add more roles such as Assistant Manager or Assistant Admin
- Create some type of notitification back to Manager when repair is complete
    
## Screenshots





