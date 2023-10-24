import { configureStore, createSlice } from "@reduxjs/toolkit";

//A store with data!
let initialTaskStore = {
  tasks: [
    { id: 1, description: "Learn Redux", complete: false },
    { id: 2, description: "Finish project 1", complete: false },
  ],
  appointments: [
    { id: 1, time: "Tue, April 25 5:30pm", attendees: ["Alexander Bell-Towne", "Students"] },
  ],
}

// console.log(initialTaskStore);

// //An array of actions!
// const actionArray = [
//   {type: "tasks/taskAdded", payload: "Do the thing"},
//   {type: "tasks/taskCompleted", payload: {taskId: 2}},
//   {type: "tasks/taskAdded", payload: "Do the other thing"},
//   {type: "appointments/apptAdded", payload: {}}
// ];

// console.log(actionArray);

//A reducer!
function taskReducer(state = initialTaskStore, action) {
  if(action.type === "tasks/taskAdded"){
    const newTask = {
      id: state.tasks.length + 1, //add 1 to id
      description: action.payload,
      complete: false
    }
    const updatedTasks = [...state.tasks, newTask]; //new array
    const updatedState = {...state, tasks: updatedTasks}; //new object
    return updatedState;
  }
  else if(action.type === "tasks/taskCompleted") { }

  return state;
}

// create the Redux store
const store = configureStore({ reducer: taskReducer })

// access values from the store
console.log(store.getState())

store.dispatch({type: "tasks/taskAdded", payload: "Do the thing"})

console.log(store.getState())

//an action creator -- just a convenience function!
const addTask = (description) => {
  //return the action object
  return { type: "tasks/taskAdded", payload: description }
}


const addAction = addTask("Do the thing");
store.dispatch(addAction);
store.dispatch(addTask("Do the thing a third time"));

console.log(store.getState())

const selectTasks = (state) => state.tasks;

console.log(selectTasks(store.getState()));

const tasksSlice = createSlice({
  name: "tasks", //the feature name used in actions
  initialState: [], //e.g., the array of tasks
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      const newTask = { id: state.length + 1, description: action };
      state.push(newTask) // will be made immutable!
    },
    markComplete: (state, action) => {},
  },
})

// create the Redux store
const store2 = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
console.log(store2.getState());








// console.log(taskReducer(initialTaskStore, {type: "tasks/taskAdded", payload: "Do the thing"}));


// actionArray.reduce(taskReducer, initialTaskStore)


// function link(accumulation, newItem) { //adds two numbers
//   const newAccumulation = accumulation + "->" + newItem;
//   return newAccumulation;
// }

// const letters = ["a","b","c","d","e"];  //an initial array

// let linked = letters.reduce(link, "Start");

// console.log(linked); //"->a->b->c->d->e"

// const nums = [1, 2, 3, 4];
// console.log(nums.reduce((total, curr) => total + curr, 0));


// const objs = [
//   {
//     a: 1,
//     b: 2,
//   },
//   {
//     c: 3,
//     d: 4,
//   },
//   {
//     e: 5,
//     b: 6,
//   }
// ];

// console.log(objs.reduce((combined, curr) => {
//   return {
//     ...combined,
//     ...curr,
//   }
// }, {}));

















// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//   name: "tasks", //the feature name used in actions
//   initialState: [], //e.g., the array of tasks
//   reducers: {
//     addTask: (state, action) => {
//       console.log(action);
//       const newTask = { id: state.length + 1, description: action };
//       state.push(newTask) // will be made immutable!
//     },
//     markComplete: (state, action) => {},
//   },
// })

// // create the Redux store
// const store = configureStore({
//   reducer: {
//     tasks: tasksSlice.reducer,
//   },
// });
// console.log(store.getState());

// store.dispatch(tasksSlice.actions.addTask("New Task"));
// console.log(store.getState());

// //A store with data!
// let initialTaskStore = {
//   tasks: [
//     { id: 1, description: "Learn Redux", complete: false },
//     { id: 2, description: "Finish project 1", complete: false },
//   ],
//   appointments: [
//     { id: 1, time: "Tue, April 25 5:30pm", attendees: ["Alexander Bell-Towne", "Students"] },
//   ],
// }

// //A reducer!
// function taskReducer(state = initialTaskStore, action) {
//   if(action.type === "tasks/taskAdded"){
//     const newTask = {
//       id: state.tasks.length + 1, //add 1 to id
//       description: action.payload,
//       complete: false
//     }
//     const updatedTasks = [...state.tasks, newTask]; //new array
//     const updatedState = {...state, tasks: updatedTasks}; //new object
//     return updatedState;
//   }
//   else if(action.type === "tasks/taskCompleted") { }

//   return state;
// }

// // create the Redux store
// const store = configureStore({ reducer: taskReducer })

// // access values from the store
// console.log(store.getState())

// //an action creator -- just a convenience function!
// const addTask = (description) => {
//   //return the action object
//   return { type: "tasks/taskAdded", payload: description }
// }


// const addAction = addTask("Do the thing");

// store.dispatch(addAction);
// console.log(store.getState());

// store.dispatch(addTask( "Do the thing again"));
// console.log(store.getState());

// store.dispatch({
//   type: "tasks/taskAdded",
//   payload: "Do the thing again"
// });

// console.log(store.getState())


// //An array of actions!
// const actionArray = [
//   {type: "tasks/taskAdded", payload: "Do the thing"},
//   {type: "tasks/taskCompleted", payload: {taskId: 2}},
//   {type: "tasks/taskAdded", payload: "Do the other thing"},
//   {type: "appointments/apptAdded", payload: {}}
// ]



// taskManagerStore = actionArray.reduce(taskReducer, taskManagerStore)

// console.log(taskManagerStore);
