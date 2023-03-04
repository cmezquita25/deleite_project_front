import { defineComponent } from "vue";
import { Call } from "../../../../helpers/calls/Call"

interface ProductImage {
  IdProducto?: number;
  idCategoria?: number;
  idTematica?: number;
  nombreP?: string;
  descripcionP?: string;
  precio?: string;
  ImagenPrincipalchar?: string;
  popular?: boolean;
  ingredienteselect?: string;
  saludable?: boolean;
};
interface Fotos {
  idProducto?: number,
  imagenPrincipalchar?: string
};


function borrarProducto() {
  alert("joasdasd");
  // Código para borrar el producto
}

function guardarDatosAntesDeSalir(event: BeforeUnloadEvent) {
  // Guardar los datos del formulario en el almacenamiento local (si es necesario)
  borrarProducto();
  // Mostrar un mensaje al usuario para confirmar si desea salir de la página o no
  event.preventDefault();
  event.returnValue = "¿lmhjhjhhghggvgvgvgvgvgvgvgvgvgvgv?";
}

function habilitarSalida() {
  borrarProducto();
  // Permitir que el usuario abandone la página
  window.removeEventListener("beforeunload", guardarDatosAntesDeSalir);
}

function deshabilitarSalida() {
  // Impedir que el usuario abandone la página
  window.addEventListener("beforeunload", guardarDatosAntesDeSalir);
}

// Impedir que el usuario abandone la página al cargarla por primera vez
deshabilitarSalida();


// Para habilitar la salida, llama a la función habilitarSalida()
// Para deshabilitar la salida, llama a la función deshabilitarSalida()


let oCall = new Call();
let inputCount = 0;





