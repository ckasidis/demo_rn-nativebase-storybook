import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Center, Stack } from 'native-base';
import { TextField } from './TextField';

storiesOf('TextField/No Label', module)
	.addDecorator((getStory) => <Center height={'full'}>{getStory()}</Center>)
	.add('Normal', () => (
		<Stack space={'14px'}>
			<TextField />
			<TextField defaultValue="Input" />
			<TextField placeholder="Placeholder" />
			<TextField secureTextEntry defaultValue="P@ssw0rd" />
		</Stack>
	))
	.add('Error', () => (
		<Stack space={'14px'}>
			<TextField isInvalid />
			<TextField isInvalid defaultValue="Input" />
			<TextField isInvalid placeholder="Placeholder" />
			<TextField isInvalid secureTextEntry defaultValue="P@ssw0rd" />
		</Stack>
	))
	.add('Error with Message', () => (
		<Stack space={'14px'}>
			<TextField isInvalid errorMessage="Error Message" />
			<TextField isInvalid errorMessage="Error Message" defaultValue="Input" />
			<TextField
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled', () => (
		<Stack space={'14px'}>
			<TextField isDisabled />
			<TextField isDisabled defaultValue="Input" />
			<TextField isDisabled placeholder="Placeholder" />
			<TextField isDisabled secureTextEntry defaultValue="P@ssw0rd" />
		</Stack>
	));

storiesOf('TextField/With Label', module)
	.addDecorator((getStory) => <Center height={'full'}>{getStory()}</Center>)
	.add('Normal', () => (
		<Stack space={'14px'}>
			<TextField label="Label" />
			<TextField label="Label" defaultValue="Input" />
			<TextField label="Label" placeholder="Placeholder" />
			<TextField label="Label" secureTextEntry defaultValue="P@ssw0rd" />
		</Stack>
	))
	.add('Error', () => (
		<Stack space={'14px'}>
			<TextField label="Label" isInvalid />
			<TextField label="Label" isInvalid defaultValue="Input" />
			<TextField label="Label" isInvalid placeholder="Placeholder" />
			<TextField
				label="Label"
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Message', () => (
		<Stack space={'14px'}>
			<TextField label="Label" isInvalid errorMessage="Error Message" />
			<TextField
				label="Label"
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled', () => (
		<Stack space={'14px'}>
			<TextField label="Label" isDisabled />
			<TextField label="Label" isDisabled defaultValue="Input" />
			<TextField label="Label" isDisabled placeholder="Placeholder" />
			<TextField
				label="Label"
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	));
