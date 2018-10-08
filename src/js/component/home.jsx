import React from 'react';
import PropTypes from 'prop-types';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        
        var cardInfo = [
            {
                imageURL: "http://placehold.it/500x325",
                title: "Title 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et congue felis."
            },{
                imageURL: "http://placehold.it/500x325",
                title: "Title 2",
                description: "Fusce imperdiet, erat vitae tempor maximus, nisi erat maximus turpis, eleifend semper ipsum arcu id leo."
            },{
                imageURL: "http://placehold.it/500x325",
                title: "Title 3",
                description: "Nunc gravida sem in fermentum rutrum. Morbi vitae nunc nec mi efficitur congue."
            },{
                imageURL: "http://placehold.it/500x325",
                title: "Title 4",
                description: "Fusce imperdiet, erat vitae tempor maximus, nisi erat maximus turpis, eleifend semper ipsum arcu id leo."
            }
        ];
        
        return (
            <div className="text-center my-5">
                <h1>Hello Rigo!</h1>
                <p><img src={rigoImage} /></p>
                <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                {/*---BEGIN CARDS SECTION---*/}
                <div className="row text-center mx-auto">
                    <div className="card-deck">
                        {
                            cardInfo.map((item, index) =>{
                                return <Card
                                        key={index}
                                        imageURL={item.imageURL}
                                        title={item.title}
                                        description={item.description}
                                        />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function Card(props){
    
    return(
        <div className="card">
            <img className="card-img-top" src={props.imageURL} alt="card image" />
            <div className="card-body">
                <h4 className="card-body">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
        imageURL:PropTypes.string,
        title:PropTypes.string,
        description:PropTypes.string
    };