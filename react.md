

## What is React.js ?
- A js library used to make UI (FRONTEND).
- Can build complex library, build by meta on 2013.
- Most demanding skill for now

### 1. Why needed ?
- When fb had two many users, some problems occured because built with html,css and js earlier. The website does not show new things without a reload or did not get any notification without reload the page.
- So, fb need someting which can auto reload.
- React creates component based architecture. when one component need to reload then only that component should be reload instead of totally page.

### 2. Library vs Framework
- Library
    - GSAP
    - Lenis
    - React.js
- Framework
    - Nextjs
    - Angular
- Difference
    - Library used for one perticular feature
        - Analogy:- Make a home with your own customization in your plot
    - Framework used for all included
        - Analogy: Buy a flat and can not customize according to you

### 3. Import vs Export :-
- How to work with multiple files ?
    - Importing one file in another file.
    - Without export we can not import.
- Types of Export:-
    - Name Export :- Use when we need to export more than one things
    - Default Export :- Use when we need to export one thing

### 4. DOM:-
- Stands for Document Object Model
- There are two doms
    - Real DOM
    - Virtual DOM
#### Real DOM:-
![dom](./tree.png)
    - When we use normal html,css and js. If i want to change h1 which is in Navbar section, the total dom of webpage updated. This is the main problem of real dom.
#### Virtual DOM:-
- Copy of Real DOM by react.
- When we need to change something like when click on button the h1 should change, Incase of virtual DOM when we click on button then behind the scene the virtaul DOM compare with Real DOM and change what actually need to change not updated total DOM like real DOM.
- It makes the app faster.

### 5. JSX:-
- Combination of HTML and js
- When we have to create an html in js that is very mehnat wala things.
- But in case of jsx, `var h1 = <h1> </h1>`
    ```jsx
    function Hello(){
        console.log("Hello");
    }
    ```


### 6. Bundler:-
- For now we create react bundler using `npm create vite@latest`
- After installation we got vite bundler for using react. 
- There are some folders and files will coming after installation.


    ```
    project-root/
    │
    ├── public/                # Static files (served directly)
    │
    ├── src/                   # Main source code
    │   ├── assets/            # Images, icons, etc.
    │   ├── App.css            # Styles for App component
    │   ├── App.jsx            # Root React component
    │   ├── main.jsx           # Entry point (React starts here)
    │   └── index.css          # Global styles
    │
    ├── .gitignore             # Files ignored by Git
    ├── eslint.config.js       # ESLint configuration
    ├── index.html             # Root HTML file
    ├── package.json           # Project dependencies & scripts
    ├── package-lock.json      # Dependency lock file
    ├── README.md              # Project documentation
    └── vite.config.js         # Vite configuration
    ```

### 7. Break the code of what you get as default
#### 1. node_modules:-
    - All libraries present what we need for the project
#### 2. public folder:-
    - files for access
#### 3. src folder:-
    - As usual we get Main.jsx, App.jsx, App.css and App.jsx
#### 4. eslint.config.js:-
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```
- We can think that as code quality checker + strict teacher
- Without ESLint:
    - You may write buggy code ❌
    - Inconsistent coding style ❌
    - Hard to maintain project ❌
- With ESLint:
    - Cleaner code ✅
    - Fewer bugs ✅
    - Industry-standard practices ✅
- `import js from '@eslint/js'` :- Default js rules
- `import globals from 'globals'`:- Gives browser globals like window, document
- `import reactHooks from 'eslint-plugin-react-hooks'`:- Check react hook rules
- `import reactRefresh from 'eslint-plugin-react-refresh'`:- Helps with vite fast refresh
- `import { defineConfig, globalIgnores } from 'eslint/config'`:- Helps define config properly.

#### 5. index.html :-
- Main root file which serves to the browser.
#### 6. package.json:-
- All project dependecies and scripts present in this
#### 7. package-lock.json:-
- Project dependecies locked here
#### 8. README.md:-
- Documentation
#### 9. vite.config.js:-
- Configuration for vite

### 8. Components in React:-
- Component is like multiple function which can be reusable.
- Like Button, Navbar, Sidebar and etc...
- In react there are two types of components
    - Class component (old not useful for now)
    - Function Component
- How to use Components ?
    ```js
    import Card from "./components/Card.jsx"
    function App() {
    return (
        <div>
            <Card />
        </div>
    );
    }
    ```
    - Here `Card` is a component and used in App.jsx