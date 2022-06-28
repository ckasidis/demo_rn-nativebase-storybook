import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Center, Stack } from 'native-base';
import { TextField } from './TextField';
import Svg, { Path } from 'react-native-svg';

const UserIcon = (
	<Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
		/>
	</Svg>
);

const XIcon = (
	<Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</Svg>
);

const EyeOffIcon = (
	<Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
		/>
	</Svg>
);

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
	.add('Normal with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} />
			<TextField leftIcon={UserIcon} defaultValue="Input" />
			<TextField leftIcon={UserIcon} placeholder="Placeholder" />
			<TextField leftIcon={UserIcon} secureTextEntry defaultValue="P@ssw0rd" />
		</Stack>
	))
	.add('Normal with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField rightIcon={XIcon} />
			<TextField rightIcon={XIcon} defaultValue="Input" />
			<TextField rightIcon={XIcon} placeholder="Placeholder" />
			<TextField
				rightIcon={EyeOffIcon}
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Normal with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} rightIcon={XIcon} />
			<TextField leftIcon={UserIcon} rightIcon={XIcon} defaultValue="Input" />
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				placeholder="Placeholder"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
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
	.add('Error with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} isInvalid />
			<TextField leftIcon={UserIcon} isInvalid defaultValue="Input" />
			<TextField leftIcon={UserIcon} isInvalid placeholder="Placeholder" />
			<TextField
				leftIcon={UserIcon}
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField rightIcon={XIcon} isInvalid />
			<TextField rightIcon={XIcon} isInvalid defaultValue="Input" />
			<TextField rightIcon={XIcon} isInvalid placeholder="Placeholder" />
			<TextField
				rightIcon={EyeOffIcon}
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} rightIcon={XIcon} isInvalid />
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				defaultValue="Input"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				placeholder="Placeholder"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
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
	.add('Error with Message and Left Icon', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} isInvalid errorMessage="Error Message" />
			<TextField
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Message and Right Icon', () => (
		<Stack space={'14px'}>
			<TextField rightIcon={XIcon} isInvalid errorMessage="Error Message" />
			<TextField
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				rightIcon={EyeOffIcon}
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Message and 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
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
	))
	.add('Disabled with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} isDisabled />
			<TextField leftIcon={UserIcon} isDisabled defaultValue="Input" />
			<TextField leftIcon={UserIcon} isDisabled placeholder="Placeholder" />
			<TextField
				leftIcon={UserIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField rightIcon={XIcon} isDisabled />
			<TextField rightIcon={XIcon} isDisabled defaultValue="Input" />
			<TextField rightIcon={XIcon} isDisabled placeholder="Placeholder" />
			<TextField
				rightIcon={EyeOffIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField leftIcon={UserIcon} rightIcon={XIcon} isDisabled />
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isDisabled
				defaultValue="Input"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isDisabled
				placeholder="Placeholder"
			/>
			<TextField
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
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
	.add('Normal with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" leftIcon={UserIcon} />
			<TextField label="Label" leftIcon={UserIcon} defaultValue="Input" />
			<TextField label="Label" leftIcon={UserIcon} placeholder="Placeholder" />
			<TextField
				label="Label"
				leftIcon={UserIcon}
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Normal with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" rightIcon={XIcon} />
			<TextField label="Label" rightIcon={XIcon} defaultValue="Input" />
			<TextField label="Label" rightIcon={XIcon} placeholder="Placeholder" />
			<TextField
				label="Label"
				rightIcon={EyeOffIcon}
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Normal with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField label="Label" leftIcon={UserIcon} rightIcon={XIcon} />
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
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
	.add('Error with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" leftIcon={UserIcon} isInvalid />
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" rightIcon={XIcon} isInvalid />
			<TextField
				label="Label"
				rightIcon={XIcon}
				isInvalid
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				rightIcon={XIcon}
				isInvalid
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				rightIcon={EyeOffIcon}
				isInvalid
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
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
	.add('Error with Message and Left Icon', () => (
		<Stack space={'14px'}>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Message and Right Icon', () => (
		<Stack space={'14px'}>
			<TextField
				label="Label"
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
			/>
			<TextField
				label="Label"
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				rightIcon={EyeOffIcon}
				isInvalid
				errorMessage="Error Message"
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Error with Message and 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isInvalid
				errorMessage="Error Message"
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
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
	))
	.add('Disabled with Left Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" leftIcon={UserIcon} isDisabled />
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isDisabled
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isDisabled
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled with Right Icon', () => (
		<Stack space={'14px'}>
			<TextField label="Label" rightIcon={XIcon} isDisabled />
			<TextField
				label="Label"
				rightIcon={XIcon}
				isDisabled
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				rightIcon={XIcon}
				isDisabled
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				rightIcon={EyeOffIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	))
	.add('Disabled with 2 Icons', () => (
		<Stack space={'14px'}>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isDisabled
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isDisabled
				defaultValue="Input"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={XIcon}
				isDisabled
				placeholder="Placeholder"
			/>
			<TextField
				label="Label"
				leftIcon={UserIcon}
				rightIcon={EyeOffIcon}
				isDisabled
				secureTextEntry
				defaultValue="P@ssw0rd"
			/>
		</Stack>
	));
