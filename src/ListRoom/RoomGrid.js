import { Row, Col, Card, Space, Badge, Button } from "antd";

function RoomGrid(props) {
  const { rooms } = props

  return (
    <>
      <div className="list-room">
        <h2><strong>Danh sách phòng:</strong></h2>
        <Row gutter={[40, 40]} style={{ width: 1100 }}>
          {rooms.map(item => (

            <Col span={6} key={item.id} >
              <div className="room-item" style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
                <Space direction="vertical" size="middle" style={{ width: '100%' }} />

                <Badge.Ribbon text={item.service ? "VIP" : "Thường"}
                  color={item.service ? "purple" : "blue"}>
                  <Card title={item.name}>
                    <h4>Trạng thái:
                    </h4>
                    <div className="dot">
                      {item.status ?
                        <Badge status="success" text="Còn phòng" /> :
                        <Badge status="error" text="Hết phòng" />}
                    </div>
                    <p>
                      Tên phòng: <strong>
                        {item.nameRoom}
                      </strong>
                    </p>
                    <p>
                      Số giường: <strong>
                        {item.quantityBed}
                      </strong>
                    </p>
                    <p>
                      Số người tối đa: <strong>
                        {item.maxPeople}
                      </strong>
                    </p>
                  </Card>
                </Badge.Ribbon>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default RoomGrid;