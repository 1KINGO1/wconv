export const ConversionState = {
	PENDING: 'PENDING',
	FAILED: 'FAILED',
	SUCCESS: 'SUCCESS',
} as const;

export type ConversionState = typeof ConversionState[keyof typeof ConversionState];