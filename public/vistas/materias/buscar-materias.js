var appBuscarMaterias = new Vue({
    el: '#frm-buscar-materias',
    data:{
        mismaterias:[],
        valor:''
    },
    methods:{
        buscarMateria: function(){
            fetch(`private/modulos/materias/procesos.php?proceso=buscarMateria&materia=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.mismaterias = resp;
            });
        },
        modificarMateria: function(materia){
            appmateria.materia = materia;
            appmateria.materia.accion = 'modificar';
        },
        eliminarMateria: function(idMateria){
            var mensaje = confirm("¿Esta seguro que desea eliminar este registro?");
            if (mensaje) {
                alert("¡El registro se ha eliminado con exito!");
                fetch(`private/modulos/materias/procesos.php?proceso=eliminarMateria&materia=${idMateria}`).then(resp => resp.json()).then(resp =>{
                    this.buscarMateria();
                });
            } else {
                alert("¡El registro no ha sido eliminado!");
            }
        }
    },
    created: function() {
        this.buscarMateria();
    }
});