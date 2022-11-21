import CRUDStudent from "./CRUDStudents";
import ManageStudents from "./manageStudents";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from "react";

const IndexStudents = (props) => {


    useEffect(() => {
        document.querySelector('.accordion-button').click();
    }, [])

    return (
        <Accordion className='my-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>CRUD Student</Accordion.Header>
                <Accordion.Body>
                    <CRUDStudent />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Manage Students</Accordion.Header>
                <Accordion.Body>
                    <ManageStudents />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}


export default IndexStudents;