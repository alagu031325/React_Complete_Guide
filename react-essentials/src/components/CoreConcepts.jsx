import { CORE_CONCEPTS } from "../data";
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            {/* <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            {/* <CoreConcepts 
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[3].image}
            /> */}
            </ul>
        </section>
    )
}