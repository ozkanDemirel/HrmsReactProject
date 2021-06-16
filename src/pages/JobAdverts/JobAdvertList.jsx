import React, { useState, useEffect } from 'react'
import JobAdvertService from '../../Services/JobAdvertService'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then((result) => setJobAdverts(result.data.data))
        
        },[])

    return (
        <div>
            <Table celled>
                <Table.Header>

                    <Table.Row >
                        <Table.HeaderCell>İşveren</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Kadro</Table.HeaderCell>
                        <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdverts.map((jobAdvert) => (
                            <Table.Row key = {jobAdvert.id}>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
                                <Table.Cell>{jobAdvert.city.city}</Table.Cell>
                                <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobAdvert.creationDate}</Table.Cell>
                                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                
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
