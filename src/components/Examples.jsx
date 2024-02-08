import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [tabContent, setTabContent] = useState(null);
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        {/* we are sending anonymous func to tabbutton and when this anonymous will be called then inside that handleSelect will be called with parameters */}
        <TabButton
          isSelected={tabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!tabContent ? (
        "Please select a topic!"
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
