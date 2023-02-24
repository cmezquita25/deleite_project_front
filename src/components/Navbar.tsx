import { defineComponent } from "vue";

const Navbar = defineComponent({
    render() {
        return (
            <>
                &nbsp;
                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div class="container px-4">
                        <a href="/Inicio"><img src="src/assets/D_Deleite.svg" width="50"/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                <a class="nav-link" href="/">Inicio</a>
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

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )

    }
})

export default Navbar

