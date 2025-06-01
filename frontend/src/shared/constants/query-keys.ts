export const QueryKeys = {
	  CurrentUser: "CURRENT_USER",
	} as const;

export type QueryKeys = typeof QueryKeys[keyof typeof QueryKeys];