import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";
import UserDetails from './UserDetails';

/**
 * Our data
 * ------------------------
 */
const user = {
	name: "Chris on Code",
	location: "Las Vegas",
	foodType: "Everything",
	age: 28,
	likes: "Coding into the wee hours of the morning",
	twitterUsername: "chrisoncode",
	avatar:
		"https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
	return (
		<div className="App">
			{/* Show user data here */}
			<div className="user-deets">
                <img src={user.avatar} alt="user picture"/>
                <h1 className="user-name">{user.name}</h1>
                <UserDetails 
                    location={user.location}
                    diet={user.foodType}
                    age={user.age}
                    hobby={user.likes}
                    socialHandle={user.twitterUsername}
                />
            </div>

			<ScotchInfoBar />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
