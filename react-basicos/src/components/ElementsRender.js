import React, {Component} from "react";
import data from "../helpers/data.json"


function ListItem(props){
    return(
        <li>
            <a href={props.el.web} rel="noopener noreferrer" target="_blank">{props.el.name}</a>
        </li>
    )
}

export default class ElementsRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ['Summer', 'Winter', 'Spring', 'Autumn']
        }
    }

    render(){
        console.log(data);
        return(
            <div>
                <h3>Elements Render</h3>
                <h5>Year Seasons</h5>
                <ol>
                    {
                        this.state.seasons.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ol>
                <h5>Frameworks Frontend JavaScript</h5>
                <ul>
                    {
                        data.frameworks.map((el) => <ListItem key={el.id} el={el} />)
                    }
                </ul>
            </div>
        );
    }
}