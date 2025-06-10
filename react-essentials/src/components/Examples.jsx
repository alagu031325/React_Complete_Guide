import { useState } from 'react';
import { EXAMPLES } from "../data";
import TabButton  from "./TabButton";
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    // react hooks can be called from component functions
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton) {
        // 'selectedButton' => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

    return ( 
            <Section id="examples" title="Examples">
                <Tabs
                    buttons={ <>
                                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
                            </>}>
                    {/* Initially selectedTopic not set so undefined */}
                    {selectedTopic ? (
                    <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre> 
                    </div>) : <p>Please select a topic.</p>}
                </Tabs>
            </Section> )
}