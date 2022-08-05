import React from "react";
import { ToDo } from "./ToDo.js";


//create your first component
const Home = () => {
	return (
		<div className="container mx-auto">
      <div className="row justify-content-center"> 
        <div className="col-sm-8"> 
          <ToDo />
        </div>
      </div>
    </div>
	);
};

export default Home;
