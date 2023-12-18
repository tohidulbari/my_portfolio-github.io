import React from "react";
import "./ClientsReview.css";

function Review(props) {

    let rating;
    if(props.star === 1){
        rating = <ul className="list-unstyled float-right mb-0">
            <li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
        <li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        <li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        <li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        <li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li></ul>;
    }else if(props.star === 2){
        rating = <ul className="list-unstyled float-right mb-0">
            <li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        </ul>
    }else if(props.star === 3){
        rating = <ul className="list-unstyled float-right mb-0">
            <li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        </ul>
    }else if(props.star === 4){
        rating = <ul className="list-unstyled float-right mb-0">
            <li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-muted'> <i className='fas fa-star'></i> </li>
        </ul>
    }else{
        rating = <ul className="list-unstyled float-right mb-0">
            <li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
<li className='list-inline-item text-orange'> <i className='fas fa-star'></i> </li>
        </ul>
    }
    return (
            <div className="client-review rounded shadow m-2">
                <div className="align-items-center justify-content-start justify-content-sm-center">
                    <div className="col-sm-auto mb-4 mb-sm-0"> <img className="img-fluid avatar avatar-xl" src={props.avatar} alt="avatar" /></div>
                    <div className="col pl-lg-4 clt-section">
                        <h5 className="clt-title mt-2">{props.name}</h5>
                            <img src={`/flags/${props.flag}.svg`} id="client_flag" alt="flag" />&nbsp; 
                            <small id="client_country">{props.country}</small>
                        {rating}
                    </div>
                    <p className="pera-title text-light-muted mb-0 mt-2">{props.comment}</p>
                </div>
            </div>
    );
}

export default Review;