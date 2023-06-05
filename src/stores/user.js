import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import router from "../router";

const apiUrl = "http://pingpong.test/api"

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function register(name, email, password, password_confirm) {
    const res = await axios.post(`${apiUrl}/auth/register`, { name, email, password, password_confirm })
    user.value = res.data
    router.push('/')
  }

  async function login(email, password) {
    const res = await axios.post(`${apiUrl}/auth/login`, { email: 'xhtxlof@gmail.com', password: 'password' })
    user.value = res.data
    router.push('/')
  }


  return { user, register, login }
}, { persist: true })
