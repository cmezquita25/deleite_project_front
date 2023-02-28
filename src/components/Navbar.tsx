import router from "@/router";
import { defineComponent } from "vue";

const Navbar = defineComponent({
    methods: {
        cerrarsesion(){
            localStorage.removeItem("token");
            this.$router.push("/login")
        }
    },
    render() {
        return (
            <>
                &nbsp;
                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div class="container px-4">
                        <a href="/Inicio"><img src="src/assets/D_Deleite.svg" width="50" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/inicio">Inicio</a>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/catálogo" class="nav-link">Catálogo</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/contacto" class="nav-link">Contacto</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/testimonios" class="nav-link">Testimonios</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/crearcategoria" class="nav-link">Crear categoria</router-link>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Administrador</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Mi cuenta</a></li>
                                        <li><router-link class="dropdown-item" to="/creartematica">Crear tematica</router-link></li>
                                        <li><router-link class="dropdown-item" to="/login">Iniciar sesión</router-link></li>
                                        <li><router-link class="dropdown-item" to="/registro">Registrar</router-link></li>
                                        <li><a class="dropdown-item" onClick={this.cerrarsesion}>Cerrar sesión</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )

    }
})

export default Navbar