function readFileAsBase64(file?: File): Promise<string | undefined> {
  return new Promise((resolve) => {
    if (!file) {
      resolve(undefined);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result as string;
      const base64 = base64Image.split(",")[1];
      resolve(base64);
      console.log(base64);
    };
  });
}
const Producto = defineComponent({
  data() {
    return {
      valores: Object as ProductImage,
      categoria: Object as ProductImage,
      accion: Object as any,
      id: Object as any

    }
  },
  methods: {
    handlerchange(e: any) {
      const { name, value } = e.target;
      this.valores = ({ ...this.valores, [name]: value })

    },
    async AgregarFotos() {

      const container = document.getElementById('contenedor-inputs');
      const addInputBtn = document.getElementById('crear-input');

      if (addInputBtn && container) {
        const input = document.createElement('input');
        input.type = 'file';
        input.id = `input-${++inputCount}`;
        input.name = `input-${++inputCount}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
          deleteInput(input, deleteBtn);
        });

        const wrapper = document.createElement('div');
        wrapper.appendChild(input);
        wrapper.appendChild(deleteBtn);

        container.appendChild(wrapper);
      } else {
        alert("Error total")
      }
      function deleteInput(input: HTMLInputElement, button: HTMLButtonElement) {
        const wrapper = button.parentElement;
        if (wrapper) {
          wrapper.remove();
        } else {
          alert("Error");
        }
      }

    },

    llenarCategorias() {
      const select = document.getElementById("idcategoria") as HTMLSelectElement;
      oCall.cenisFetch('GET', "api/Categoria/getall", "", "")
        .then((response) => {
          select.innerHTML = "";
          if (response.Data instanceof Array) {
            response.Data.forEach((item: any) => {
              const option = document.createElement("option");
              option.value = item.idCategoria;
              option.text = item.nombre;
              select.appendChild(option);
            });
          }
        })
      // Código para borrar el producto
    },


    llenarTematica() {
      const select = document.getElementById("idtematica") as HTMLSelectElement;
      oCall.cenisFetch('GET', "api/Tematica/getall", "", "")
        .then((response) => {
          select.innerHTML = "";
          if (response.Data instanceof Array) {
            response.Data.forEach((item: any) => {
              const option = document.createElement("option");
              option.value = item.idTematica;
              option.text = item.nombreT;
              select.appendChild(option);
            });
          }
        })
    },
    borrarProducto() {
      var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;
      const id = parseInt(nombreid)
      const url = `api/Imagenes/delete/${id}`;
      oCall.cenisFetch('DELETE', url, "", "")
        .then(async (response) => {
          console.log("EXUTI¡");
        })
      alert("joasdasd");
      // Código para borrar el producto
    },
    async crearCategoria() {
      var imagenElement = document.getElementById('imagen') as HTMLInputElement;
      var imagen = await readFileAsBase64(imagenElement.files?.[0]);
      var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;


      const idcategoria = (document.getElementById('idcategoria') as HTMLSelectElement).value;
      const idtematica = (document.getElementById('idtematica') as HTMLSelectElement).value;
      const popular = (document.getElementById('popular') as HTMLSelectElement).value;
      const ingredienteselect = (document.getElementById('ingredienteselect') as HTMLInputElement).value;
      const saludable = (document.getElementById('saludable') as HTMLSelectElement).value;



      this.valores.IdProducto = parseInt(nombreid);
      this.valores.idCategoria = parseInt(idcategoria);
      this.valores.idTematica = parseInt(idtematica);
      this.valores.popular = Boolean(popular);
      this.valores.ingredienteselect = ingredienteselect;
      this.valores.saludable = Boolean(saludable);
      this.valores.ImagenPrincipalchar = imagen;




      if (this.valores.ImagenPrincipalchar !== null) {
        oCall.cenisFetch('POST', 'api/Producto/create', "", this.valores)
          .then(async (response) => {
            //console.log(response)
            try {
              if (response.status == 200) {


                /**
                 * 
                 * insertar las imagenes relacionadas al producto
                 */


                for (let index = 0; index <= inputCount; index++) {
                  const idimagen = `input-${index}`;
                  var imagenes = document.getElementById(idimagen) as HTMLInputElement;
                  if (imagenes != null) {
                    var imagens = await readFileAsBase64(imagenes.files?.[0]);
                    if (imagenes !== undefined) {
                      const fotos: Fotos = {
                        idProducto: parseInt(nombreid),
                        imagenPrincipalchar: imagens
                      }

                      oCall.cenisFetch('POST', 'api/Producto/addImage', "", fotos)
                        .then((response) => {
                          //console.log(response)
                          try {
                            if (response.status == 200) {
                              alert("EXITO");
                            } else {
                              console.log("Ha ocurrido un error")
                            }
                          } catch (error) {
                            console.log("Ha ocurrido un herror" + error);
                          }

                        })
                    }
                    //console.log("imagenes en base 64" + index + imagens + "      " + idimagen);
                  }
                }
                console.log("las fotos se agregaron correctamente ");




                //console.log('Se ha creado una nueva categoría:', response);
                //console.log(response);
                alert("exito");

              }
              else {
                console.log("Error en el registro");
                console.log(response)
              }
            } catch (error) {
              console.log("Ha ocurrido un herror" + error);
            }

          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      } else {
        console.log("Error al capturar los datos");
      }
    },


  },
  mounted() {
    this.llenarCategorias(),
      this.llenarTematica()
  },

  render() {
    return (
      <>
        <body>
          <div class="row">
            <div class="col-lg-12">

              <div class="row-lg-12">
                <div class="TituloProductos">

                  <h2> PRODUCTOS</h2>
                  <input id="nombreid" name="nombreid" type="number" value={this.$route.params.id} disabled style="display:none" />
                  <h6 style="width:600px">
                    Los productos que registres se categorizarán automáticamente según las preferencias y datos que registres
                  </h6>

                </div>
              </div>
              <form id="Formproduct" name="Formproduct">
                <div class="row">
                  <div class="col-lg-5">
                    <div class="col">
                      <input type="text" value={this.$route.params.id} class="form-control" style="display:none" />
                      <h2>Fotos</h2>

                    </div>
                    <div class="row">

                      <div id="contenedor-inputs"></div>



                    </div>
                  </div>
                  <div class="col-lg-6">

                    <div class="Productos_Create">
                      <div class="FormularioProductos row">

                        <div class="col">
                          <input id="idProducto" name="idProducto" type="number" value={this.$route.params.id} style="display:none" />
                          <div class="mb-3">
                            <label for="idcategoria">Categoria</label>
                            <select class="form-select" id="idcategoria" aria-label="Default select example">
                            </select>
                          </div>

                          <div class="mb-3">
                            <label for="idtematica">Tematica</label>

                            <select class="form-select" id="idtematica" aria-label="Default select example">
                            </select>
                          </div>


                          <div class="mb-3">
                            <select class="form-select" id="popular" aria-label="Default select example">
                              <option selected>¿Es popular?</option>
                              <option value="1">SI</option>
                              <option value="0">NO</option>
                            </select>
                          </div>


                          <div class="mb-3">
                            <select class="form-select" id="saludable" aria-label="Default select example">
                              <option selected>¿Es saludable?</option>
                              <option value="1">SI</option>
                              <option value="0">NO</option>
                            </select>
                          </div>


                          <div class="mb-3">
                            <label>Nombre</label>
                            <input type="text" class="form-control" name="nombreP" onChange={(e) => this.handlerchange(e)} required />
                          </div>

                          <div class="mb-3">
                            <label>Ingredientes</label>
                            <input type="text" class="form-control" name="ingredienteselect" id="ingredienteselect" required />
                          </div>

                          <div class="mb-3">
                            <label>Precio</label>
                            <input type="number" class="form-control" name="precio" onChange={(e) => this.handlerchange(e)} required />
                          </div>

                          <div class="mb-3">
                            <label>Descripción</label>
                            <textarea rows="3" class="form-control" type="text" id="descripcionP" name="descripcionP" onChange={(e) => this.handlerchange(e)} required />
                          </div>

                          <div class="mb-3">
                            <label>Imagen</label>
                            <input type="file" class="form-control" id="imagen" name="imagen" required />
                          </div>

                          <div class="mb-3">
                            <button onClick={this.crearCategoria} type="button" class="btn btn-cruds">Crear producto</button>
                            <button onClick={this.AgregarFotos} id="crear-input" type="button" class="btn btn-cruds">Agregar nueva foto</button>
                            <button onClick={this.borrarProducto} id="crear-inpust" type="button" class="btn btn-cruds">Cancelar</button>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </body>
      </>
    )
  }
})

export default Producto