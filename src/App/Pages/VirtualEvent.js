import {
	IonBackButton,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonModal,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonText,
	IonTitle,
	IonToolbar,
	useIonViewWillEnter,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React, { useState } from "react";
import { firebaseFirestore } from "../firebaseConfigs";
import "./custone.css";
const VirtualEvent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [brochures, setBrochures] = useState("");
	const [meetingPlatform, setMeetingPlatform] = useState("");
	const [socialMedia, setSocialMedia] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Virtual Event`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("VirtualEvent")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setBrochures(edata.OnlineBrochures);
				setMeetingPlatform(edata.MeetingPlatform);
				setSocialMedia(edata.SocialMediaCoverage);
			})
			.catch((e) => {
				console.log("error", e);
			});
		console.log(selectValue);
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot='start' fill='clear'>
						<IonBackButton text='Back' defaultHref='/e' icon={chevronBack} />
					</IonButton>
					<IonTitle>Check Your Virtual Event Budgets</IonTitle>

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
				<div className='linear-bg'>
					<br />
				</div>
				<div style={{ textAlign: "center", margin: 15 }}>
					<IonText>
						<u>According to your Budget</u>
					</IonText>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}>
					<div className='linear-bg' style={{ width: "25%" }}></div>
					<div style={{ width: "50%" }}>
						<IonCard>
							<IonCardContent>
								<IonList>
									<IonText>Online Brochures Will Be {brochures}</IonText>
								</IonList>
								<IonList>
									<IonText>Social Media Coverage Will Be {socialMedia}</IonText>
								</IonList>
								<IonList>
									<IonText>Meeting Platform Will Be {meetingPlatform}</IonText>
								</IonList>
							</IonCardContent>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
								}}>
								<IonButton onClick={() => setIsModalOpen(true)}>
									Change Budget
								</IonButton>

								<a
									style={{
										marginLeft: "20px",
									}}
									target='_blank'
									href='https://docs.google.com/forms/d/e/1FAIpQLSeI1OBeNVLHHF8IB4zWbEyS85HSMy1yD4AFH-0F6X_SGdPJWg/viewform?usp=sf_link'>
									<br />
									Book Your Event Now!{" "}
								</a>
							</div>
						</IonCard>
					</div>
					<div className='linear-bg' style={{ width: "25%" }}></div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					<img src='https://miro.medium.com/max/1080/0*Jtd1O9H6BrB2yCeW.png' />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Virtual Event Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<50000'>
									{"Rs. 15,000 - 25,000"}
								</IonSelectOption>
								<IonSelectOption value='<70000'>
									{"Rs. 25,000 - 35,000"}
								</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonButton disabled={!selectValue} onClick={fetchData}>
							Check !!
						</IonButton>
					</IonCardContent>
				</IonCard>
			</IonModal>
		</IonPage>
	);
};

export default VirtualEvent;
