import React, { useState, useEffect } from 'react'
import JobPositionService from "../../Services/JobPositionService"
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function JobPositionList() {

    const [jobPositons, setJobPositons] = useState([])

    useEffect(() => {
        let jobPositonService = new JobPositionService()
        jobPositonService.getJobPositions().then((result) => setJobPositons(result.data.data))

    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>

                    <Table.Row >
                        <Table.HeaderCell>İş Pozisyonları</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPositons.map((jobPositon) => (
                        <Table.Row key={jobPositon.id}>
                            <Table.Cell>{jobPositon.jobTitle}</Table.Cell>

                        </Table.Row>
                    ))}

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
