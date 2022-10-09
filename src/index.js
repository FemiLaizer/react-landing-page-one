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
import Contact from "./contact";
import Footer from "./footer";

// import collection array
import { collection } from "./collection"

function Content() {

    return (
        <section>
            <Header />
            <Banner />
            <Services >
            </Services>
            <section id="collection">
                <h3>Sneakers Collection</h3>
                <div className="collection-box">
                    {collection.map(item => {
                        return <Collections key={item.id} {...item}>
                        </Collections>
                    })}
                </div>
            </section>
            <Blog />
            <Contact></Contact>
            <Footer />
        </section>
    )
}

ReactDOM.render(<Content />, document.querySelector('#root'));