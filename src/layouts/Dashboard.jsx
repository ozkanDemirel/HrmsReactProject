import React from 'react'
import SideBar from './SideBar'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import Section from './Section'
//import JobAdvertList from '../pages/JobAdverts/JobAdvertList'
//import JobPositionList from '../pages/JobPositions/JobPositionList'
//import EmployerList from '../pages/Users/EmployerList'
//import JobSeekerList from '../pages/Users/JobSeekerList'
//import CityList from '../pages/Cities/CityList'

export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <SideBar />
                    </GridColumn>
                    <GridColumn width={12}>
                      <Section/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
