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

I chose to make a Maintainence MERN stack app. At my job, we have this maitenence crew which uses a paper format to repair/maintain appliances in the building, so I thought maybe putting their paper form in an app to make it easier to track the progress of the repair.
So basically, there will be 3 roles that can access this app: Adminstrator, Maintenance Manager, and Maintenance Employee.
Only Administrator and Manager will have the authority to have full CRUD capability to create, delete,update, and view all repair notes and current employees. Employee will only have the ability to read and update their current repair notes assigned by their manager and have the option of creating a new repair note. 
 The target end user for this project is a company that wants to be up to date with current repairs by using their phone or computer instead of trying to track down a maintenance employee. 

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

![Welcome](https://user-images.githubusercontent.com/110546643/202365645-cf25d699-bb6c-45a8-8907-70e2cabd0c99.JPG)
![employelogin](https://user-images.githubusercontent.com/110546643/202365659-de16368c-775f-453c-beb4-eb6d2d79a5b3.JPG)
![Repairlist](https://user-images.githubusercontent.com/110546643/202365664-23c8eb4b-8c3c-4712-b9ea-3ff777ac572f.JPG)


