import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        console.log(localStorageRef);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
          context: this,
          state: "fishes"
        });
      }
      
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }
    
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set new fishes object to state
        // adds fishes to previous const fishes to update to new fishes
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. either add to the order, or update the number in our order
        // if the fish already exists, add another one. if it doesn't, add one.
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({ order });
    }; 

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish 
                            key={key} 
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder} 
                        />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                addFish={this.addFish}
                loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;