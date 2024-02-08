import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcepts";
import Section from "./Section";

export default function Concepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return (
            <CoreConcept
              key={item.title}
              img={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </Section>
  );
}
