//This example shows a list of all people.Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.//

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const chemist = people.filter(person =>
        person.profession === 'chemist');
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist');

    // if (chemist) {

    // {
    //     chemist.map(person =>
    //         <li key={person.id}>
    //             <img
    //                 src={getImageUrl(person)}
    //                 alt={person.name}
    //             />
    //             <p>
    //                 <b>{person.name}:</b>
    //                 {' ' + person.profession + ' '}
    //                 known for {person.accomplishment}
    //             </p>
    //         </li>
    //     )
    // }

    // } else {

    // {
    //     everyoneElse.map(person =>
    //         <li key={person.id}>
    //             <img
    //                 src={getImageUrl(person)}
    //                 alt={person.name}
    //             />
    //             <p>
    //                 <b>{person.name}:</b>
    //                 {' ' + person.profession + ' '}
    //                 known for {person.accomplishment}
    //             </p>
    //         </li>
    //     )
    // }

// }
return (
    <article>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <ul>
            {
                chemist.map(person =>
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )
            }
            </ul>
        <h2>Everyone Else</h2>
        <ul>{
            everyoneElse.map(person =>
                <li key={person.id}>
                    <img
                        src={getImageUrl(person)}
                        alt={person.name}
                    />
                    <p>
                        <b>{person.name}:</b>
                        {' ' + person.profession + ' '}
                        known for {person.accomplishment}
                    </p>
                </li>
            )
        }
        </ul>
    </article>
);
}