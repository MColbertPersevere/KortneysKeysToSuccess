import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Index from '../components/Index'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '../components/Services'
import NotFound from '../components/NotFound'
import PageNav from '../components/Nav'
import Footer from '../components/Footer'

const AppRouter = (props) => (
    <BrowserRouter>
    <ScrollToTop/>
        <div>
            <PageNav />            
            <Switch>
                <Route path="/" component={Index} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route component={NotFound} /> 
            </Switch>
            <Footer />
        </div>      
    </BrowserRouter>
)
export default AppRouter