import React,{Component} from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Content } from "../Content/Content";
import './Home.scss';

export class Home extends Component{
    render(){
        return(
            <>
            <div className="main">
            </div>
            <Header />
                <Content/>
            <Footer/>
            </>
        )
    }
}