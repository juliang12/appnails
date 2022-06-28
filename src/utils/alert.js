import Swal from "sweetalert2";

export const alert = (deleteClient, e)=>{
    Swal.fire({
        title: "Estas segura que quierer eliminarla?",
        text: "No se podra revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "La clienta fue eliminada.",
            "Exitosamente"
          );
          deleteClient(e);
        }
      });
}