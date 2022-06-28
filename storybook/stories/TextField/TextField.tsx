import { IInputProps, Input, Stack, Text, View } from 'native-base';
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
			<View
				bg={colors.white}
				borderRadius={'5px'}
				style={{
					shadowColor: colors.black,
					//ios
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.1,
					shadowRadius: 5,
					//android
					elevation: 3,
				}}
			>
				<Input
					isInvalid={isInvalid}
					isDisabled={isDisabled}
					placeholderTextColor={colors.neutral[400]}
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
			</View>
			{!isDisabled && isInvalid && errorMessage && (
				<Text color={'error.500'} fontSize={'12px'}>
					{errorMessage}
				</Text>
			)}
		</Stack>
	);
};
