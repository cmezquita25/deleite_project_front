import HomeView from '@/views/HomeView'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },

    {
      path: '/inicio',
      name: 'inicio',

      component: () => import('@/views/HomeView')
    },

    {
      path: '/catálogo',
      name: 'catalogo',

      component: () => import('@/views/Catalogo')
    },
    {
      path: '/contacto',
      name: 'contacto',

      component: () => import('@/views/Contacto')
    },
    {
      path: '/testimonios',
      name: 'testimonios',

      component: () => import('@/views/Testimonios')
    },

    {
      path: '/login',
      name: 'login',

      component: () => import('@/views/Login/Login')
    },

    {
      path: '/registro',
      name: 'registro',

      component: () => import('@/views/Login/Registrarse')
    },

    //CRUD CATEGORIAS
    {
      path: '/crearcategoria',
      name: 'crearcategoria',

      component: () => import('@/views/Cruds/CategoriaCrud')
    },

    {
      path: '/creartematica',
      name: 'creartematica',

      component: () => import('@/views/Cruds/TematicaCrud')
    },
    //CRUD PRODUCTOS
    {
      path: '/crearproducto/:id',
      name: 'crearproducto',

      component: () => import('@/views/Cruds/Productos/ProductoCrud')
    },

    {
      path: '/consultarproducto',
      name: 'consultarproducto',

      component: () => import('@/views/Cruds/Productos/ConsultarProducto')
    },

    {
      path: '/detalleproducto',
      name: 'detalleproducto',

      component: () => import('@/views/Cruds/Productos/DetalleProducto')
    },
  ]
})

export default router
