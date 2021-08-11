## redux
> npm i redux-thunk // for asynch network calls 

## file:
redux
|-- reducers
|   |--index.js
|   `--username.js
|-- actionTypes.js
|-- actions.js
`-- store.js

* note: create reducers so to easy to add new one by add all reducers inside of `/reducers` directory and are imported into and later exported from `/reducers/index.js`

.reduce fx in js - job is to take pieces passed in and output something new.  

- asks us for our name - then adds that name to the header.

- mapStateToProps(https://youtu.be/oONNusd57PU?t=7268)