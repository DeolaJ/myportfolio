import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class Portfolio extends Component {

  render () {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <div>Portfolio</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Portfolio