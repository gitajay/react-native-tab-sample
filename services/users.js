import firebase from 'firebase';

export function writeUserData(email,fname,lname){
    firebase.database().ref('Users/').push({
        email,
        fname,
        lname
    }).then((data)=>{
        //success callback
        console.warn('data ' , data)
    }).catch((error)=>{
        //error callback
        console.warn('error ' , error)
    })
  }

export function readUserData() {
    //firebase.database().ref('Users/').once('value', function (snapshot) {
      //  console.warn(Object.values(snapshot.val()))
       // return Object.values(snapshot.val())
    //});
    return firebase.database().ref('Users/').once('value')
}