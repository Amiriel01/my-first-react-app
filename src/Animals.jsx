//list hardcoded//
// function Animals() {

//     let animals = ["Lion", "Cow", "Snake", "Lizard"];
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <ul>
//           <li>Lion</li>
//           <li>Cow</li>
//           <li>Snake</li>
//           <li>Lizard</li>
//         </ul>
//       </div>
//     );
//   }
//create array and map it, return li, same result as above//
//   function Animals() {

//     let animals = ["Lion", "Cow", "Snake", "Lizard"];
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <ul>
//           {animals.map((animal) => {
//             return <li key={animal}>{animal}</li>
//           })}
//         </ul>
//       </div>
//     );
//   }
//create animals array and animals list function then put it in the jsx, same results as the previous two examples//
function Animals() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

    return (
        <div>
            <h1>Animals: </h1>
            <ul>
                {animalsList}
            </ul>
        </div>
    );
}

export default Animals;