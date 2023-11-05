import { createRouter, createWebHistory } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
    },
    {
      path: '/acerca-de',
      name: 'acercade',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sedes',
      name: 'sedes',
      component: () => import('../views/SedesView.vue'),
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayoutView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'manage',
          name: 'manage',
          component: () => import('../views/admin/ManageView.vue'),
        },
        {
          path: 'newstudent',
          name: 'newstudent',
          component: () => import('../views/admin/student/NewStudentView.vue'),
        },
        {
          path: 'allstudents',
          name: 'allstudents',
          component: () => import('../views/admin/AllStudentsView.vue'),
        },
        {
          path: 'newpersonal',
          name: 'newpersonal',
          component: () =>
            import('../views/admin/personal/NewPersonalView.vue'),
        },
        {
          path: 'allpersonal',
          name: 'allpersonal',
          component: () => import('../views/admin/AllPersonalView.vue'),
        },
        {
          path: 'newpost',
          name: 'newpost',
          component: () => import('../views/admin/blog/NewPostView.vue'),
        },
        {
          path: 'allposts',
          name: 'allposts',
          component: () => import('../views/admin/AllPostView.vue'),
        },
        {
          path: 'editstudent/:id',
          name: 'editstudent',
          component: () => import('../views/admin/student/EditStudentView.vue'),
        },
        {
          path: 'editpersonal/:id',
          name: 'editpersonal',
          component: () =>
            import('../views/admin/personal/EditPersonalView.vue'),
        },
        {
          path: 'editpost/:id',
          name: 'editpost',
          component: () => import('../views/admin/blog/EditPostView.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  if (requiresAuth) {
    try {
      await authenticateUser();
      next();
    } catch (error) {
      console.log(error);
      router.push({ name: 'inicio' });
    }
  } else {
    next();
  }
});

const authenticateUser = () => {
  const auth = useFirebaseAuth();
  return new Promise((resolve, reject) => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      unsubcribe();
      if (user) {
        resolve();
      } else {
        reject();
      }
    });
  });
};

export default router;
