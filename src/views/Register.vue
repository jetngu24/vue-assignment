<template>
  <h1>Create an Account</h1>
  <p>
    <input type="text" placeholder="Please enter your email" v-model="email" />
  </p>
  <p>
    <input
      type="password"
      placeholder="Please enter your password"
      v-model="password"
    />
  </p>
  <p>
    <button @click="register">Submit</button>
  </p>
  <p>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </p>
  <p>
    <button @click="signInWithFacebook">Sign In With Facebook</button>
  </p>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router"; //import router
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  //.value is needed because ref() is used
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push("/profile"); //redirect to profile
    })
    .catch((error) => {
      console.log(error.code);
      //alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(user);
      router.push("/profile");
    })
    .catch((error) => {});
};

const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  provider.addScope('user_birthday');

  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result);
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.log(result.user);

      router.push("/profile");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};


</script>
