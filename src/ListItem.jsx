import { Greeting } from "./Greetings"
//Renders a list of components in JSX using ListItem, List, and App//
// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {props.animalsList.map((animal) => {
//                 return <ListItem key={animal} animal={animal}/>
//             })}
//         </ul>
//     );
// }

// function App() {
//     let animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals:</h1>
//             <List animalsList={animals} />
//         </div>
//     );
// }

//Conditionally rendering the UI using the ternary operator//
// function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//             //startsWith string method checks the see if each word in the list starts with an L. It will turn true or false after checking each word//
//           return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//         })}
//       </ul>
//     );
//   }
  
//   function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }
//Conditionally rendering the UI using the && operator. This will return a true or false, true will print to the page and false is ignored.//
// function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//         })}
//       </ul>
//     );
//   }
  
//   function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <List animals={animals} />
//       </div>
//     );
//   }
//Conditionally render the page using if. This will help from getting a blank page on load if the value is false or null for all values.//
function List(props) {
    if (!props.animals) {
      return <div>Loading...</div>;
    }
  
    if (props.animals.length === 0) {
      return <div>There are no animals in the list!</div>;
    }
  
    return (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
  
  function App() {
    const animals = [];
  
    return (
      <div>
        <Greeting></Greeting>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }

export { App }