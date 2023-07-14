import { useEffect, useState } from "react"
import { getListRoom } from "../components/services/roomsService";
import { Button } from "antd";
import "./listroom.css"
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";
import {UnorderedListOutlined, TableOutlined} from "@ant-design/icons"

function ListRoom(props) {
  const [rooms, setRooms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const fetchApi = async () => {
    const respone = await getListRoom();
    setRooms(respone)
  }

  useEffect(() => {

    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  }

  console.log(rooms);
  return (
    <>
      <Button className="btnIsGrid" onClick={() => setIsGrid(!isGrid)}>
        {isGrid?<UnorderedListOutlined /> : <TableOutlined /> }
      </Button>
      {isGrid ? (<>
        <RoomGrid rooms={rooms}/>
      </>)

        : (<>
          <RoomTable rooms={rooms} onReload={() => handleReload()}/>
        </>)}


    </>
  )
}

export default ListRoom;