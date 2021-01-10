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
					<IonText>Your Current Budget Is :- Rs.{selectValue}</IonText>
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
									<IonText>{balls} Ball Will be Provided</IonText>
								</IonList>
								<IonList>
									<IonText>{cheerLeader} Will Be Provided</IonText>
								</IonList>
								<IonList>
									<IonText>
										{commentators} Commentators Will Be Provided
									</IonText>
								</IonList>
								<IonList>
									<IonText>{refferree} Referree Will Be Provided</IonText>
								</IonList>
								<IonList>
									<IonText>Refreshments Will Be {refreshments}</IonText>
								</IonList>
								<IonList>
									<IonText>Media Coverage Will Be {mediaCoverage}</IonText>
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
								<IonSelectOption value='<40000'>{"< 40000"}</IonSelectOption>
								<IonSelectOption value='<80000'>{"< 80000"}</IonSelectOption>
								<IonSelectOption value='<120000'>{"< 120000"}</IonSelectOption>
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
