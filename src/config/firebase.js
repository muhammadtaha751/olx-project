import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore,getDocs } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCDNwoufvq402tgfDONrxPKDHBj1QGtP3U",
    authDomain: "olxproject-ff933.firebaseapp.com",
    projectId: "olxproject-ff933",
    storageBucket: "olxproject-ff933.appspot.com",
    messagingSenderId: "459589280372",
    appId: "1:459589280372:web:7061690001cbd10d41e721",
    measurementId: "G-KFM2MGDWN1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function post(title, description, price,) {

    try {
        
        await addDoc(collection(db, "ads"), {
            title,
            description,
            price,
           
        });
        alert('ad posted')
    } catch (e) {
        alert(e.message)
    }
}
async function getAds(){
    const querySnapshot = await getDocs(collection(db,"ads"));
    const ads = []
    querySnapshot.forEach((doc)=>{
        ads.push(doc.data())
    })
    return ads
    }


export {
    post,
    getAds
}


