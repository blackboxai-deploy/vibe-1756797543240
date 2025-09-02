'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { StorageManager } from '@/lib/storage-utils';
import { fusionEngine } from '@/lib/fusion-engine';
import { FusionResult } from '@/types/fusion-types';

interface FusionResultsProps {
  currentResults: FusionResult[];
  favorites: FusionResult[];
  onFavoriteToggle: (result: FusionResult) => void;
}

export default function FusionResults({ 
  currentResults, 
  favorites, 
  onFavoriteToggle 
}: FusionResultsProps) {
  const [historyResults, setHistoryResults] = useState<FusionResult[]>([]);
  const [activeTab, setActiveTab] = useState('current');

  React.useEffect(() => {
    // Load history when component mounts or when tab changes to history
    if (activeTab === 'history') {
      const history = StorageManager.loadHistory();
      setHistoryResults(history.reverse()); // Show most recent first
    }
  }, [activeTab]);

  const exportResults = (results: FusionResult[], filename: string) => {
    const exportData = {
      results,
      exportDate: new Date().toISOString(),
      totalCount: results.length
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const copyResultsToClipboard = (results: FusionResult[]) => {
    const text = results.map(result => 
      result.combination.join(' • ')
    ).join('\n');
    
    navigator.clipboard.writeText(text);
  };

  const clearHistory = () => {
    StorageManager.clearHistory();
    setHistoryResults([]);
  };

  const ResultCard = ({ result, showActions = true }: { result: FusionResult; showActions?: boolean }) => (
    <div className="space-y-3 p-4 border rounded-lg">
      {/* Main Combination */}
      <div className="text-center">
        <div className="text-lg font-bold text-foreground mb-2">
          {result.combination.join(' • ')}
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
                  borderColor: category.color,
                  color: category.color
                }}
                className="text-xs"
              >
                {category.name}
              </Badge>
            ) : null;
          })}
        </div>

        {/* Theme Badge */}
        {result.theme && (
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs">
              Theme: {result.theme.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
        )}

        {/* Inspiration */}
        <div className="text-sm text-muted-foreground italic mb-3">
          {fusionEngine.generateInspiration(result.combination)}
        </div>

        {/* Metadata */}
        <div className="text-xs text-muted-foreground mb-3">
          Generated: {new Date(result.timestamp).toLocaleString()}
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex justify-center gap-2 flex-wrap">
            <Button
              onClick={() => onFavoriteToggle(result)}
              variant="ghost"
              size="sm"
              className={
                StorageManager.isFavorite(result.id)
                  ? 'text-red-500 hover:text-red-600'
                  : 'hover:text-red-500'
              }
            >
              {StorageManager.isFavorite(result.id) ? '♥' : '♡'} 
              {StorageManager.isFavorite(result.id) ? 'Favorited' : 'Favorite'}
            </Button>
            
            <Button
              onClick={() => {
                navigator.clipboard.writeText(result.combination.join(' • '));
              }}
              variant="ghost"
              size="sm"
            >
              📋 Copy
            </Button>

            <Button
              onClick={() => {
                const inspiration = fusionEngine.generateInspiration(result.combination);
                navigator.clipboard.writeText(
                  `${result.combination.join(' • ')}\n\n${inspiration}`
                );
              }}
              variant="ghost"
              size="sm"
            >
              📝 Copy with Inspiration
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results & History</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">
              Current ({currentResults.length})
            </TabsTrigger>
            <TabsTrigger value="favorites">
              Favorites ({favorites.length})
            </TabsTrigger>
            <TabsTrigger value="history">
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {currentResults.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  <Button
                    onClick={() => copyResultsToClipboard(currentResults)}
                    variant="outline"
                    size="sm"
                  >
                    📋 Copy All
                  </Button>
                  <Button
                    onClick={() => exportResults(currentResults, 'current_results')}
                    variant="outline"
                    size="sm"
                  >
                    💾 Export
                  </Button>
                </div>

                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {currentResults.map((result, index) => (
                      <div key={result.id}>
                        {index > 0 && <Separator className="my-4" />}
                        <ResultCard result={result} />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-4xl mb-4">🎲</div>
                <div>No current results</div>
                <div className="text-sm">Generate some word combinations to see them here</div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            {favorites.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  <Button
                    onClick={() => copyResultsToClipboard(favorites)}
                    variant="outline"
                    size="sm"
                  >
                    📋 Copy All
                  </Button>
                  <Button
                    onClick={() => exportResults(favorites, 'favorites')}
                    variant="outline"
                    size="sm"
                  >
                    💾 Export
                  </Button>
                </div>

                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {favorites.map((result, index) => (
                      <div key={result.id}>
                        {index > 0 && <Separator className="my-4" />}
                        <ResultCard result={result} />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-4xl mb-4">♡</div>
                <div>No favorites yet</div>
                <div className="text-sm">Click the heart icon on results to save them here</div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {historyResults.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  <Button
                    onClick={() => copyResultsToClipboard(historyResults)}
                    variant="outline"
                    size="sm"
                  >
                    📋 Copy All
                  </Button>
                  <Button
                    onClick={() => exportResults(historyResults, 'history')}
                    variant="outline"
                    size="sm"
                  >
                    💾 Export
                  </Button>
                  <Button
                    onClick={clearHistory}
                    variant="outline"
                    size="sm"
                    className="text-destructive"
                  >
                    🗑️ Clear History
                  </Button>
                </div>

                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {historyResults.map((result, index) => (
                      <div key={result.id}>
                        {index > 0 && <Separator className="my-4" />}
                        <ResultCard result={result} showActions={false} />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-4xl mb-4">📜</div>
                <div>No history yet</div>
                <div className="text-sm">Your generated combinations will appear here</div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}