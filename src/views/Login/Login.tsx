import { defineComponent } from "vue";

const login = defineComponent({
    render() {
        return (
            <>
                <section class="LoginCentrado">
                    <div class="container-fluid h-custom backgroundLogin">
                        <div>
                            <h1>¡Bienvenido!</h1>
                            <h4>Acceso restringido y único para Administradores del sitio</h4>
                            &nbsp;
                        </div>
                        &nbsp;
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            &nbsp;
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="src/assets/Deleite_logo.jpg" class="img-fluid" />
                            </div>

                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                                <form>

                                    <h2 class="display-6 tituloLogin" style="color: #724a3a">INICIAR SESIÓN</h2>
                                    <br></br>
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                                            placeholder="Correo" aria-label="Correo" />
                                    </div>


                                    <div class="form-outline mb-3">
                                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                                            placeholder="Contraseña" />
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">

                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />

                                            <label class="form-check-label" for="form2Example3">Recuerdame</label>
                                        </div>
                                        <a href="#!" class="text-body">Olvidaste tu contraseña?</a>
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <div class="text-center">
                                            <a type="button" href="#" class="btn btn-login btn-login2">Iniciar sesión</a>
                                        </div>
                                    </div>

                                </form>
                                &nbsp;
                            </div>
                            &nbsp;
                        </div>
                        &nbsp;
                    </div>
                    &nbsp;
                </section>
            </>
        )
    }
})

export default login

