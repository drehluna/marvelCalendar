import { withRouter } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import moment from "moment";
import 'moment/locale/pt-br'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { useCallback, useEffect, useState } from "react";
import { pupoluteCalendar } from "../../Helpers/createEvents";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { messages } from "./Messages";

const DragAndDropCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment)

function MarvelCalendar() {

    const [myEvents, setMyEvents] = useState([])
    const [storagedEvents, setStoragedEvents] = useLocalStorage('events', myEvents)

    useEffect(() => {
       if(myEvents.length) {
        setStoragedEvents(myEvents)
       }
    }, [myEvents])

    useEffect(() => {
        const getEvents = async () => {
            if(storagedEvents.length) {
                setMyEvents(storagedEvents)
                return
            }
            const events = await pupoluteCalendar()
            setMyEvents(events)
        }
        getEvents()
    }, [])
    
    const moveEvent = useCallback(
      ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
        const { allDay } = event
        if (!allDay && droppedOnAllDaySlot) {
          event.allDay = true
        }
  
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          const filtered = prev.filter((ev) => ev.id !== event.id)
          return [...filtered, { ...existing, start, end, allDay }]
        })
      },
      [setMyEvents]
    )
  
    const resizeEvent = useCallback(
      ({ event, start, end }) => {
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          const filtered = prev.filter((ev) => ev.id !== event.id)
          return [...filtered, { ...existing, start, end }]
        })
      },
      [setMyEvents]
    )

  return (
    <div>
      <DragAndDropCalendar
        localizer={localizer}
         events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh ", margin: '10px'}}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        messages={messages}
       
      />
    </div>
  );
}

export default withRouter(MarvelCalendar);
