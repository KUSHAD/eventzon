import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonToolbar,
	useIonViewWillEnter,
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import "./custone.css";

const AboutUs = () => {
	useIonViewWillEnter(() => {
		document.title = `EventZon | About US`;
	});
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<Link
						to='/'
						style={{
							textDecoration: "none",
							color: "black",
						}}>
						<h1>EventZon</h1>
					</Link>

					<IonButton
						className='header-link'
						routerLink='/'
						slot='end'
						fill='clear'
						color='dark'>
						Home
					</IonButton>
					<IonButton
						className='header-link'
						routerLink='/e'
						slot='end'
						fill='clear'
						color='dark'>
						Events
					</IonButton>
					<IonButton
						routerLink='/a'
						slot='end'
						fill='clear'
						color='dark'
						className='header-link'>
						About Us
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<iframe
					// scrolling='no'
					title='about-us-embed'
					src='https://kushad.github.io/hello-world/'
					style={{ height: "90vh", width: "100%" }}
				/>
			</IonContent>
		</IonPage>
	);
};

export default AboutUs;
