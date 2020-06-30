import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SEND_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').push({
// 	description: 'Rent',
// 	amount: 10000,
// 	note: '',
// });

// database.ref('expenses').push({
// 	description: 'Food',
// 	amount: 2000,
// 	note: 'Groceries',
// });

// database.ref('expenses').push({
// 	description: 'Entertainment',
// 	amount: 3500,
// 	note: 'Cinema',
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});
// 	console.log(expenses);
// });
