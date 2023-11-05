import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { useFirebaseAuth } from 'vuefire';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth();
  const authUser = ref(null);
  const errorMsg = ref('');
  const router = useRouter();

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authUser.value = user;
      }
    });
  });

  const errorCodes = {
    'auth/user-not-found': 'Usuario no encontrado.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/invalid-login-credentials': 'Credenciales inválidas.',
  };

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        authUser.value = user;
        router.push({ name: 'manage' });
      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code];
      });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: 'inicio' });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const hasError = computed(() => {
    return errorMsg.value;
  });

  const clearError = () => {
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
  };

  const isAuth = computed(() => {
    return authUser.value;
  });

  return {
    login,
    logout,
    hasError,
    isAuth,
    errorMsg,
    clearError,
  };
});
