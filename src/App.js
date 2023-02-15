import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Errorpage from "./components/errorpage";

// Import Global Components
import Header from './components/Header';
import Banner from "./components/Banner";
import BannerSlider from "./components/BannerSlider";
import Apicomponent from "./components/Apicomponent";
import Footer from "./components/Footer";

// Import Routes
// import Layout from "./routes/layout";
// import Splittext from "./routes/splittext";
import ContactList from "./routes/contactlist";
// import MainContact from "./routes/contact";

// Import Pages
import About from "./pages/about";
import Services from "./pages/services";
import Work from "./pages/work";
import Careers from "./pages/careers";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Team from "./pages/team";

// Import Cards
import CardTeamDescription from "./components/cards/CardTeamDescription";

// Import Styles
import './assets/css/App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner 
                    title="We deliver impactful digital products." 
                    hasDesc={true} 
                    desc="Nepware creates cutting-edge software solutions for global clients by taming complex issues of information infrastructure." 
                    hasBtnlink={true}
                    btnUrl="/" 
                    hasThumb={true}
                />
                <BannerSlider/>
                <Apicomponent/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: "/about",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner 
                    title="About"
                    hasDesc={true} 
                    desc="We provide multiple services within the industry. We have been providing solutions in Design, Software development, Applications, Data analysis to top business and humanitarian institutions."
                />
                <About/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: "/services",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner 
                    title="We have diversity of skills to solve your problem"
                    hasDesc={true} 
                    desc="We provide multiple services within the industry. We have been providing solutions in Design, Software development, Applications, Data analysis to top business and humanitarian institutions."
                />
                <Services/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: "/company",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner title="Company"/>
                <Company/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
            children: [
                {
                    path: '/company/:companyId',
                    element: <Team/>
                }
            ]
        },
        {
            path: "/careers",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner title="Careers"/>
                <Careers/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: "/team",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner title="Our Team"/>
                <Team/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: '/team/:teamId',
            element: 
                <>
                    <Header primaryBtn={true}/>
                    <Banner title="Our Team"/>
                    <CardTeamDescription/>
                    <Footer/>
                </>
        },
        {
            path: "/work",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner title="Work"/>
                <Work/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
        },
        {
            path: "/contact",
            element: 
            <>
                <Header primaryBtn={true}/>
                <Banner title="Contact"/>
                <Contact/>
                <Footer/>
            </>,
            errorElement: <Errorpage />,
            children: [
                {
                    path: "/contact/:id",
                    element: <ContactList />,
                }
            ]
        }
    ]);

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );

}

export default App;
