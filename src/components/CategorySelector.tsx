'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { fusionEngine } from '@/lib/fusion-engine';
import { GenerationSettings } from '@/types/fusion-types';

interface CategorySelectorProps {
  settings: GenerationSettings;
  onSettingsChange: (settings: GenerationSettings) => void;
}

export default function CategorySelector({ settings, onSettingsChange }: CategorySelectorProps) {
  const [activeTab, setActiveTab] = useState('categories');
  const categories = fusionEngine.getAllCategories();
  const themes = fusionEngine.getThemePresets();

  const handleCategoryToggle = (categoryId: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...settings.selectedCategories, categoryId]
      : settings.selectedCategories.filter(id => id !== categoryId);
    
    onSettingsChange({
      ...settings,
      selectedCategories: updatedCategories
    });
  };

  const handleSelectAll = () => {
    onSettingsChange({
      ...settings,
      selectedCategories: categories.map(cat => cat.id)
    });
  };

  const handleSelectNone = () => {
    onSettingsChange({
      ...settings,
      selectedCategories: []
    });
  };

  const handleThemeSelect = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      onSettingsChange({
        ...settings,
        selectedCategories: theme.categories,
        theme: themeId
      });
    }
  };

  const handleWordCountChange = (values: number[], type: 'min' | 'max') => {
    onSettingsChange({
      ...settings,
      [type === 'min' ? 'minWords' : 'maxWords']: values[0]
    });
  };

  const handleCombinationCountChange = (values: number[]) => {
    onSettingsChange({
      ...settings,
      combinationCount: values[0]
    });
  };

  const getCategoryGroup = (categoryId: string) => {
    if (categoryId.includes('magic') || categoryId.includes('casting') || categoryId.includes('artifact')) {
      return 'Magic & Supernatural';
    }
    if (categoryId.includes('warrior') || categoryId.includes('mage') || categoryId.includes('rogue') || categoryId.includes('hybrid')) {
      return 'Character Classes';
    }
    if (categoryId.includes('creature') || categoryId.includes('being') || categoryId.includes('entities') || categoryId.includes('undead')) {
      return 'Creatures & Beings';
    }
    if (categoryId.includes('environment') || categoryId.includes('civilization') || categoryId.includes('technology') || categoryId.includes('architectural')) {
      return 'Worldbuilding';
    }
    if (categoryId.includes('philosoph') || categoryId.includes('emotion') || categoryId.includes('mysteries') || categoryId.includes('time')) {
      return 'Abstract Concepts';
    }
    if (categoryId.includes('material') || categoryId.includes('resource') || categoryId.includes('crafting')) {
      return 'Materials & Resources';
    }
    if (categoryId.includes('abilities') || categoryId.includes('combat') || categoryId.includes('social') || categoryId.includes('skill')) {
      return 'Actions & Abilities';
    }
    return 'Other';
  };

  const groupedCategories = categories.reduce((groups, category) => {
    const group = getCategoryGroup(category.id);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(category);
    return groups;
  }, {} as Record<string, Array<(typeof categories)[0]>>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generation Settings</CardTitle>
        <CardDescription>
          Customize your word fusion generation parameters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <Button onClick={handleSelectAll} variant="outline" size="sm">
                Select All
              </Button>
              <Button onClick={handleSelectNone} variant="outline" size="sm">
                Select None
              </Button>
              <Badge variant="secondary">
                {settings.selectedCategories.length} / {categories.length} selected
              </Badge>
            </div>

            <ScrollArea className="h-[400px]">
              <div className="space-y-6">
                {Object.entries(groupedCategories).map(([groupName, groupCategories]) => (
                  <div key={groupName} className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      {groupName}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {groupCategories.map((category) => (
                        <div key={category.id} className="flex items-start space-x-3">
                          <Checkbox
                            id={category.id}
                            checked={settings.selectedCategories.includes(category.id)}
                            onCheckedChange={(checked) => 
                              handleCategoryToggle(category.id, checked as boolean)
                            }
                          />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor={category.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              <span 
                                className="inline-block w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: category.color }}
                              />
                              {category.name}
                            </label>
                            <p className="text-xs text-muted-foreground">
                              {category.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {category.words.length} words
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="themes" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4">
              Quick-select themed category combinations
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <Card 
                  key={theme.id} 
                  className="cursor-pointer transition-colors hover:bg-accent"
                  onClick={() => handleThemeSelect(theme.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{theme.name}</h4>
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: theme.color }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {theme.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {theme.categories.map((catId) => {
                          const category = fusionEngine.getCategoryById(catId);
                          return category ? (
                            <Badge key={catId} variant="outline" className="text-xs">
                              {category.name}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Number of Combinations</Label>
                <Slider
                  value={[settings.combinationCount]}
                  onValueChange={handleCombinationCountChange}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  Generate {settings.combinationCount} combination{settings.combinationCount !== 1 ? 's' : ''}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Minimum Words per Combination</Label>
                <Slider
                  value={[settings.minWords]}
                  onValueChange={(values) => handleWordCountChange(values, 'min')}
                  max={Math.min(6, settings.maxWords)}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  At least {settings.minWords} word{settings.minWords !== 1 ? 's' : ''} per combination
                </div>
              </div>

              <div className="space-y-2">
                <Label>Maximum Words per Combination</Label>
                <Slider
                  value={[settings.maxWords]}
                  onValueChange={(values) => handleWordCountChange(values, 'max')}
                  max={8}
                  min={Math.max(1, settings.minWords)}
                  step={1}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  At most {settings.maxWords} word{settings.maxWords !== 1 ? 's' : ''} per combination
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allowRepeats"
                  checked={settings.allowRepeats}
                  onCheckedChange={(checked) => 
                    onSettingsChange({ ...settings, allowRepeats: checked as boolean })
                  }
                />
                <Label htmlFor="allowRepeats">Allow category repeats</Label>
              </div>

              {settings.theme && (
                <div className="space-y-2">
                  <Label>Active Theme</Label>
                  <Select
                    value={settings.theme}
                    onValueChange={(value) => 
                      onSettingsChange({ ...settings, theme: value === 'none' ? undefined : value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Theme</SelectItem>
                      {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                          {theme.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}