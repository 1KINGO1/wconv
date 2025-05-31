const BYTES_IN_ONE_MB = 1_048_576;

export function convertBytesToMb(bytes: number) {
	return (bytes / BYTES_IN_ONE_MB).toFixed(2);
}