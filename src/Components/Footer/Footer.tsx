import React,{Component} from "react";
import './Footer.scss';

export class Footer extends Component{
    render(){
        return(
            <>
                <div className="footer">
                    <div className="footer__flex">
                        <div className="footer__flex__title">iEV Technologies</div>
                        <div className="footer__flex__description">iEv is 100% committed to giving clients our full support at every step of the immigration process. We recognize that every individual has a specific need and choice and that is why we treat every individual with the utmost care and respect.</div>
                        <div className="footer__flex__address">
                                D.No: 2 - 61<br></br>
                                Thummalapalem<br></br>
                                Prathipadu<br></br>
                                Guntur<br></br>
                                Andhra Pradesh - 522233<br></br>
                        </div>
                    </div>
                    <div className="footer__flex">

                    </div>
                    <div className="footer__flex">

                    </div>
                
                </div>
            </>


        )
    }
}