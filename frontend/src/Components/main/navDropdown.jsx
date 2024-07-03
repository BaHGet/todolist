import { Button, Dropdown } from "react-bootstrap"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

const NavDropdown = ({user, handelLogout}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [])

    return (
        <Dropdown  drop={ width < 768 ? "down" : "end" }>
            <Dropdown.Toggle  variant="dark" id="dropdown-basic" >
                Account
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.ItemText className="text-white">User Name: {user.username}</Dropdown.ItemText>
                <Dropdown.ItemText  className="text-white">Email: {user.email}</Dropdown.ItemText>
                <Dropdown.Item  className="text-white">
                    Mamber from {dayjs(user.created_at).format("YY-MM-DD HH:mm:ss")} ({dayjs(user.created_at).fromNow("YY-MM-DD")})
                </Dropdown.Item>
                <Dropdown.Item onClick={handelLogout} className="text-danger fw-bold">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}   

export default NavDropdown