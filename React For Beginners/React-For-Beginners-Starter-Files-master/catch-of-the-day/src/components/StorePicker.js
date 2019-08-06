import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    goToStore(event) {
        // stop the form from submitting
        event.preventDefault();
        // get the text from that input
        // change the page to/store/whatever-they-entered
        console.log("going to store");
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;