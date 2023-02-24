import { Call } from "../../../helpers/calls/Call"
import { defineComponent } from "vue";
interface Categoria {

  idCategoria?: number,
  nombre?: string,
  imagen?: string,
}
let oCall = new Call();
const CategoriaCrud = defineComponent({
  data() {
    return {
      valores: Object as Categoria,
      categoria: Object as Categoria,
      accion: Object as any,
      id: Object as any
    }
  },

  methods: {
    handlerchange(e: any) {
      const { name, value } = e.target;
      this.valores = ({ ...this.valores, [name]: value })

    },

    crearCategoria() {

      if (this.accion === "editar") {
        oCall.cenisFetch('PUT', `api/Categoria/${this.id}`, "", this.valores)
          .then((response) => {
            console.log(response)
          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }
      else {
        oCall.cenisFetch('POST', 'api/Categoria/create', "", this.valores)
          .then((response) => {
            console.log(response)
            if (response.status === 201) {
              console.log('Se ha creado una nueva categoría:', response.Data);
              console.log(response)
              
            }
            else {

            }

          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }

    },

    firtRefresh() {
      this.accion = this.$route.query.accion || "";
      this.id = this.$route.query.id;

      if (this.accion === "editar") {
        oCall.cenisFetch('GET', `api/Categoria/${this.id}`, "", '')
          .then((response) => {
            console.log(response)
            if (response.status === 200) {
              this.categoria = response.Data
              this.valores = response.Data
            }
            else {

            }

          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }
    }

  },

  mounted() {
    this.firtRefresh()
  },
  render() {
    return (

      <>
        <br />
        <br />
        <div class="container">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre categoria</label>
              <input type="text" class="form-control" autocomplete="off" id="nombre" value={this.categoria.nombre} name="nombre" onChange={(e) => this.handlerchange(e)} aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Imagen</label>
              <input type="text" class="form-control" autocomplete="off" id="imagen" name="imagen" value={this.categoria.imagen} onChange={(e) => this.handlerchange(e)} />
            </div>
            <button  onClick={this.crearCategoria} class="btn btn-primary">Submit</button>
          </form>
        </div>

      </>
    );
  }
})

export default CategoriaCrud