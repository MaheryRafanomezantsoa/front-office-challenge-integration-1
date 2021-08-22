import EventsContent from './components/eventsContent'
import Medals from './components/medals'
import NewEvent from './components/newEvent'
import React, { useEffect, useState } from 'react'
import { Layout, Select, Table } from 'antd'
import 'antd/dist/antd.css'

const { Content } = Layout
function App() {
  return (
    <div className="App">
      <NewEvent />
      <h3 style={{ marginTop: '1.5em', fontSize: '1.2em', fontWeight: 'bold' }}>
        Prochaines épreuves
      </h3>
      <Content>
        <EventsContent />
      </Content>

      <h3 style={{ marginTop: '1.5em', fontSize: '1.2em', fontWeight: 'bold' }}>Médailles</h3>
      <Medals />
    </div>
  )
}

export default App
