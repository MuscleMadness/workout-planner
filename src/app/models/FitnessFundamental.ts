export interface FitnessFundamental {
  category: string;
  order: number;
  topic: string;
  description: string;
  youtubeVideoId: string;
}

export interface FitnessFundamentalCategory {
  order: number;
  category: string;
  fundamentals: FitnessFundamental[];
}