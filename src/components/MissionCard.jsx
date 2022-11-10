import React, { Component } from 'react';
import PropType from 'prop-types';
import { Card, Divider, Typography } from '@mui/material';

class MissionCard extends Component {
	render() {
		const { name, year, country, destination } = this.props;
		return (
			<Card sx={{ minWidth: '150px', maxWidth: '165px', alignItems: 'center'}} data-testid="mission-card" variant='outlined'>
				<Typography subtitle2='h2' data-testid="mission-name">
					{name}
				</Typography>
				<Divider/>
				<Typography subtitle2='h2' data-testid="mission-year">
					{year}
				</Typography>
				<Typography subtitle2='h2' data-testid="mission-country">
					{country}
				</Typography>
				<Typography subtitle2='h2' data-testid="mission-destination">
					{destination}
				</Typography>
			</Card>
		);
	}
}

MissionCard.propTypes = {
	name: PropType.string.isRequired,
	year: PropType.string.isRequired,
	country: PropType.string.isRequired,
	destination: PropType.string.isRequired,
};

export default MissionCard;
