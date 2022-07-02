import { toast } from "react-toastify";

 class Notice {
  toast(message:string){
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick:true,
      pauseOnHover:false,
    });
  }

  error(message:string){
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick:true,
      pauseOnHover:false,

    });
  }
}

export const notice = new Notice()
