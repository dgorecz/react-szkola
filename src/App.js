import { useState } from 'react';


import { EXAMPLES } from './data.js';


import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function genRandomInt(max) {
 return Math.floor(Math.random() * (max + 1));
}


function Header() {
 const description = reactDescriptions[genRandomInt(2)];


 return (
   <header>
     <img src={reactImg} alt="Stylized atom" />
     <h1>React Essentials</h1>
     <p>
       {description} React concepts you will need for almost any app you are
       going to build!
     </p>
   </header>
 );
}


function CoreConcept(props) {
 return (
   <li>
     <img src={props.image} alt={props.title} />
     <h3>{props.title}</h3>
     <p>{props.description}</p>
   </li>
 );
}

function CountButton(){
  const[count, setCount] = useState(0);
    function handleCount(){
      setCount(count + 1);
    }

    return(
      <button onClick={handleCount}>{count}</button>
    )
}

function TabButton({ children, onSelect, isSelected }) {
 console.log('TABBUTTON COMPONENT EXECUTING');
 return (
   <li>
     <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
       {children}
     </button>
   </li>
 );
}


function App() {
 const [selectedTopic, setSelectedTopic] = useState('');
  function handleSelect(selectedButton) {
   setSelectedTopic(selectedButton);
 }


 let tabContent = <p>Please select a topic.</p>;


 if (selectedTopic) {
   tabContent = (
     <div id="tab-content">
       <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <pre>
         <code>{EXAMPLES[selectedTopic].code}</code>
       </pre>
     </div>
   );
 }


 return (
   <div>
     <Header />
     <main>
       <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
           <CoreConcept
             title="Components"
             description="The core UI building block."
             image={componentsImg}
           />
           <CoreConcept
             title="JSX"
             description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
             image={jsxImg}
             />
           <CoreConcept
             title="Props"
             description="Make components configurable (and therefore reusable) by passing input data to them."
             image={propsImg}
             />
           <CoreConcept
             title="State"
             description="React-managed data which, when changed, causes the component to re-render & the UI to update."
             image={stateImg}
           />
         </ul>
       </section>
       <section id="examples">
         <h2>Examples</h2>
         <menu>
           <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
             Components
           </TabButton>
           <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
           <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
           <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
           <CountButton />
         </menu>
         {tabContent}
       </section>
     </main>
   </div>
 );
}


export default App;
