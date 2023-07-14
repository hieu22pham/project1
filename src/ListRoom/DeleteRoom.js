import { Button, Popconfirm } from "antd";
import {DeleteOutlined} from "@ant-design/icons"
import { deleteRoom } from "../components/services/roomsService";

function DeleteRoom(props){
  const {record, onReload} = props;

  const handleDelete = async() => {
    const respone = await deleteRoom(record.id);
    if(respone){
      onReload();
    }
  }

  return(
    <>
      <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={handleDelete}>
       <Button danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  )
}

export default DeleteRoom;