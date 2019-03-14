import React, { Component } from 'react';
import BuildModuleUrl from 'cesium/Core/buildModuleUrl';
import './App.less';
import 'cesium/Widgets/widgets.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Map from "./component/Map"
BuildModuleUrl.setBaseUrl('./');




class App extends Component {
    render() {
        return (
            <BrowserRouter>
               <Map id="map"></Map>
            </BrowserRouter>
        );
    }
}
export default App;
