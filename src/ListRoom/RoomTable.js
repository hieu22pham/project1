import { Table, Badge } from "antd";
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
  const { rooms, onReload } = props
  const columns = [
    {
      title: 'Tên phòng',
      dataIndex: 'nameRoom',
      key: 'nameRoom',
      width: '13%',
    }, {
      title: 'Số giường',
      dataIndex: 'quantityBed',
      key: 'quantityBed',
      width: '10%',
    }, {
      title: 'Số người',
      dataIndex: 'maxPeople',
      key: 'maxPeople',
      width: '10%',
    }, {
      title: 'Loại phòng',
      dataIndex: 'service',
      key: 'service',
      render: (_, record) => {
        return <>
          {record.service ? "VIP" : "Thường"}
        </>
      }, width: '10%',
    }, {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        return <>
          {record.status ? <Badge status="success" /> : <Badge status="error" />}
        </>
      }, width: '10%',
    }, {
      title: 'Hành động',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        return <>
          <DeleteRoom record={record} onReload={onReload}/>
        </>
      }, width: '10%',
    }
  ]

  return (
    <>
      <div className="table-room">
        <Table dataSource={rooms} bordered="true" columns={columns} rowKey="id" size="middle" 
        pagination={{ pageSize: 4 }}/>
      </div>
    </>
  )
}

export default RoomTable;