import React,{Component} from "react";
import './Header.scss'
import arrowimg from '../../assests/arrow.png'

export class Header extends Component{
    render(){
        return(
            <div className="container">
                <div className="header">
                    <div className="header__reachinfo">
                        <div className="header__reachinfo__img"><img src={arrowimg}></img></div>
                        <div>
                            <div className="header__reachinfo__text">Reach us at </div>
                            <div className="header__reachinfo__email"> +91 929822333</div>
                        </div>
                    </div>
                    <div className="header__companyname">
                        <div className="header__companyname__text">iEV Technologies</div>
                        <div className="header__companyname__description">iEvoke... iEvolve... iEventuate...</div>
                    </div>
                    <div className="header__callback">
                        <div>
                            <div className="header__callback__text">Request an </div>
                            <div className="header__callback__link">callback</div>
                        </div>
                        <div className="header__callback__img"><img src={arrowimg}></img></div>
                    </div>
                </div>
            </div>
        )
    }
}