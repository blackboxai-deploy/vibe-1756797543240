import { FusionResult, CustomWord, GenerationSettings } from '@/types/fusion-types';

const STORAGE_KEYS = {
  FAVORITES: 'fusion_favorites',
  HISTORY: 'fusion_history',
  CUSTOM_WORDS: 'fusion_custom_words',
  SETTINGS: 'fusion_settings'
} as const;

export class StorageManager {
  // Favorites Management
  static saveFavorites(favorites: FusionResult[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  }

  static loadFavorites(): FusionResult[] {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static addToFavorites(result: FusionResult): void {
    const favorites = this.loadFavorites();
    const updated = [...favorites, { ...result, isFavorite: true }];
    this.saveFavorites(updated);
  }

  static removeFromFavorites(resultId: string): void {
    const favorites = this.loadFavorites();
    const updated = favorites.filter(fav => fav.id !== resultId);
    this.saveFavorites(updated);
  }

  static isFavorite(resultId: string): boolean {
    const favorites = this.loadFavorites();
    return favorites.some(fav => fav.id === resultId);
  }

  // History Management
  static saveHistory(history: FusionResult[]): void {
    if (typeof window !== 'undefined') {
      // Keep only last 100 items to prevent storage bloat
      const limitedHistory = history.slice(-100);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(limitedHistory));
    }
  }

  static loadHistory(): FusionResult[] {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static addToHistory(result: FusionResult): void {
    const history = this.loadHistory();
    const updated = [...history, result];
    this.saveHistory(updated);
  }

  static clearHistory(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    }
  }

  // Custom Words Management
  static saveCustomWords(customWords: CustomWord[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_WORDS, JSON.stringify(customWords));
    }
  }

  static loadCustomWords(): CustomWord[] {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_WORDS);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static addCustomWord(word: string, categoryId: string): void {
    const customWords = this.loadCustomWords();
    const newWord: CustomWord = {
      word,
      categoryId,
      addedDate: new Date()
    };
    const updated = [...customWords, newWord];
    this.saveCustomWords(updated);
  }

  static removeCustomWord(word: string, categoryId: string): void {
    const customWords = this.loadCustomWords();
    const updated = customWords.filter(cw => 
      !(cw.word === word && cw.categoryId === categoryId)
    );
    this.saveCustomWords(updated);
  }

  static getCustomWordsForCategory(categoryId: string): string[] {
    const customWords = this.loadCustomWords();
    return customWords
      .filter(cw => cw.categoryId === categoryId)
      .map(cw => cw.word);
  }

  // Settings Management
  static saveSettings(settings: GenerationSettings): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    }
  }

  static loadSettings(): GenerationSettings | null {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }

  static getDefaultSettings(): GenerationSettings {
    return {
      selectedCategories: [],
      combinationCount: 1,
      allowRepeats: false,
      minWords: 2,
      maxWords: 4
    };
  }

  // Export/Import Functionality
  static exportData(): string {
    const data = {
      favorites: this.loadFavorites(),
      history: this.loadHistory(),
      customWords: this.loadCustomWords(),
      settings: this.loadSettings(),
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.favorites && Array.isArray(data.favorites)) {
        this.saveFavorites(data.favorites);
      }
      
      if (data.history && Array.isArray(data.history)) {
        this.saveHistory(data.history);
      }
      
      if (data.customWords && Array.isArray(data.customWords)) {
        this.saveCustomWords(data.customWords);
      }
      
      if (data.settings) {
        this.saveSettings(data.settings);
      }
      
      return true;
    } catch {
      return false;
    }
  }

  // Utility Functions
  static clearAllData(): void {
    if (typeof window !== 'undefined') {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    }
  }

  static getStorageUsage(): number {
    if (typeof window === 'undefined') return 0;
    
    let totalSize = 0;
    Object.values(STORAGE_KEYS).forEach(key => {
      const item = localStorage.getItem(key);
      if (item) {
        totalSize += item.length;
      }
    });
    
    return totalSize;
  }

  static formatStorageSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}