export interface WordCategory {
  id: string;
  name: string;
  words: string[];
  weight: number;
  combinableWith: string[];
  color: string;
  description: string;
}

export interface FusionResult {
  id: string;
  combination: string[];
  categories: string[];
  timestamp: Date;
  isFavorite: boolean;
  theme?: string;
}

export interface GenerationSettings {
  selectedCategories: string[];
  combinationCount: number;
  allowRepeats: boolean;
  theme?: string;
  minWords: number;
  maxWords: number;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  categories: string[];
  weights: Record<string, number>;
  color: string;
}

export interface CustomWord {
  word: string;
  categoryId: string;
  addedDate: Date;
}

export interface FusionState {
  currentResults: FusionResult[];
  favorites: FusionResult[];
  history: FusionResult[];
  settings: GenerationSettings;
  customWords: CustomWord[];
}