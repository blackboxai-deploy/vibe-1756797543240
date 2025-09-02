import { WORD_CATEGORIES, THEME_PRESETS } from './word-categories';
import { WordCategory, FusionResult, GenerationSettings, ThemePreset } from '@/types/fusion-types';

export class FusionEngine {
  private categories: WordCategory[];
  private presets: ThemePreset[];

  constructor() {
    this.categories = WORD_CATEGORIES;
    this.presets = THEME_PRESETS;
  }

  generateCombination(settings: GenerationSettings): FusionResult {
    const { selectedCategories, theme, minWords, maxWords, allowRepeats } = settings;
    
    // Filter categories based on settings
    const activeCategories = this.categories.filter(cat => 
      selectedCategories.length === 0 || selectedCategories.includes(cat.id)
    );

    // Apply theme weighting if specified
    let weightedCategories = activeCategories;
    if (theme) {
      const themePreset = this.presets.find(p => p.id === theme);
      if (themePreset) {
        weightedCategories = this.applyThemeWeights(activeCategories, themePreset);
      }
    }

    // Generate word combination
    const wordCount = this.getRandomBetween(minWords, maxWords);
    const selectedWords: string[] = [];
    const usedCategories: string[] = [];

    for (let i = 0; i < wordCount; i++) {
      const availableCategories = allowRepeats 
        ? weightedCategories 
        : weightedCategories.filter(cat => !usedCategories.includes(cat.id));

      if (availableCategories.length === 0) break;

      const category = this.selectWeightedCategory(availableCategories);
      const word = this.selectRandomWord(category);
      
      selectedWords.push(word);
      usedCategories.push(category.id);

      // Check compatibility for next word selection
      if (i < wordCount - 1) {
        weightedCategories = this.filterCompatibleCategories(weightedCategories, category);
      }
    }

    // Create fusion result
    const result: FusionResult = {
      id: this.generateId(),
      combination: selectedWords,
      categories: usedCategories,
      timestamp: new Date(),
      isFavorite: false,
      theme
    };

    return result;
  }

  generateMultipleCombinations(settings: GenerationSettings): FusionResult[] {
    const results: FusionResult[] = [];
    
    for (let i = 0; i < settings.combinationCount; i++) {
      results.push(this.generateCombination(settings));
    }

    return results;
  }

  generateThemedSet(themeId: string, count: number = 5): FusionResult[] {
    const theme = this.presets.find(p => p.id === themeId);
    if (!theme) return [];

    const settings: GenerationSettings = {
      selectedCategories: theme.categories,
      combinationCount: count,
      allowRepeats: true,
      theme: themeId,
      minWords: 2,
      maxWords: 4
    };

    return this.generateMultipleCombinations(settings);
  }

  createCustomCombination(categoryIds: string[], wordCounts: number[]): FusionResult {
    const selectedWords: string[] = [];
    const usedCategories: string[] = [];

    categoryIds.forEach((categoryId, index) => {
      const category = this.categories.find(cat => cat.id === categoryId);
      if (!category) return;

      const count = wordCounts[index] || 1;
      const words = this.selectMultipleWords(category, count);
      
      selectedWords.push(...words);
      usedCategories.push(categoryId);
    });

    return {
      id: this.generateId(),
      combination: selectedWords,
      categories: usedCategories,
      timestamp: new Date(),
      isFavorite: false
    };
  }

  private applyThemeWeights(categories: WordCategory[], theme: ThemePreset): WordCategory[] {
    return categories.map(cat => ({
      ...cat,
      weight: cat.weight * (theme.weights[cat.id] || 1)
    }));
  }

  private selectWeightedCategory(categories: WordCategory[]): WordCategory {
    const totalWeight = categories.reduce((sum, cat) => sum + cat.weight, 0);
    let random = Math.random() * totalWeight;

    for (const category of categories) {
      random -= category.weight;
      if (random <= 0) {
        return category;
      }
    }

    return categories[categories.length - 1];
  }

  private selectRandomWord(category: WordCategory): string {
    const randomIndex = Math.floor(Math.random() * category.words.length);
    return category.words[randomIndex];
  }

  private selectMultipleWords(category: WordCategory, count: number): string[] {
    const shuffled = [...category.words].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, category.words.length));
  }

  private filterCompatibleCategories(categories: WordCategory[], selectedCategory: WordCategory): WordCategory[] {
    return categories.filter(cat => 
      selectedCategory.combinableWith.includes(cat.id) || cat.id === selectedCategory.id
    );
  }

  private getRandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private generateId(): string {
    return 'fusion_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Utility methods for external use
  getCategoryById(id: string): WordCategory | undefined {
    return this.categories.find(cat => cat.id === id);
  }

  getAllCategories(): WordCategory[] {
    return [...this.categories];
  }

  getThemePresets(): ThemePreset[] {
    return [...this.presets];
  }

  searchWords(query: string): { category: string; words: string[] }[] {
    const results: { category: string; words: string[] }[] = [];
    const lowercaseQuery = query.toLowerCase();

    this.categories.forEach(category => {
      const matchingWords = category.words.filter(word => 
        word.toLowerCase().includes(lowercaseQuery)
      );

      if (matchingWords.length > 0) {
        results.push({
          category: category.name,
          words: matchingWords
        });
      }
    });

    return results;
  }

  generateInspiration(combination: string[]): string {
    const templates = [
      "Imagine a {0} wielding {1} powers...",
      "What if there was a {0} that could control {1}?",
      "A {0} emerges from the {1}, bringing {2} to the world.",
      "In the realm of {0}, {1} magic flows through {2} artifacts.",
      "The ancient {0} speaks of {1} warriors who mastered {2}.",
      "Deep within the {0}, {1} creatures guard the secrets of {2}.",
      "Legend tells of the {0} where {1} and {2} became one.",
      "A {0} appears, combining the essence of {1} with {2}."
    ];

    const template = templates[Math.floor(Math.random() * templates.length)];
    let inspiration = template;

    combination.forEach((word, index) => {
      inspiration = inspiration.replace(`{${index}}`, word);
    });

    return inspiration;
  }
}

export const fusionEngine = new FusionEngine();