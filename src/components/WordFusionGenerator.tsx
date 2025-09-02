'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { fusionEngine } from '@/lib/fusion-engine';
import { StorageManager } from '@/lib/storage-utils';
import { FusionResult, GenerationSettings } from '@/types/fusion-types';

interface WordFusionGeneratorProps {
  settings: GenerationSettings;
  onResultsChange: (results: FusionResult[]) => void;
  onFavoritesChange: (favorites: FusionResult[]) => void;
}

export default function WordFusionGenerator({ 
  settings, 
  onResultsChange, 
  onFavoritesChange 
}: WordFusionGeneratorProps) {
  const [currentResults, setCurrentResults] = useState<FusionResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [favorites, setFavorites] = useState<FusionResult[]>([]);
  const [generationCount, setGenerationCount] = useState(0);

  useEffect(() => {
    // Load favorites on mount
    const loadedFavorites = StorageManager.loadFavorites();
    setFavorites(loadedFavorites);
    onFavoritesChange(loadedFavorites);
  }, [onFavoritesChange]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Add a small delay for animation effect
    setTimeout(() => {
      try {
        const results = fusionEngine.generateMultipleCombinations({
          ...settings,
          combinationCount: Math.max(1, settings.combinationCount)
        });
        
        // Add to history
        results.forEach(result => {
          StorageManager.addToHistory(result);
        });
        
        setCurrentResults(results);
        onResultsChange(results);
        setGenerationCount(prev => prev + 1);
      } catch (error) {
        console.error('Generation failed:', error);
        setCurrentResults([]);
        onResultsChange([]);
      } finally {
        setIsGenerating(false);
      }
    }, 800);
  };

  const handleQuickGenerate = () => {
    const quickSettings: GenerationSettings = {
      selectedCategories: [],
      combinationCount: 1,
      allowRepeats: false,
      minWords: 2,
      maxWords: 3
    };

    setIsGenerating(true);
    
    setTimeout(() => {
      const result = fusionEngine.generateCombination(quickSettings);
      StorageManager.addToHistory(result);
      
      setCurrentResults([result]);
      onResultsChange([result]);
      setGenerationCount(prev => prev + 1);
      setIsGenerating(false);
    }, 600);
  };

  const handleFavoriteToggle = (result: FusionResult) => {
    const isFav = StorageManager.isFavorite(result.id);
    
    if (isFav) {
      StorageManager.removeFromFavorites(result.id);
      const updatedFavorites = favorites.filter(fav => fav.id !== result.id);
      setFavorites(updatedFavorites);
      onFavoritesChange(updatedFavorites);
    } else {
      StorageManager.addToFavorites(result);
      const updatedFavorites = [...favorites, { ...result, isFavorite: true }];
      setFavorites(updatedFavorites);
      onFavoritesChange(updatedFavorites);
    }

    // Update current results to reflect favorite status
    const updatedResults = currentResults.map(r => 
      r.id === result.id ? { ...r, isFavorite: !isFav } : r
    );
    setCurrentResults(updatedResults);
    onResultsChange(updatedResults);
  };

  const generateInspiration = (combination: string[]) => {
    return fusionEngine.generateInspiration(combination);
  };

  const getCategoryColor = (categoryId: string) => {
    const category = fusionEngine.getCategoryById(categoryId);
    return category?.color || '#6B7280';
  };

  const formatCombination = (words: string[]) => {
    return words.join(' • ');
  };

  return (
    <div className="space-y-6">
      {/* Generation Controls */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Fiction Word Fusion Generator
          </CardTitle>
          <CardDescription>
            Combine mystical words to spark your creative imagination
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="flex-1 sm:flex-none bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Fusing Words...
                </div>
              ) : (
                'Generate Fusion'
              )}
            </Button>
            
            <Button 
              onClick={handleQuickGenerate}
              disabled={isGenerating}
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-none"
            >
              Quick Spark
            </Button>
          </div>

          {generationCount > 0 && (
            <div className="text-center text-sm text-muted-foreground">
              Total generations: {generationCount}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Display */}
      {currentResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Generated Combinations</span>
              <Badge variant="secondary">{currentResults.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                {currentResults.map((result, index) => (
                  <div key={result.id} className="space-y-3">
                    {index > 0 && <Separator />}
                    
                    <div className="space-y-3">
                      {/* Main Combination */}
                      <div className="text-center">
                        <div className="text-xl font-bold text-foreground mb-2">
                          {formatCombination(result.combination)}
                        </div>
                        
                        {/* Category Badges */}
                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {result.categories.map((categoryId) => {
                            const category = fusionEngine.getCategoryById(categoryId);
                            return category ? (
                              <Badge
                                key={categoryId}
                                variant="outline"
                                style={{ 
                                  borderColor: getCategoryColor(categoryId),
                                  color: getCategoryColor(categoryId)
                                }}
                              >
                                {category.name}
                              </Badge>
                            ) : null;
                          })}
                        </div>

                        {/* Inspiration Text */}
                        <div className="text-sm text-muted-foreground italic mb-3">
                          {generateInspiration(result.combination)}
                        </div>

                        {/* Actions */}
                        <div className="flex justify-center gap-2">
                          <Button
                            onClick={() => handleFavoriteToggle(result)}
                            variant="ghost"
                            size="sm"
                            className={
                              StorageManager.isFavorite(result.id)
                                ? 'text-red-500 hover:text-red-600'
                                : 'hover:text-red-500'
                            }
                          >
                            {StorageManager.isFavorite(result.id) ? '♥' : '♡'} Favorite
                          </Button>
                          
                          <Button
                            onClick={() => {
                              navigator.clipboard.writeText(formatCombination(result.combination));
                            }}
                            variant="ghost"
                            size="sm"
                          >
                            📋 Copy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {currentResults.length === 0 && !isGenerating && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <div className="text-6xl mb-4">✨</div>
              <div className="text-lg">Ready to spark your imagination?</div>
              <div className="text-sm">Click "Generate Fusion" to create magical word combinations</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}