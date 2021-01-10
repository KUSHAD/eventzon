import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewWillEnter,
} from "@ionic/react";
import {
	callOutline,
	chatboxOutline,
	logoFacebook,
	logoInstagram,
	logoLinkedin,
	logoWhatsapp,
} from "ionicons/icons";
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
						<div className='logo'>
							<h1>EventZon</h1>
						</div>
						<img
							src='../favicon.jpg'
							alt=''
							style={{
								marginLeft: -110,
								width: "50px",
								height: "50px",
							}}
						/>
					</Link>
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
					title='about-us-embed'
					src='https://kushad.github.io/hello-world/'
					style={{ height: "90vh", width: "100%" }}
				/>
				<a
					href='https://eventzon.herokuapp.com/'
					rel='noopener noreferrer'
					target='_blank'>
					<h1
						style={{
							textDecoration: "none",
							color: "black",
							textAlign: "center",
						}}>
						Check Out Our New Meeting Platform !!
					</h1>
				</a>
				<div
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#c5c8d0",
						padding: "10px",
					}}>
					<IonTitle>Contact Us</IonTitle>
					<div
						style={{
							flexDirection: "row",
							justifyContent: "center",
						}}>
						<IonButton href='tel:916289606122' color='success'>
							<IonIcon icon={callOutline} />
							+91 62896 06122
						</IonButton>
						<IonButton href='sms:919073393039' color='warning'>
							<IonIcon icon={chatboxOutline} />
							+91 90733 93039
						</IonButton>
						<IonButton
							href='https://api.whatsapp.com/send?phone=919073393039'
							target='_blank'
							color='success'>
							<IonIcon icon={logoWhatsapp} />
							+91 90733 93039
						</IonButton>
					</div>
					<br />
					<IonTitle>Follow Us</IonTitle>
					<div
						style={{
							flexDirection: "row",
							justifyContent: "center",
						}}>
						<IonButton
							href='https://www.facebook.com/EventZon-106542798067120/?view_public_for=106542798067120'
							target='_blank'
							color='secondary'>
							<IonIcon icon={logoFacebook} />
						</IonButton>
						<IonButton
							href='https://www.instagram.com/eventzon123/'
							target='_blank'
							color='dark'>
							<IonIcon icon={logoInstagram} />
						</IonButton>
						<IonButton
							href='https://www.linkedin.com/company/eventzone/about/'
							target='_blank'
							color='tertiary'>
							<IonIcon icon={logoLinkedin} />
						</IonButton>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default AboutUs;
