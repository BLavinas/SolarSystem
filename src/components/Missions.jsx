import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import { Stack, Typography } from '@mui/material';

class Missions extends Component {
	render() {
		return (

			<div data-testid="missions">
				<Stack className='titles'>
					<Typography variant='h3'>
          Missões
					</Typography>
				</Stack>
				<Stack direction={'row'} flexWrap={'wrap'} spacing={0.7} justifyContent={'center'}>
					{missions.map(({ name, year, country, destination }) => (
						<MissionCard
							key={ name }
							name={ name }
							year={ year }
							country={ country }
							destination={ destination }
						/>
					))}
				</Stack>
			</div>
		);
	}
}

export default Missions;
