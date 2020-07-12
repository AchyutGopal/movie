import firebase from 'firebase/app';
import 'firebase/auth';

var FirebaseConfig = {
    apiKey: "AIzaSyCylC_11yGtk7od-ft63H9lY46uZRIDgY4",
    authDomain: "agmovies-9c1bc.firebaseapp.com",
    databaseURL: "https://agmovies-9c1bc.firebaseio.com",
    projectId: "agmovies-9c1bc",
    storageBucket: "agmovies-9c1bc.appspot.com",
    messagingSenderId: "887976485380",
    appId: "1:887976485380:web:01130e5f816fa85a22cb51"
  };
  class Firebase 
{
    constructor()
    {

        firebase.initializeApp(FirebaseConfig);
        this.auth=firebase.auth();
        
    }
//     async register(name,email,password){
        
//    await this.auth().createUserWithEmailAndPassword(email, password)
//    return this.auth.currentUser.updateProfile({
//        displayName:name
//    })
//     }

async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
     
    })
  }

  async getUser(){
    var user = firebase.auth().currentUser;
    return user
  }

login(email,password)
{
    return this.auth.signInWithEmailAndPassword(email,password);
}
  // Initialize Firebase
 

  async logout(){
    const logout = await firebase.auth().signOut().catch(err => {
        console.log(err);
        return err;
    });
    return logout;
}

}
export default new Firebase();
