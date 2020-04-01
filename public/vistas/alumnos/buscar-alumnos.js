var appBuscarAlumnos = new Vue({
    el: '#frm-buscar-alumnos',
    data: {
        misalumnos: [],
        valor: ''
    },
    methods: {
        buscarAlumno: function () {
            fetch(`private/modulos/alumnos/procesos.php?proceso=buscarAlumno&alumno=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.misalumnos = resp;
            });
        },
        modificarAlumno: function (alumno) {
            appalumno.alumno = alumno;
            appalumno.alumno.accion = 'modificar';
        },
        eliminarAlumno: function (idAlumno) {
            var mensaje = confirm("¿Esta seguro que desea eliminar este registro?");
            if (mensaje) {
                alert("¡El registro se ha eliminado con exito!");
                fetch(`private/modulos/alumnos/procesos.php?proceso=eliminarAlumno&alumno=${idAlumno}`).then(resp => resp.json()).then(resp => {
                    this.buscarAlumno();
                });
            } else {
                alert("¡El registro no ha sido eliminado!");
            }
        }
    },
    created: function () {
        this.buscarAlumno();
    }
});
