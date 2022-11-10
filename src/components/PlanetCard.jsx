import React, { Component } from 'react';
import PropType from 'prop-types';
import { Stack, Typography } from '@mui/material';

class PlanetCard extends Component {
	render() {
		const { planetName } = this.props;
		const { planetImage } = this.props;
		return (
			<Stack data-testid="planet-card">
				<Typography subtitle2='h2' data-testid="planet-name">
					{planetName}
				</Typography>
				<img width='200vw' src={ planetImage } alt={ `Planeta ${planetName}` } />
			</Stack>
		);
	}
}

PlanetCard.propTypes = {
	planetName: PropType.string.isRequired,
	planetImage: PropType.string.isRequired,
};

export default PlanetCard;
