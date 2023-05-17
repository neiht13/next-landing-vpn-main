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

const UsersTable = ({users}) =>{
    const [marker, setMarker] = useState({lat: 0, lng: 0});
    useEffect(()=>{
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success,error);
        }
        // navigator.permissions.query({ name: "geolocation" }).then((result) => {
        //     console.log(result.state)
        //     // Don't do anything if the permission was denied.
        // });
    },[])
    const success = (position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setMarker({lat: position.coords.latitude, lng: position.coords.longitude})
    }
    const error = () => {
        alert("Unable to retrieve your location");
    }

    const RenderMap = () => {
        console.log(marker)

        return(
            <MapExample center={marker} markers={[marker]}
                        zoom={15} height={'400px'}
                        address={"Địa chỉ:  VNPT Đồng Tháp"}
            />
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