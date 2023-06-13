import React from "react";
import Swal from "sweetalert2";

export const alert = (deleteClient: any, updateData:any, e: React.ChangeEvent<HTMLInputElement>)=>{
    Swal.fire({
        title: "Quieres eliminar o editar?",
        text: "No se podra revertir!",
        icon: "warning",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonColor: "#3085d6",
        denyButtonText: "Editar",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar!",
        customClass: {
          denyButton: 'order-3',
        },
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "La clienta fue eliminada.",
          );
          deleteClient(e);
        }else if(result.isDenied){
          updateData(e)
        }
      });
}