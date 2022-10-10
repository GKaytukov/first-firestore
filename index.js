import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
// This is a sudo code & line 1- 13 will always be the same
// import our credentials (serviceAccount)
import serviceAccount from './serviceAccount.js';

// connect to our firebase project using those credentials 
initializeApp({
    credential: cert(serviceAccount)
});

// connect to firestore database
const db = getFirestore();

// define a new video game; 
const newGame = { 
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade', 
    released: 1981,
}

// create a doc inside a collection 
db.collection('games').add(newGame)// says go to the database 
    // if ok, console log the doc id 
    .then(doc => console.log('Game created: ', doc.id))
    // if not, console error 
    .catch(console.error)
    // .catch(err => console.error(err))


db.collection('games').get()
//reshape the collection
    .then(collection => {  // We are going to loop through the whole thing
        collection.docs.forEach(doc => {
        console.log(doc.id, doc.data())    
        })
    })
    .catch(console.error)




    //db.collection('games').where('title', '==', 'Frogger').update({ released: 1982 })

    //db.collection('games').where('title', '==', 'Dead Island 2').delete()
