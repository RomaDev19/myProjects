import Dashboard from '../views/Dashboard.vue';
import Deposit from '../views/Deposit.vue';
import Coin from '../views/Coin.vue';
import Finance from '../views/Finance.vue';
import SingIn from '../views/SingIn.vue';
import Fake from '../views/Fake.vue';
import Real from '../views/Real.vue';
import FakeClient from '../views/FakeClient.vue';
import RealClient from '../views/RealClient.vue';
import Pool from '../views/Pool.vue';
import Case from '../views/Case.vue';
import Award from '../views/Award.vue';
import Rank from '../views/Rank.vue';
import pageNotFound from '../views/404.vue';
import Withdrawals from '../views/Withdrawals.vue';
import guest from './middleware/guest';
import auth from './middleware/auth';

export default [
  {
    path: '/',
    name: 'SingIn',
    component: SingIn,
    meta: { middleware: [guest] },
  },
  {
    path: '*',
    name: '404',
    component: pageNotFound,
    meta: { middleware: [guest, auth] },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { middleware: [auth] },
  },
  {
    path: '/clients',
    name: 'Clients',
    meta: { middleware: [auth] },
    redirect: () => {
      return { path: '/clients/clients' };
    },
  },
  {
    path: '/clients/fake-clients',
    name: 'Fake Clients',
    component: FakeClient,
    meta: { middleware: [auth] },
  },
  {
    path: '/clients/clients',
    name: 'Client',
    component: RealClient,
    meta: { middleware: [auth] },
  },
  {
    path: '/structure',
    name: 'Structure',
    meta: { middleware: [auth] },
    redirect: () => {
      return { path: '/structure/real' };
    },
  },
  {
    path: '/structure/fake',
    name: 'Fake',
    component: Fake,
    meta: { middleware: [auth] },
  },
  {
    path: '/structure/real',
    name: 'Real',
    component: Real,
    meta: { middleware: [auth] },
  },

  {
    path: '/products',
    name: 'Products',
    meta: { middleware: [auth] },
    redirect: () => {
      return { path: '/products/pools' };
    },
  },
  {
    path: '/products/pools',
    name: 'Pools',
    component: Pool,
    meta: { middleware: [auth] },
  },
  {
    path: '/products/cases',
    name: 'Cases',
    component: Case,
    meta: { middleware: [auth] },
  },
  {
    path: '/ranks',
    name: 'Ranks',
    meta: { middleware: [auth] },
    redirect: () => {
      return { path: '/ranks/awards' };
    },
  },
  {
    path: '/ranks/awards',
    name: 'Awards',
    component: Award,
    meta: { middleware: [auth] },
  },
  {
    path: '/ranks/ranks',
    name: 'Rank',
    component: Rank,
    meta: { middleware: [auth] },
  },
  // {
  //   path: '/deposit',
  //   name: 'Deposit',
  //   component: Deposit,
  //   meta: { middleware: [auth] },
  // },
  {
    path: '/coin',
    name: 'Coin',
    component: Coin,
    meta: { middleware: [auth] },
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance,
    meta: { middleware: [auth] },
  },
  {
    path: '/withdrawals',
    name: 'Withdrawals',
    component: Withdrawals,
    meta: { middleware: [auth] },
  },
];
