import Vuedenez from '../components/vuedenez/Vuedenez';
import Techno from "../components/techno/Techno";
import Confiance from "../components/confiance/Confiance";
import Murphy from "../components/murphy/Murphy";
import Result from "../components/result/Result";

export const routes = [
    { path: '/vuedenez', name: 'vuedenez', component: Vuedenez },
    { path: '/techno', name: 'techno', component: Techno },
    { path: '/confiance', name: 'confiance', component: Confiance },
    { path: '/murphy', name: 'murphy', component: Murphy },
    { path: '/result', name: 'result', component: Result }
];
