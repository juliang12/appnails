import React from "react";
import Swal from "sweetalert2";

export const alert = (deleteClient: any, e: React.ChangeEvent<HTMLInputElement>)=>{
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
          );
          deleteClient(e);
        }
      });
}