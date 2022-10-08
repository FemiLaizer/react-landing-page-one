import React from "react";
import ReactDOM from 'react-dom';

// importing CSS
import "./index.css"

// import components
import Header from "./header";
import Banner from "./banner";
import Collections from "./collections";
import Contactus from "./contactus";

// import collection array
import { collection } from "./collection"

function Content() {

    return (
        <section>
            <Header />
            <Banner />
            {collection.map(item => {
                return <Collections key={item.id} {...item}></Collections>
            })}

            <Contactus></Contactus>
        </section>
    )
}

ReactDOM.render(<Content />, document.querySelector('#root'));