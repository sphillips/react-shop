import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCgmqnTkfWfPb-Q8SqgExs8XzjcwCPRGYc",
  authDomain: "test-fireapp-2ae8c.firebaseapp.com",
  databaseURL: "https://test-fireapp-2ae8c.firebaseio.com",
  projectId: "test-fireapp-2ae8c",
  storageBucket: "test-fireapp-2ae8c.appspot.com",
  messagingSenderId: "734626416903",
  appId: "1:734626416903:web:758a0fe6d73d154a805da2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase