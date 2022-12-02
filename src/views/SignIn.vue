<template>
  <h1>Sign In</h1>
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
  signInWithEmailAndPassword,
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
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully login!");
      router.push("/profile"); //redirect to profile
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;
        default:
          errMsg.value = "Email or password is incorrect";
          break;
      }
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/profile");
    })
    .catch((error) => {});
};
</script>
