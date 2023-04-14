import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id:new Date().getTime(),
    title:'cumpleaños del jefe',
    notes:'es joto',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor:'#fafafa',
    user:{
      _id:'123',
      name:'erick de yo'
    }
  }
//----------------------------------------------------------------|
//----------------------------------------------------------------|
//----------------------------------------------------------------|
//----------------------------------------------------------------|
//----------------------------------------------------------------|




export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
      events:[ tempEvent ],
      activeEvents: null,
    },
    reducers: {
        
        onSetActiveEvent : ( state, { payload } ) => {
          state.activeEvents = payload;
        },

        onAddNewEvent : ( state, { payload } ) => {
          state.events.push( payload );
          state.activeEvents =null;
        },

        onUpdateEvent : ( state, { payload } ) => {
          state.events = state.events.map( event => {
            if( event._id === payload._id){
              return payload;
            }

            return event;
          });
        },

        onDeleteEvent: (state)=>{

          if(state.activeEvents){
              state.events = state.events.filter( event =>{
                return event._id != state.activeEvents._id;
              });
              state.activeEvents = null;
          }

        }
    }
});
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =  calendarSlice.actions;