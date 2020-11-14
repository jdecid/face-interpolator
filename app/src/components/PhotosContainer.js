import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


class PhotosContainer extends Component {

    render() {
        return <Grid container direction="row" justify="center">
            <Grid item xs={5}>
                <img src={this.props.images.originalImage} alt="Original"/>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={5}>
                {this.props.images.interpolatedImage !== null &&
                <img src={'data:image/jpeg;base64,' + this.props.images.interpolatedImage}
                     key={this.props.images.interpolatedImage} alt="Interpolated"/>
                }
            </Grid>
        </Grid>
    }
}

const mapStateToProps = state => ({
    images: state.images,
    parameters: state.parameters
});

export default connect(mapStateToProps)(PhotosContainer);