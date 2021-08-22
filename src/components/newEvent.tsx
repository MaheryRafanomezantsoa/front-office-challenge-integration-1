import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import 'antd/dist/antd.css'

interface Sport {
  sportTitle: string
}
const NewEvent = () => {
  const [data, setData] = useState<Sport[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/nextEvent')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log('data:', data)
      })
  }, [])

  return (
    <>
      <Select mode="multiple" style={{ width: '100%' }}>
        {data.map((event, id) => {
          return (
            <Select.Option key={id} value={event.sportTitle}>
              {event.sportTitle}
            </Select.Option>
          )
        })}
      </Select>
    </>
  )
}

export default NewEvent
