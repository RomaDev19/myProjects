import Vue from 'vue';
import Routes from './routes';
import VueRouter from 'vue-router';
import store from '@/store';
import middlewarePipeline from './middlewarePipeline';

Vue.use(VueRouter);

const routes = Routes;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
