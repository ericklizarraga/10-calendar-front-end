import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent,onUpdateEvent,onDeleteEvent } from "../store/calendar/calendarSlice";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events,activeEvents } = useSelector( state => state.calendar );


    const setActiveEvent = ( calendarEvent) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async ( calendarEvent ) => {
        //todo llegar alñ abckend

        if(calendarEvent._id){
          //update
          dispatch( onUpdateEvent( {...calendarEvent} ) );
        }else{
          //creando
         dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
        }
    }

    const startDeletingEvent = () => {
       //todo llegar alñ abckend
      dispatch( onDeleteEvent() );
    }

  return {
    //*properties
     events,
     activeEvents,
     hasEventSelected: !!activeEvents,
     
    //*methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  }
}
