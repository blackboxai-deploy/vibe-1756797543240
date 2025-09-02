'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import WordFusionGenerator from '@/components/WordFusionGenerator';
import CategorySelector from '@/components/CategorySelector';
import FusionResults from '@/components/FusionResults';
import FavoritesManager from '@/components/FavoritesManager';
import { StorageManager } from '@/lib/storage-utils';
import { fusionEngine } from '@/lib/fusion-engine';
import { FusionResult, GenerationSettings } from '@/types/fusion-types';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('generate');
  const [currentResults, setCurrentResults] = useState<FusionResult[]>([]);
  const [favorites, setFavorites] = useState<FusionResult[]>([]);
  const [settings, setSettings] = useState<GenerationSettings>(() => {
    const saved = StorageManager.loadSettings();
    return saved || StorageManager.getDefaultSettings();
  });

  // Save settings whenever they change
  React.useEffect(() => {
    StorageManager.saveSettings(settings);
  }, [settings]);

  const handleResultsChange = useCallback((results: FusionResult[]) => {
    setCurrentResults(results);
  }, []);

  const handleFavoritesChange = useCallback((updatedFavorites: FusionResult[]) => {
    setFavorites(updatedFavorites);
  }, []);

  const handleFavoriteToggle = useCallback((result: FusionResult) => {
    const isFav = StorageManager.isFavorite(result.id);
    
    if (isFav) {
      StorageManager.removeFromFavorites(result.id);
      const updatedFavorites = favorites.filter(fav => fav.id !== result.id);
      setFavorites(updatedFavorites);
    } else {
      StorageManager.addToFavorites(result);
      const updatedFavorites = [...favorites, { ...result, isFavorite: true }];
      setFavorites(updatedFavorites);
    }

    // Update current results to reflect favorite status
    const updatedResults = currentResults.map(r => 
      r.id === result.id ? { ...r, isFavorite: !isFav } : r
    );
    setCurrentResults(updatedResults);
  }, [favorites, currentResults]);

  const generateThemedSet = (themeId: string) => {
    const results = fusionEngine.generateThemedSet(themeId, 5);
    
    // Add to history
    results.forEach(result => {
      StorageManager.addToHistory(result);
    });
    
    setCurrentResults(results);
    setActiveTab('generate'); // Switch to generator tab to show results
  };

  const getStatsInfo = () => {
    const categories = fusionEngine.getAllCategories();
    const totalWords = categories.reduce((sum, cat) => sum + cat.words.length, 0);
    const selectedCategories = settings.selectedCategories.length || categories.length;
    
    return {
      totalCategories: categories.length,
      selectedCategories,
      totalWords,
      favorites: favorites.length,
      storageUsed: StorageManager.formatStorageSize(StorageManager.getStorageUsage())
    };
  };

  const stats = getStatsInfo();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Fiction Word Fusion System
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unleash your creativity with an advanced RNG system that combines mystical words, 
                magical concepts, and fantastical elements to spark your imagination for worldbuilding, 
                character creation, and storytelling.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-3 py-1">
                📚 {stats.totalCategories} Categories
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                ✨ {stats.totalWords.toLocaleString()} Words
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                🎯 {stats.selectedCategories} Selected
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                ♥ {stats.favorites} Favorites
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                💾 {stats.storageUsed}
              </Badge>
            </div>

            {/* Quick Theme Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {fusionEngine.getThemePresets().map((theme) => (
                <Button
                  key={theme.id}
                  onClick={() => generateThemedSet(theme.id)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  style={{ borderColor: theme.color }}
                >
                  {theme.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="generate">Generate</TabsTrigger>
              <TabsTrigger value="categories">Settings</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="generate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <WordFusionGenerator
                  settings={settings}
                  onResultsChange={handleResultsChange}
                  onFavoritesChange={handleFavoritesChange}
                />
              </div>
              
              <div className="space-y-6">
                {/* Quick Settings Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-sm font-medium">Words</div>
                        <div className="text-xs text-muted-foreground">
                          {settings.minWords} - {settings.maxWords}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Count</div>
                        <div className="text-xs text-muted-foreground">
                          {settings.combinationCount}
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Active Categories</div>
                      <div className="text-xs text-muted-foreground">
                        {settings.selectedCategories.length === 0 
                          ? 'All categories' 
                          : `${settings.selectedCategories.length} selected`
                        }
                      </div>
                      {settings.theme && (
                        <Badge variant="secondary" className="text-xs">
                          Theme: {settings.theme.replace('-', ' ').toUpperCase()}
                        </Badge>
                      )}
                    </div>

                    <Button 
                      onClick={() => setActiveTab('categories')} 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      Customize Settings
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      onClick={() => setActiveTab('results')} 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      📊 View All Results
                    </Button>
                    <Button 
                      onClick={() => setActiveTab('favorites')} 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      ♥ Manage Favorites ({favorites.length})
                    </Button>
                    <Button 
                      onClick={() => {
                        const exportData = StorageManager.exportData();
                        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(exportData);
                        const link = document.createElement('a');
                        link.setAttribute('href', dataUri);
                        link.setAttribute('download', `fusion_data_${new Date().toISOString().split('T')[0]}.json`);
                        link.click();
                      }} 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      💾 Export All Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories">
            <CategorySelector 
              settings={settings} 
              onSettingsChange={setSettings}
            />
          </TabsContent>

          <TabsContent value="results">
            <FusionResults
              currentResults={currentResults}
              favorites={favorites}
              onFavoriteToggle={handleFavoriteToggle}
            />
          </TabsContent>

          <TabsContent value="favorites">
            <FavoritesManager
              favorites={favorites}
              onFavoritesChange={handleFavoritesChange}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Fiction Word Fusion System • Spark your creative imagination with {stats.totalWords.toLocaleString()} mystical words
          </p>
          <p className="mt-1">
            Built for storytellers, worldbuilders, and creative minds
          </p>
        </div>
      </footer>
    </div>
  );
}