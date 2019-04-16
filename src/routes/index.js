import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';
import ThirdStep from '../components/steps/ThirdStep.vue';

export const routes = [
    { path: '/first-step', name: 'firstStep', component: FirstStep },
    { path: '/second-step', name: 'secondStep', component: SecondStep },
    { path: '/third-step', name: 'thirdStep', component: ThirdStep }
];