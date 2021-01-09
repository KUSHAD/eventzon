import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React from "react";
import { Redirect, Route } from "react-router";
import AboutUs from "./Pages/AboutUs";
import BirthdayParty from "./Pages/BirthdayPartyScreen";
import BrandLaunch from "./Pages/BrandLaunch";
import Events from "./Pages/Events";
import LandingScreen from "./Pages/LandingScreen";
import ProductLauch from "./Pages/ProductLaunch";
import Sports from "./Pages/Sports";
import VirtualEvent from "./Pages/VirtualEvent";
import Wedding from "./Pages/Wedding";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path='/' exact={true} component={LandingScreen} />
					<Route path='/bday' component={BirthdayParty} />
					<Route path='/sports' component={Sports} />
					<Route path='/product' component={ProductLauch} />
					<Route path='/wedding' component={Wedding} />
					<Route path='/brand' component={BrandLaunch} />
					<Route path='/virtual' component={VirtualEvent} />
					<Route path='/a' component={AboutUs} />
					<Route path='/e' component={Events} />
					<Redirect to='/' />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
