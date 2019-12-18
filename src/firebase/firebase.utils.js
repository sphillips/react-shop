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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase