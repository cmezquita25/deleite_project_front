import { defineComponent} from "vue";
import { Call } from "../../../helpers/calls/Call"

interface Tematica {

    idTematica?: number,
    nombreT?: string,
}
let oCall = new Call()
const tematicaCrud = defineComponent({
    data() {
        return {
            valores: Object as Tematica,
            tematica: Object as Tematica,
        }
    },
    methods: {
        handlerchange(e: any) {
            const { name, value } = e.target;
            this.valores = ({ ...this.valores, [name]: value })

        },

        crearTematica(e:any){
            e.preventDefault(),
            oCall.cenisFetch('POST', 'api/Tematica/create', '', this.valores )
            .then((response) =>{
                console.log(response)
                if(response.status === 201){
                    console.log(response)
                    console.log("Se ha creado una nueva tematica")
                    console.log(response)
                    this.$router.push('/inicio')
                }
                else{
                    console.log("Error")
                }
            })
            .catch((error) =>{
                console.error('Error al crear la tematica', error)
            });
        }
    },
    render(){
        return(
            <>
                <div class="Container_Create">
          <div>

            <h2>TEMATICAS</h2>
            <h6 style="width:600px">Las tematicas te permiten administrar y controlar la vista de los productos que ofreces y tienes
              disponibles en la sección del "Catálogo"</h6>

          </div>
          &nbsp;
          <div class="Create_Form">

            <form>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label LabelsForms">Nombre de la Tematica</label>
                <input type="text" class="form-control" autocomplete="off" value={this.tematica.nombreT} name="nombreT" onChange={(e) => this.handlerchange(e)} aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <button onClick={(e) =>this.crearTematica(e)} class="btn btn-cruds">Enviar</button>
              </div>

            </form>
          </div>
        </div>
            </>
        )
    }

})
export default tematicaCrud