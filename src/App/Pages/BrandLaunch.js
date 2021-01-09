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
const BrandLaunch = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [hoarding, setHoarding] = useState("");
	const [media, setMedia] = useState("");
	const [photo, setPhoto] = useState("");
	const [venue, setVenue] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Brand Launch`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("BrandLaunch")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setVenue(edata.Venue);
				setHoarding(edata.HoardingsOfAdvertisingAtMenu);
				setMedia(edata.MediaRepresentatives);
				setPhoto(edata.Photographer);
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
						<IonBackButton text='Back' defaultHref='/' icon={chevronBack} />
					</IonButton>
					<IonTitle>Check Your Brand Launch Budgets</IonTitle>
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
									<IonText>
										Hoardings Of Advertising At Venue Will Be {hoarding}
									</IonText>
								</IonList>
								<IonList>
									<IonText>Media Representatives Will Be {media}</IonText>
								</IonList>
								<IonList>
									<IonText>Photographer Will Be {photo}</IonText>
								</IonList>
								<IonList>
									<IonText>Venue Will Be {venue}</IonText>
								</IonList>
							</IonCardContent>
							<IonButton onClick={() => setIsModalOpen(true)}>
								Check More Options
							</IonButton>
						</IonCard>
					</div>
					<div className='linear-bg' style={{ width: "25%" }}></div>
				</div>

				<div className='linear-bg'>
					<br />
					<br /> <br /> <br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Brand Launch Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<300000'>{"< 300000"}</IonSelectOption>
								<IonSelectOption value='<600000'>{"< 600000"}</IonSelectOption>
								<IonSelectOption value='<900000'>{"< 900000"}</IonSelectOption>
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

export default BrandLaunch;
