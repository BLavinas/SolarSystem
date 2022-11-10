import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import { Stack, Typography } from '@mui/material';

class SolarSystem extends Component {
	render() {
		return (
			<div data-testid="solar-system">
				<Stack>
					<Typography variant='h3'>
          Planetas
					</Typography>
				</Stack>
				<Stack flexDirection={'row'} justifyContent='center'>
					{planets.map(({ name, image }) => (
						<PlanetCard
							key={ name }
							planetName={ name }
							planetImage={ image }
						/>
					))}
				</Stack>
			</div>
		);
	}
}

export default SolarSystem;
