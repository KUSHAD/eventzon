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
const Sports = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [balls, setballs] = useState("");
	const [cheerLeader, setCheerLeader] = useState("");
	const [commentators, setCommentators] = useState("");
	const [mediaCoverage, setMediaCoverage] = useState("");
	const [refferree, setRefferre] = useState("");
	const [refreshments, setRefreshmants] = useState("");
	const [venue, setVenue] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Sports Event`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("Sports")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setCheerLeader(edata.CheerLeader);
				setballs(edata.Balls);
				setCommentators(edata.Commentators);
				setVenue(edata.Venue);
				setMediaCoverage(edata.MediaCoverage);
				setRefferre(edata.Referree);
				setRefreshmants(edata.Refreshment);
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
					<IonTitle>Check Your Sports Event Budgets</IonTitle>

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
					}}
					className='linear-bg'>
					<div style={{ width: "25%" }} className='linear-bg'></div>
					<div style={{ width: "50%" }} className='linear-bg'>
						<IonCard>
							<IonCardContent>
								<IonList>
									<IonText>{balls} Balls Will be Provided</IonText>
								</IonList>
								<IonList>
									<IonText>CheerLeaders Will Be :- {cheerLeader}</IonText>
								</IonList>
								<IonList>
									<IonText>Commentators will be :- {commentators}</IonText>
								</IonList>
								<IonList>
									<IonText>{refferree} Referrees Will Be Provided</IonText>
								</IonList>
								<IonList>
									<IonText>Refreshments Will Be :- {refreshments}</IonText>
								</IonList>
								<IonList>
									<IonText>Media Coverage Will Be :- {mediaCoverage}</IonText>
								</IonList>
								<IonList>
									<IonText>Venue Will Be :- {venue}</IonText>
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
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					<img src='https://media.yogems.com/a3a32370-4626-11e9-99bd-af4f5f6b9016.jpg' />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Sports Event Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<40000'>
									{"Rs. 40,000 - 60,000"}
								</IonSelectOption>
								<IonSelectOption value='<80000'>
									{"Rs. 60,000 - 1,00,000 "}
								</IonSelectOption>
								<IonSelectOption value='<120000'>
									{"Rs. 1,00,000 - 1,60,000"}
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

export default Sports;
