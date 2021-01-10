import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonPage,
	IonRow,
	IonText,
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
const Events = () => {
	useIonViewWillEnter(() => {
		document.title = `EventZon | Events`;
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
				<div
					style={{
						textAlign: "center",
					}}>
					<h1>Event Budgets</h1>
				</div>
				<IonGrid>
					<IonCol size='8'>
						<IonRow>
							<IonCard>
								<Link
									style={{ textDecoration: "none", color: "black" }}
									to='/bday'>
									<IonCardHeader>
										<IonCardTitle>Birthday Party </IonCardTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												alt='pic'
												style={{
													width: 400,
													height: 400,
												}}
												src='data:image/jpeg;base64,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'
											/>
										</div>
										<IonText>See The Budget Of Your BirthDay Events</IonText>
										<IonButton routerDirection='forward' routerLink='/bday'>
											Check Budget
										</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>

							<IonCard>
								<Link
									to='/sports'
									style={{ textDecoration: "none", color: "black" }}>
									<IonCardHeader>
										<IonCardTitle>Sports Event</IonCardTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												alt='pic'
												style={{
													width: 400,
													height: 400,
												}}
												src='https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg'
											/>
										</div>
										<IonText>See The Budget Of Your Sports Events</IonText>
										<IonButton routerDirection='forward' routerLink='/sports'>
											Check Budget
										</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>

							<IonCard>
								<Link
									to='/wedding'
									style={{ textDecoration: "none", color: "black" }}>
									<IonCardHeader>
										<IonCardTitle>Wedding Event</IonCardTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-3462-1-1576693070.jpg'
												alt='pic'
												style={{
													width: 400,
													height: 400,
												}}
											/>
										</div>
										<IonText>See Budgets Of Your Wedding Event</IonText>
										<IonButton href='/wedding'>Check Your Budgets</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>

							<IonCard>
								<Link
									to='/brand'
									style={{
										color: "black",
										textDecoration: "none",
									}}>
									<IonCardHeader>
										<IonTitle>
											<span
												style={{
													color: "#000",
												}}>
												Brand Launch Event
											</span>
										</IonTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												src='https://timebankmedia.org/wp-content/uploads/2019/04/Branding-3-833x474.jpg'
												alt='pic'
												style={{
													width: 400,
													height: 400,
												}}
											/>
										</div>
										<IonText>See Budgets Of Your Brand Launch Event</IonText>
										<IonButton href='/brand'>Check Your Budgets</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>

							<IonCard>
								<Link
									to='/product'
									style={{ textDecoration: "none", color: "black" }}>
									<IonCardHeader>
										<IonCardTitle>Product Launch Event </IonCardTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												alt='pic'
												style={{
													width: 400,
													height: 400,
												}}
												src='https://www.jeffbullas.com/wp-content/uploads/2017/11/5-Steps-To-A-Successful-Product-Launch-In-A-Highly-Competitive-Market-768x512.jpg'
											/>
										</div>
										<IonText>See Budgets Of Your Product Launch Event</IonText>
										<IonButton href='/product'>Check Your Budgets</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>

							<IonCard>
								<Link
									to='/virtual'
									style={{
										color: "black",
										textDecoration: "none",
									}}>
									<IonCardHeader>
										<IonCardTitle>Virtual Event </IonCardTitle>
									</IonCardHeader>
									<IonCardContent>
										<div>
											<img
												src='https://blog.hubspot.com/hubfs/how-to-promote-virtual-events.jpg'
												alt='Pic'
											/>
										</div>
										<IonText>See Budgets Of Your Virtual Meet Events</IonText>
										<IonButton href='/virtual'>Check Your Budgets</IonButton>
									</IonCardContent>
								</Link>
							</IonCard>
						</IonRow>
					</IonCol>
				</IonGrid>
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

export default Events;
