import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class About extends Component {

  render () {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <div>About</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About