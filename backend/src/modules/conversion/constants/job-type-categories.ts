import { JobType } from './job-type.enum';

export const JobTypeCategories: Record<string, JobType[]> = {
  IMAGE: [
    JobType.JPG_TO_AVIF,
    JobType.JPG_TO_GIF,
    JobType.JPG_TO_PNG,
    JobType.JPG_TO_TIFF,
    JobType.JPG_TO_WEBP,
    JobType.PNG_TO_AVIF,
    JobType.PNG_TO_GIF,
    JobType.PNG_TO_JPG,
    JobType.PNG_TO_TIFF,
    JobType.PNG_TO_WEBP,
    JobType.TIFF_TO_JPG,
    JobType.TIFF_TO_PNG,
    JobType.TIFF_TO_WEBP,
    JobType.TIFF_TO_GIF,
    JobType.TIFF_TO_AVIF,
    JobType.GIF_TO_JPG,
    JobType.GIF_TO_PNG,
    JobType.GIF_TO_TIFF,
    JobType.GIF_TO_WEBP,
    JobType.GIF_TO_AVIF,
    JobType.WEBP_TO_JPG,
    JobType.WEBP_TO_PNG,
    JobType.WEBP_TO_TIFF,
    JobType.WEBP_TO_GIF,
    JobType.WEBP_TO_AVIF,
    JobType.AVIF_TO_JPG,
    JobType.AVIF_TO_PNG,
    JobType.AVIF_TO_TIFF,
    JobType.AVIF_TO_GIF,
    JobType.AVIF_TO_WEBP,
  ],
};

export type JobTypeCategory = keyof typeof JobTypeCategories;
