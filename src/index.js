import React from "react";
import ReactDOM from 'react-dom';

// importing CSS
import "./index.css"

// import components
import Header from "./header";
import Banner from "./banner";
import Services from "./services";
import Blog from "./blog";
import Collections from "./collections";
import Contactus from "./contactus";

// import collection array
import { collection } from "./collection"

function Content() {

    return (
        <section>
            <Header />
            <Banner />
            <Services >
            </Services>
            <section className="collection">
                {collection.map(item => {
                    return <Collections key={item.id} {...item}>
                    </Collections>
                })}
            </section>
            <Blog />
            <Contactus></Contactus>
        </section>
    )
}

ReactDOM.render(<Content />, document.querySelector('#root'));