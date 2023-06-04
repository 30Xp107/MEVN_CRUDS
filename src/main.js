import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
    {
        name:'home',
        path:'/',
        component:HomeComponent
    },
    {
        name:'create',
        path:'/create',
        component: CreateComponent
    },
    {
        name:'posts',
        path:'/posts',
        component: IndexComponent
    },
    {
        name:'edit',
        path:'/edit/:id',
        component: EditComponent
    }
];
app.use(routes);
app.mount('#app')
