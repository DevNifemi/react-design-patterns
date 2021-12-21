import { useEffect, useState } from "react";
import DataContainer from "./components/container/CurrentUserLoader";
import ResourceLoader from "./components/container/ResourceLoader";
import UserLoader from "./components/container/UserLoader";
import { NumberedList } from "./components/list-items/NumberedList";
import { LargeListItem } from "./components/list-items/people/LargeListItem";
import { SmallListItem } from "./components/list-items/people/SmallListItem";
import { SmallProduct } from "./components/list-items/products/SmallProduct";
import { RegularList } from "./components/list-items/RegularList";
import ControlledModal from "./components/modal/ControlledModal";
import {withUser} from './components/higher-order-components/withUser'
import Modal from "./components/modal/Modal";
import { SplitScreen } from "./components/split-screen/SplitScreen";
import { UserInfo } from "./components/UserInfo";

// Data for list item 
const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];


const LeftComp = () => {
  return (
    <h1>Hellloo</h1>
  )
}

const RightComp = () => {
  return (
    <h1>How are you?</h1>
  )
}

const WithUserLoader = withUser(UserInfo, 'https://jsonplaceholder.typicode.com/posts?userId=1')



const App = () => {
	const [show, setShow] = useState(false)


  return (
    <div className="App">

    <SplitScreen left={LeftComp} weight={8}>
        {/* passing the necessary components for split screen as children */}
        <LeftComp/>
        
        <RightComp/>
    </SplitScreen>



	{/* load a specific kinda data  */}
	<WithUserLoader/>

	<Modal>
		<ResourceLoader url='https://jsonplaceholder.typicode.com/posts' urlName='data'>
		<UserInfo />
		</ResourceLoader>
	</Modal>

	<button onClick={() => setShow(!show)}>{ show ? 'Hide C MODAL' : 'Show Con Modal'}</button>
	
	<ControlledModal shouldClose={() => setShow(false)} shouldShow={show}>
		<h1>Heloooo</h1>
	</ControlledModal>
    </div>
  );
}

export default App;
