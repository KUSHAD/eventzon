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
const ProductLauch = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("");
	const [anchor, setAnchor] = useState("");
	const [hoarding, setHoarding] = useState("");
	const [media, setMedia] = useState("");
	const [photo, setPhoto] = useState("");
	const [venue, setVenue] = useState("");
	useIonViewWillEnter(() => {
		setIsModalOpen(true);
		document.title = `EventZon | Product Launch`;
	});
	const fetchData = () => {
		setIsModalOpen(false);
		firebaseFirestore
			.collection("ProductLaunch")
			.doc(selectValue)
			.get()
			.then((data) => {
				console.log(data.data());
				const edata = data.data();
				setAnchor(edata.Anchor);
				setHoarding(edata.HoardingOfAdvertisementAtVenue);
				setMedia(edata.MediaRepresentative);
				setPhoto(edata.Photographer);
				setVenue(edata.Venue);
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
					<IonTitle>Check Your Product Launch Event Budgets</IonTitle>
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
									<IonText>Anchor Will Be {anchor}</IonText>
								</IonList>
								<IonList>
									<IonText>
										Hoarding Of Advertisement At Venue Will Be {hoarding}
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
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp32-7-N_QRqnJOon_ft0tGNXt0gH-KaOKrQ&usqp=CAU' />
				</div>
			</IonContent>
			<IonModal isOpen={isModalOpen} backdropDismiss={false}>
				<IonCard>
					<IonCardHeader>
						<IonTitle>Enter Your Product Launch Event Budget</IonTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position='floating'>Enter Your Budget</IonLabel>
							<IonSelect
								value={selectValue}
								onIonChange={(e) => {
									setSelectValue(e.detail.value);
								}}>
								<IonSelectOption value='<100000'>
									{"Rs. 60,000 -1,00,000"}
								</IonSelectOption>
								<IonSelectOption value='<200000'>
									{"Rs. 1,00,000 -1,50,000"}
								</IonSelectOption>
								<IonSelectOption value='<300000'>
									{"Rs. 1,50,000 -2,10,000"}
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

export default ProductLauch;
