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
const Wedding = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [catering, setCatering] = useState("");
	const [music, setMusic] = useState("");
	const [venue, setVenue] = useState("");
	const [photo, setPhoto] = useState("");
	const [bachelor, setBachelors] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Wedding`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("Wedding")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setCatering(edata.FoodAndCateringService);
				setMusic(edata.MusicalBand);
				setVenue(edata.Venue);
				setPhoto(edata.Photographer);
				setBachelors(edata.BachelorsParty);
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
					<IonTitle>Check Your Wedding Budgets</IonTitle>

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
									<IonText>
										Food And Catering Service Will Be :- {catering}
									</IonText>
								</IonList>
								<IonList>
									<IonText>Musical Band Will Be :- {music}</IonText>
								</IonList>
								<IonList>
									<IonText>Photographer Will Be :- {photo}</IonText>
								</IonList>
								<IonList>
									<IonText>
										Bachelors' & Bachelorettes' Party :- {bachelor}
									</IonText>
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
					<div className='linear-bg' style={{ width: "25%" }}></div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					<img src='https://cimages.elitehavens.com/images/portals/eh2/weddings/Wedding-2.jpg' />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Wedding Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<800000'>
									{"Rs. 8,00,000 - 12,00,000"}
								</IonSelectOption>
								<IonSelectOption value='<1200000'>
									{"Rs. 12,00,000 - 30,00,000"}
								</IonSelectOption>
								<IonSelectOption value='>200'>
									{"Rs. 30,00,000 - 45,00,000"}
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

export default Wedding;
