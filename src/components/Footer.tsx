import { defineComponent } from "vue";


const Footer = defineComponent({
    render() {
        return (
            <>
                <div class="DeleiteFooter">
                    <footer class="bg-dark text-center text-lg-start text-white">
                        <div class="container p-4 pb-0">
                            <section class="">
                                <div class="row">

                                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <div>
                                            <img class="image-fluid imglogo" src="../src/assets/Deleite_logo.jpg" />
                                        </div>
                                        &nbsp;
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni quos aspernatur iusto,
                                            esse earum? Aliquid consequatur totam perferendis quasi amet quam enim? Magni atque vero,
                                            consectetur doloremque expedita maiores.
                                        </p>
                                    </div>

                                    <hr class="w-100 clearfix d-md-none" />
                                    <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">

                                    </div>
                                    <hr class="w-100 clearfix d-md-none" />
                                    <hr class="w-100 clearfix d-md-none" />
                                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                        <h6 class="text-center text-uppercase mb-4 font-weight-bold">CONTACTO</h6>
                                        <div class="text-center">
                                            <p><i class="bi bi-geo-alt-fill"></i> Mérida, Yucatán</p>
                                            <p><i class="bi bi-envelope-fill"></i> correo@gmail.com</p>
                                            <p><i class="bi bi-telephone-fill"></i> + 01 234 567 88</p>
                                            <p><i class="bi bi-telephone-fill"></i> + 01 234 567 89</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                        <div class="icons-redes">
                                            <h6 class="text-uppercase mb-4 font-weight-bold">Síguenos</h6>
                                        </div>
                                        <div class="icons-redes">
                                            <a href="#" class="m-1 fa fa-facebook"></a>
                                            &nbsp;
                                            <a href="#" class="m-1 fa fa-instagram"></a>
                                            &nbsp;
                                            <a href="#" class="m-1 fa fa-whatsapp"></a>
                                            &nbsp;
                                            <a href="#" class="m-1 fa fa-tiktok"></a>
                                        </div>
                                        &nbsp;
                                    </div>
                                </div>

                            </section>

                        </div>


                        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                            © 2020 Copyright:
                            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>

                    </footer>

                </div>
            </>
        )
    }
})

export default Footer