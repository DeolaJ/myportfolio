import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

class Home extends Component {

  render () {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <div>Home</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home