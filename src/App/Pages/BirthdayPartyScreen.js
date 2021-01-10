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
const BirthdayParty = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [cake, setCake] = useState("");
	const [playPark, setPlayPark] = useState("");
	const [location, setLocation] = useState("");
	const [invitation, setInvitation] = useState("");
	const [catering, setCatering] = useState("");
	const [fungame, setFunGames] = useState("");
	const [dj, setDJ] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Birthday Party`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("BirthDay")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setCake(edata.Cake);
				setLocation(edata.Venue);
				setCatering(edata.FoodAndCateringService);
				setFunGames(edata.FunGames);
				setInvitation(edata.InvitationCard);
				setDJ(edata.MusicalBand);
				setPlayPark(edata.PlayParkForChildren);
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
					<IonTitle>Check Your Birthday Party Budgets</IonTitle>

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
					<IonText>Your Current Budget Is :- Rs.{selectValue}</IonText>
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
									<IonText>Cake Will Be {cake}</IonText>
								</IonList>
								<IonList>
									<IonText>Invitation Card Will Be {invitation}</IonText>
								</IonList>
								<IonList>
									<IonText>
										Food and Catering Service Will Be {catering}
									</IonText>
								</IonList>
								<IonList>
									<IonText>Fun Games Will Be {fungame}</IonText>
								</IonList>
								<IonList>
									<IonText>DJ Will Be {dj}</IonText>
								</IonList>
								<IonList>
									<IonText>Play Park for Children Will Be {playPark}</IonText>
								</IonList>
								<IonList>
									<IonText>Venue Will Be {location}</IonText>
								</IonList>
							</IonCardContent>
							<IonButton onClick={() => setIsModalOpen(true)}>
								Check More Options
							</IonButton>
						</IonCard>
					</div>
					<div className='linear-bg' style={{ width: "25%" }}></div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					<img src='https://www.nymetroparents.com/columnpic2/stress-free-birthdays.jpg?clear=1' />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Birthday Party Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<15000'>{"< 15000"}</IonSelectOption>
								<IonSelectOption value='<30000'>{"< 30000"}</IonSelectOption>
								<IonSelectOption value='<45000'>{"< 45000"}</IonSelectOption>
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

export default BirthdayParty;
