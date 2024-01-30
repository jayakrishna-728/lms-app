import React,{Component} from "react";
import  Header  from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Content  from "../Content/Content";
import './Home.scss';
import Form from "../Form/Form";
import { Routes, Route } from 'react-router-dom';
import Submenu from "../Submenu/Submenu";
import'./Home.scss'


export class Home extends Component{
    render(){
        return(
            <>
            <div className="main">
            <Header />
            <Submenu/>
            <Routes>            
                <Route path="/" element={<Content />} />
                <Route path="/form" element={<Form />} />   
            </Routes>
            <Footer/>
            </div>
            
            </>
        )
    }
}