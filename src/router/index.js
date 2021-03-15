import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/User/Login.vue';
import Specialties from '../views/Specialties.vue';
import Doctors from '../views/Doctor/Doctors.vue';
import Profile from '../views/Profile.vue';
import Signup from '../views/User/Signup.vue';
import LoginDoctor from '../views/Doctor/LoginDoctor.vue';
import SignupDoctor from "../views/Doctor/SignupDoctor";
import UserProfile from "../views/User/UserProfile";
import DoctorProfile from "../views/Doctor/DoctorProfile";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/specialties',
        name: 'Specialties',
        component: Specialties
    },
    {
        path: '/doctors',
        name: 'Doctors',
        component: Doctors
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        component: Profile,
        props: true
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/signup-doctor',
        name: 'SignupDoctor',
        component: SignupDoctor
    },
    {
        path: '/login-doctor',
        name: 'LoginDoctor',
        component: LoginDoctor
    },
    {
        path: '/user-profile/:id',
        name: 'UserProfile',
        component: UserProfile
    },

    {
        path: '/doctor-profile/:id',
        name: 'DoctorProfile',
        component: DoctorProfile
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
