import { useDispatch, useSelector } from "react-redux"
import { onCloseDateNodal, onOpenDateNodal } from "../store";


export const useUIStore = () => {
  
    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.ui );

    const openDateNodal = () => {
        dispatch( onOpenDateNodal() );
    }
    
    const closeDateNodal = () => {
        dispatch( onCloseDateNodal() );
    }

    return {
        //*propiedades
        isDateModalOpen,

        //*metodos
        openDateNodal,
        closeDateNodal,
    }
}
