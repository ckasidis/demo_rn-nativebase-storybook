import { IInputProps, Input, Stack, Text } from 'native-base';
import { colors } from '../../../theme/colors';
import React from 'react';

interface TextFieldProps extends IInputProps {
	label?: string;
	isInvalid?: boolean;
	isDisabled?: boolean;
	errorMessage?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
	label,
	isInvalid = false,
	isDisabled = false,
	errorMessage,
	...props
}) => {
	return (
		<Stack>
			{label && <Text fontSize={'14px'}>{label}</Text>}
			<Input
				isInvalid={isInvalid}
				isDisabled={isDisabled}
				placeholderTextColor={colors.neutral[400]}
				bg={colors.white}
				width={{ base: '280px', sm: '380' }}
				py={'12px'}
				px={'16px'}
				fontSize={'14px'}
				_focus={{
					bg: colors.white,
					borderColor: colors.selection[100],
				}}
				_invalid={{
					bg: colors.white,
					borderColor: colors.error[500],
				}}
				_disabled={{
					bg: colors.neutral[50],
					borderColor: colors.neutral[50],
				}}
				{...props}
			/>
			{!isDisabled && isInvalid && errorMessage && (
				<Text color={'error.500'} fontSize={'12px'}>
					{errorMessage}
				</Text>
			)}
		</Stack>
	);
};
