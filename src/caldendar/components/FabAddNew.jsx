import { addHours } from "date-fns";
import { useCalendarStore, useUIStore } from "../../hooks"


export const FabAddNew = () => {

    const { openDateNodal } = useUIStore();
    const { setActiveEvent } = useCalendarStore();


    const handleClickNew = () => {

        setActiveEvent({
            title:'',
            notes:'',
            start: new Date(),
            end: addHours( new Date(), 2),
            bgColor:'#fafafa',
            user:{
            _id:'123',
            name:'erick de yo'
            }
        });

        openDateNodal();
    }

  return (
    <button
        className="btn btn-primary fab"
        onClick={handleClickNew}
    >
        <i className="fa fa-plus-square" />
    </button>
  )
}
