import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewWillEnter,
} from "@ionic/react";
import React from "react";
import "./custone.css";
const LandingScreen = () => {
	useIonViewWillEnter(() => (document.title = `EventZon | Home`));

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<div className='logo'>
						<h1>EventZon</h1>
					</div>
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
					src='https://kushad.github.io/discount-banner/'
					scrolling='no'
					title='A'
					style={{
						height: "110vh",
						width: "100%",
					}}></iframe>
				<div
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#F7F7FB",
					}}>
					<IonTitle>PROUD TO WORK WITH</IonTitle>
					<div style={{ flexDirection: "row" }}>
						<img
							src='https://eventplanningblueprint.com/wp-content/uploads/2019/09/New-Project-80.jpg'
							alt=''
							style={{
								margin: 15,
							}}
						/>
						<img
							src='https://eventplanningblueprint.com/wp-content/uploads/2019/09/New-Project-83.jpg'
							alt=''
							style={{
								margin: 15,
							}}
						/>
						<img
							src='https://eventplanningblueprint.com/wp-content/uploads/2020/10/New-Project-82.jpg'
							alt=''
							style={{ margin: 15 }}
						/>
						<img
							src='https://eventplanningblueprint.com/wp-content/uploads/2019/09/New-Project-81.jpg'
							alt=''
							style={{ margin: 15 }}
						/>
						<img
							src='https://eventplanningblueprint.com/wp-content/uploads/2020/10/New-Project-84.jpg'
							alt=''
							style={{ margin: 15 }}
						/>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default LandingScreen;
