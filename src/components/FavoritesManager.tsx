'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { StorageManager } from '@/lib/storage-utils';
import { fusionEngine } from '@/lib/fusion-engine';
import { FusionResult } from '@/types/fusion-types';

interface FavoritesManagerProps {
  favorites: FusionResult[];
  onFavoritesChange: (favorites: FusionResult[]) => void;
}

export default function FavoritesManager({ favorites, onFavoritesChange }: FavoritesManagerProps) {
  const [selectedFavorites, setSelectedFavorites] = useState<string[]>([]);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const handleToggleSelect = (favoriteId: string) => {
    setSelectedFavorites(prev =>
      prev.includes(favoriteId)
        ? prev.filter(id => id !== favoriteId)
        : [...prev, favoriteId]
    );
  };

  const handleSelectAll = () => {
    setSelectedFavorites(favorites.map(fav => fav.id));
  };

  const handleSelectNone = () => {
    setSelectedFavorites([]);
  };

  const handleDeleteSelected = () => {
    selectedFavorites.forEach(favoriteId => {
      StorageManager.removeFromFavorites(favoriteId);
    });

    const updatedFavorites = favorites.filter(fav => !selectedFavorites.includes(fav.id));
    onFavoritesChange(updatedFavorites);
    setSelectedFavorites([]);
  };

  const handleClearAll = () => {
    favorites.forEach(favorite => {
      StorageManager.removeFromFavorites(favorite.id);
    });
    onFavoritesChange([]);
    setSelectedFavorites([]);
    setShowClearDialog(false);
  };

  const exportSelectedFavorites = () => {
    const selectedFavs = favorites.filter(fav => selectedFavorites.includes(fav.id));
    const exportData = {
      favorites: selectedFavs,
      exportDate: new Date().toISOString(),
      totalCount: selectedFavs.length,
      type: 'favorites'
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `favorites_selection_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const copySelectedToClipboard = () => {
    const selectedFavs = favorites.filter(fav => selectedFavorites.includes(fav.id));
    const text = selectedFavs.map(fav => fav.combination.join(' • ')).join('\n');
    navigator.clipboard.writeText(text);
  };

  const generateSimilar = (favorite: FusionResult) => {
    // Use the same categories as the favorite to generate similar combinations
    const settings = {
      selectedCategories: favorite.categories,
      combinationCount: 3,
      allowRepeats: true,
      minWords: favorite.combination.length,
      maxWords: favorite.combination.length,
      theme: favorite.theme
    };

    return fusionEngine.generateMultipleCombinations(settings);
  };

  if (favorites.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-muted-foreground">
            <div className="text-6xl mb-4">♡</div>
            <div className="text-lg mb-2">No favorites yet</div>
            <div className="text-sm">Click the heart icon on generated results to save them here</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Favorites Manager</span>
          <Badge variant="secondary">{favorites.length}</Badge>
        </CardTitle>
        <CardDescription>
          Manage and organize your favorite word combinations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selection Controls */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <div className="flex gap-2">
            <Button onClick={handleSelectAll} variant="outline" size="sm">
              Select All
            </Button>
            <Button onClick={handleSelectNone} variant="outline" size="sm">
              Select None
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline">
              {selectedFavorites.length} selected
            </Badge>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedFavorites.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 bg-accent rounded-lg">
            <Button
              onClick={copySelectedToClipboard}
              variant="outline"
              size="sm"
            >
              📋 Copy Selected
            </Button>
            <Button
              onClick={exportSelectedFavorites}
              variant="outline"
              size="sm"
            >
              💾 Export Selected
            </Button>
            <Button
              onClick={handleDeleteSelected}
              variant="outline"
              size="sm"
              className="text-destructive"
            >
              🗑️ Delete Selected
            </Button>
          </div>
        )}

        {/* Favorites List */}
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {favorites.map((favorite, index) => (
              <div key={favorite.id}>
                {index > 0 && <Separator />}
                
                <div className="space-y-3 p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedFavorites.includes(favorite.id)}
                        onChange={() => handleToggleSelect(favorite.id)}
                        className="rounded border-gray-300"
                      />
                      <div className="text-lg font-semibold">
                        {favorite.combination.join(' • ')}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(favorite.timestamp).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {favorite.categories.map((categoryId) => {
                      const category = fusionEngine.getCategoryById(categoryId);
                      return category ? (
                        <Badge
                          key={categoryId}
                          variant="outline"
                          style={{ 
                            borderColor: category.color,
                            color: category.color
                          }}
                          className="text-xs"
                        >
                          {category.name}
                        </Badge>
                      ) : null;
                    })}
                    {favorite.theme && (
                      <Badge variant="secondary" className="text-xs">
                        {favorite.theme.replace('-', ' ').toUpperCase()}
                      </Badge>
                    )}
                  </div>

                  {/* Inspiration */}
                  <div className="text-sm text-muted-foreground italic">
                    {fusionEngine.generateInspiration(favorite.combination)}
                  </div>

                  {/* Individual Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(favorite.combination.join(' • '));
                      }}
                      variant="ghost"
                      size="sm"
                    >
                      📋 Copy
                    </Button>
                    
                    <Button
                      onClick={() => {
                        const similar = generateSimilar(favorite);
                        console.log('Similar combinations:', similar);
                        // In a real implementation, this could open a modal or update the main generator
                      }}
                      variant="ghost"
                      size="sm"
                    >
                      🔄 Generate Similar
                    </Button>
                    
                    <Button
                      onClick={() => {
                        StorageManager.removeFromFavorites(favorite.id);
                        const updatedFavorites = favorites.filter(fav => fav.id !== favorite.id);
                        onFavoritesChange(updatedFavorites);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      🗑️ Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Clear All Dialog */}
        <div className="flex justify-end">
          <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-destructive">
                Clear All Favorites
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Clear All Favorites</DialogTitle>
                <DialogDescription>
                  Are you sure you want to remove all {favorites.length} favorites? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setShowClearDialog(false)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleClearAll}
                >
                  Clear All
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}