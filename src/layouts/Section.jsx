import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdverts/JobAdvertList";
import JobPositionList from "../pages/JobPositions/JobPositionList";
import EmployerList from "../pages/Users/EmployerList";
import JobSeekerList from "../pages/Users/JobSeekerList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobSeekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}