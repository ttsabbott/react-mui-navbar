# Steps used to create this project!
- npm create vite@latest . -- --template react (installs into current folder)
- npm i (i is shorthand for install)
- npm run dev (verify local server is running)
- npm i @mui/material @emotion/react @emotion/styled
- npm i @fontsource/roboto
- npm i @mui/icons-material
- npm i react-router-dom

## Put this at top of App.jsx
- import '@fontsource/roboto/300.css';
- import '@fontsource/roboto/400.css';
- import '@fontsource/roboto/500.css';
- import '@fontsource/roboto/700.css';

## useStorageState
useStorageState is not a built-in React hook, but it's a common custom hook used to manage state with persistent storage (like localStorage or sessionStorage).
How it works:
- Installation: You can install a package that provides this hook, such as:
    npm install use-storage-state
    yarn add use-storage-state
- Usage:
    import useStorageState from 'use-storage-state';
    function MyComponent() {
        const [name, setName] = useStorageState('user-name', 'Guest');
        return (
            <div>
            <p>Hello, {name}!</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
        );
    }
- Explanation:
    Import:
        Import the useStorageState hook from the installed package.
    State:
        The hook works similar to useState, but it also persists the state value in the specified storage (localStorage by default).
    Arguments:
        The first argument is a key to identify the value in storage.
        The second argument is the initial value to use if the key doesn't exist in storage.
    Return value:
        The hook returns an array with two elements:
            The current state value.
            A function to update the state value (which also updates the value in storage).
    Benefits:
        Persistence: The state value persists even after page refreshes or browser restarts.
        Easy to use: The hook has a familiar API similar to useState.
        Handles serialization: It handles serialization and deserialization of values stored in the browser's storage.
    Alternatives:
        useLocalStorageState: This is a similar hook, but specifically for localStorage.
        useSessionStorageState: This hook is specifically for sessionStorage.
        Custom implementation: You can also implement your own custom hook if you need more control or want to use a different storage mechanism.

## use-local-storage-state
    React hook that persist data in localStorage
    Install - React 18 and above:
        npm install use-local-storage-state

## Stackoverflow answer to local storage
Looking at the Apple, Mozilla and Mozilla again documentation, the functionality seems to be limited to handle only string key/value pairs.
A workaround can be to stringify your object before storing it, and later parse it when you retrieve it:
    var testObject = [{ 'one': 1, 'two': 2, 'three': 3 }, { 'one': 4, 'two': 5, 'three': 6 },];
Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
Example of my code:
    var initialNavPages = [
        { title: "Home", link: "/", selected: true, },
        { title: "About", link: "about", selected: false, },
        { title: "Contact", link: "contact", selected: false, },
        { title: "FAQ", link: "faq", selected: false, },
    ];
    localStorage.setItem('initialNavPages', JSON.stringify(initialNavPages));
    var retrievedMyNavPages = localStorage.getItem('initialNavPages');
    console.log('retrievedMyNavPages: ', JSON.parse(retrievedMyNavPages));

## How to remove item from local storage
    localStorage.removeItem(key);
