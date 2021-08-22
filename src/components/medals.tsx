import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

interface IMedal {
  key: string
  country: string
  gold: number
  silver: number
  bronze: number
}
const Medals = () => {
  const [data, setData] = useState<IMedal[]>([])
  useEffect(() => {
    fetch('http://localhost:8000/medals')
      .then((res) => {
        return res.json()
        setData(data)
      })
      .then((data) => {
        console.log('data:', data)
      })
  }, [])
  const tableData = data.map((row) => ({
    Pays: row.country,
    Or: row.gold,
    Argent: row.silver,
    Bronze: row.bronze,
  }))
  const columns = [
    {
      title: 'Pays',
      dataIndex: 'pays',
      key: '1',
    },
    {
      title: 'Or',
      dataIndex: 'or',
      key: '2',
    },
    {
      title: 'Argent',
      dataIndex: 'argent',
      key: '3',
    },
    {
      title: 'Bronze',
      dataIndex: 'bronze',
      key: '4',
    },
    {
      title: 'Total',
      key: '5',
    },
  ]
  return (
    <>
      <Table dataSource={tableData} columns={columns}></Table>
    </>
  )
}
export default Medals
