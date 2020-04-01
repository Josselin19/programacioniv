var appBuscarDocentes = new Vue({
    el: '#frm-buscar-docentes',
    data: {
        misdocentes: [],
        valor: ''
    },
    methods: {
        buscarDocente: function () {
            fetch(`private/modulos/docentes/procesos.php?proceso=buscarDocente&docente=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.misdocentes = resp;
            });
        },
        modificarDocente: function (docente) {
            appdocente.docente = docente;
            appdocente.docente.accion = 'modificar';
        },
        eliminarDocente: function (idDocente) {
            var mensaje = confirm("¿Esta seguro que desea eliminar este registro?");
            if(mensaje){
                alert("¡El registro se ha eliminado con exito!");
                fetch(`private/modulos/docentes/procesos.php?proceso=eliminarDocente&docente=${idDocente}`).then(resp => resp.json()).then(resp => {
                this.buscarDocente();
                });
            } else {
                alert("¡El registro no ha sido eliminado!");
            }
        }
    },
    created: function () {
        this.buscarDocente();
    }
});
