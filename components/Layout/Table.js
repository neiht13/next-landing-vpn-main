import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
} from '@tremor/react';
import MapExample from "./MapExample";
import {useEffect, useState} from "react";
import ButtonOutline from "../misc/ButtonOutline.";

const UsersTable = ({users}) =>{
    const [marker, setMarker] = useState({lat: 0, lng: 0});
    useEffect(() => {
        geoFindMe()
    },[])

    const geoFindMe = () => {
        const success = (position) => {
            setMarker({lat: position.coords.latitude, lng: position.coords.longitude})
        }
        const error = () => {
            alert("Unable to retrieve your location");
        }
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success,error);
        }
    }

    const RenderMap = () => {
        console.log(marker)

        return(
            <MapExample center={marker} markers={[marker]}
                        zoom={15} height={'400px'}
                        address={"Địa chỉ:  VNPT Đồng Tháp"}
            />
            // <div>
            //     <button id="find-me" onClick={geoFindMe}>Show my location</button><br />
            //     <p id="status"></p>
            //     <a id="map-link" target="_blank"></a>
            // </div>
        )
    }
    return (
        <div>
            <RenderMap/>
        {/*<Table>*/}
        {/*    <TableHead>*/}
        {/*        <TableRow>*/}
        {/*            <TableHeaderCell>Name</TableHeaderCell>*/}
        {/*            <TableHeaderCell>Username</TableHeaderCell>*/}
        {/*            <TableHeaderCell>Email</TableHeaderCell>*/}
        {/*        </TableRow>*/}
        {/*    </TableHead>*/}
        {/*    <TableBody>*/}
        {/*        {users.map((user) => (*/}
        {/*            <TableRow key={user.id}>*/}
        {/*                <TableCell>{user.name}</TableCell>*/}
        {/*                <TableCell>*/}
        {/*                    <Text>{user.username}</Text>*/}
        {/*                </TableCell>*/}
        {/*                <TableCell>*/}
        {/*                    <Text>{user.email}</Text>*/}
        {/*                </TableCell>*/}
        {/*            </TableRow>*/}
        {/*        ))}*/}
        {/*    </TableBody>*/}
        {/*</Table>*/}
        </div>
    );
}
export default UsersTable;