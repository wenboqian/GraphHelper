import { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SendBox from '../views/sendBox';

function RouterIndex(props) {
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token !== undefined || token !== null) {
		}
	}, []);

	return (
		<HashRouter>
			<Switch>
				<Route
					path="/"
					component={SendBox}
					render={() => <SendBox />}
				/>
			</Switch>
		</HashRouter>
	);
}

export default RouterIndex;
