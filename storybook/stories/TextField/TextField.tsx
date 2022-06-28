import { Icon, IInputProps, Input, Stack, Text, View } from 'native-base';
import { colors } from '../../../theme/colors';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface TextFieldProps extends IInputProps {
	/**
	 * whether the input is disabled
	 */
	isDisabled?: boolean;
	/**
	 * whether the input is invalid
	 */
	isInvalid?: boolean;
	/**
	 * display left icon
	 */
	leftIcon?: JSX.Element;
	/**
	 * display right icon
	 */
	rightIcon?: JSX.Element;
	/**
	 * style attribute of text input
	 */
	inputStyle?: StyleProp<TextStyle>;
	/**
	 * label of text input
	 */
	label?: string;
	/**
	 * style attribute of label
	 */
	labelStyle?: StyleProp<TextStyle>;
	/**
	 * error message
	 */
	errorMessage?: string;
	/**
	 * style attribute of error message
	 */
	errorMessageStyle?: StyleProp<TextStyle>;
	/**
	 * style attribute of container
	 */
	containerStyle?: StyleProp<ViewStyle>;
}

export const TextField: React.FC<TextFieldProps> = ({
	isInvalid = false,
	isDisabled = false,
	leftIcon,
	rightIcon,
	inputStyle,
	label,
	labelStyle,
	errorMessage,
	errorMessageStyle,
	containerStyle,
	...props
}) => {
	return (
		<Stack space={'4px'} style={containerStyle}>
			{label && (
				<Text style={labelStyle} fontSize={'14px'}>
					{label}
				</Text>
			)}
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
					style={inputStyle}
					InputLeftElement={
						leftIcon && (
							<Icon
								as={leftIcon}
								ml={'16px'}
								h={'12px'}
								color={
									isDisabled ? 'neutral.300' : isInvalid ? 'error.500' : 'black'
								}
							/>
						)
					}
					InputRightElement={
						rightIcon && (
							<Icon
								as={rightIcon}
								mr={'16px'}
								h={'12px'}
								color={isDisabled ? 'neutral.300' : 'black'}
							/>
						)
					}
					isInvalid={isInvalid}
					isDisabled={isDisabled}
					placeholderTextColor={colors.neutral[400]}
					width={{ base: '280px', sm: '380' }}
					py={'12px'}
					pl={leftIcon ? '14px' : '16px'}
					pr={rightIcon ? '14px' : '16px'}
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
				<Text style={errorMessageStyle} color={'error.500'} fontSize={'12px'}>
					{errorMessage}
				</Text>
			)}
		</Stack>
	);
};
