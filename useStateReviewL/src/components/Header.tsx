import { useState } from "react";



const Header = () => {

    const [name, setName] = useState("Mario");

    // let name ="Mario";
//This is a function to handle our click
    const handleNintendoClick = () => {

        // name = "Luigi";
        setName("Luigi");
        console.log(name)
    }

  return (
    <>
        <header>
            <h1>Our List</h1>
            <p>{name}</p>
            <button onClick={handleNintendoClick}>Update Name</button>
        </header>
    </>
  )
}

export default Header