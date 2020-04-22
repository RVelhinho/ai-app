import React from 'react'
import star_empty from '../../assets/images/star_empty.svg';

export default function BubbleSep({desc, icon, recipes}) {
    return (
        <React.Fragment>
            <div className="col bubble">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center">
                        <h1>{desc}</h1>
                        <img src={icon} alt='desc'/>
                    </div>
                </div>
                <hr className="my-3 separator"/>
                <div className="row">
                    <div className="col">
                        {recipes.map(recipe =>  <div className="row">
                                                    <div className="col d-flex justify-content-start align-items-center"><h5>{recipe.name}</h5></div>
                                                    <div className="col d-flex justify-content-end align-items-center"><img src={star_empty}/></div>
                                                </div>)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
