import { defineComponent } from "vue";

const Producto = defineComponent({
    render() {
        return (
            <>
                <body>
                    <div class="TituloProductos">

                        <h2>PRODUCTOS</h2>

                        <h6 style="width:600px">
                            Los productos que registres se categorizarán automáticamente según las preferencias y datos que registres
                        </h6>

                    </div>

                    <div class="Productos_Create">
                        <div class="FormularioProductos row">

                            <div class="col">
                                <form>

                                    <div class="mb-3 LabelsForms">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Estatus</option>
                                            <option value="1">Activo</option>
                                            <option value="2">Inactivo</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label LabelsForms">Nombre del producto</label>
                                        <input type="text" class="form-control" autocomplete="off" id="nombre" />
                                    </div>


                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label LabelsForms">Precio</label>
                                        <input type="number" class="form-control" autocomplete="off" id="nombre" placeholder="0.00" />
                                    </div>

                                    <div class="mb-3 LabelsForms">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>¿Es Popular?</option>
                                            <option value="1">Si</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label LabelsForms">Imágenes</label>
                                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                                    </div>

                                </form>
                            </div>

                            <div class="col">
                                <form>

                                    <div class="mb-3 LabelsForms">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Categoria</option>
                                            <option value="1">Pasteles</option>
                                            <option value="2">Roscas</option>
                                            <option value="3">Dulces</option>
                                            <option value="4">Otros</option>
                                        </select>
                                    </div>

                                    <div class="mb-3 LabelsForms">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Tipo de endulzante</option>
                                            <option value="1">Con azúcar</option>
                                            <option value="2">Sin azúcar</option>
                                            <option value="3">A elegir</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label LabelsForms">Temática</label>
                                        <input type="text" class="form-control" autocomplete="off" id="nombre" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label LabelsForms">Descripción</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                </form>
                            </div>

                            <div class="mb-3">
                                <button class="btn btn-cruds">Enviar</button>
                            </div>

                        </div>

                    </div>
                </body>
            </>
        )
    }
})

export default Producto