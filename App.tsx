import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import StorybookUIRoot from './storybook';
import { colors } from './theme/colors';

interface AppProps {}

const theme = extendTheme({
	colors,
});

const App: React.FC<AppProps> = ({}) => {
	return (
		<NativeBaseProvider theme={theme}>
			<StorybookUIRoot />
		</NativeBaseProvider>
	);
};
export default App;
