'use client'

import './calendar.css'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { EventClickArg, EventSourceInput } from '@fullcalendar/core/index.js'
import { useEffect, useState } from 'react'


function openCalendarLinkNewTab(arg: EventClickArg) {
  arg.jsEvent.preventDefault();
  if(arg.event.url) {
    window.open(arg.event.url, '_blank')?.focus()
  }
}

// tailwind classes to alternate between for events
const BG_CLASSES = [
  'bg-red-500', 'bg-emerald-500'
]

export default function Calendar() {
  const [events, setEvents] = useState<EventSourceInput>([]);

  useEffect(()=>{
    // get 
    (async ()=>{
      const data = await fetch('/events.json')
      const jsonData = ((await data.json()) as any[]).map((v, idx)=>(
        {
          ...v, 
          className: BG_CLASSES[idx % BG_CLASSES.length]
        }
      ))
      setEvents(jsonData)
    })()
  }, []);

  console.log("Events:", events)
  return (
    <FullCalendar
      
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      eventClick={openCalendarLinkNewTab}
      events={events}
    />
  )
}