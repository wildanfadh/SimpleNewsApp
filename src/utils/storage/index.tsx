import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  BOOKMARKS: '@news_bookmarks',
  SEARCH_HISTORY: '@search_history',
};

export const storage = {
  // Bookmark functions
  getBookmarks: async (): Promise<any[]> => {
    try {
      const bookmarks = await AsyncStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return bookmarks ? JSON.parse(bookmarks) : [];
    } catch (error) {
      console.error('Error getting bookmarks:', error);
      return [];
    }
  },

  saveBookmarks: async (bookmarks: any[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Error saving bookmarks:', error);
    }
  },

  addBookmark: async (newsItem: any): Promise<void> => {
    try {
      const bookmarks = await storage.getBookmarks();
      const exists = bookmarks.some(item => item.title === newsItem.title);
      if (!exists) {
        bookmarks.push(newsItem);
        await storage.saveBookmarks(bookmarks);
      }
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  },

  removeBookmark: async (newsTitle: string): Promise<void> => {
    try {
      const bookmarks = await storage.getBookmarks();
      const filtered = bookmarks.filter(item => item.title !== newsTitle);
      await storage.saveBookmarks(filtered);
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  },

  isBookmarked: async (newsTitle: string): Promise<boolean> => {
    try {
      const bookmarks = await storage.getBookmarks();
      return bookmarks.some(item => item.title === newsTitle);
    } catch (error) {
      console.error('Error checking bookmark:', error);
      return false;
    }
  },

  // Search history functions
  getSearchHistory: async (): Promise<string[]> => {
    try {
      const history = await AsyncStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error getting search history:', error);
      return [];
    }
  },

  addSearchHistory: async (query: string): Promise<void> => {
    try {
      const history = await storage.getSearchHistory();
      const filtered = history.filter(item => item !== query);
      filtered.unshift(query);
      // Keep only last 10 searches
      const limited = filtered.slice(0, 10);
      await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(limited));
    } catch (error) {
      console.error('Error adding search history:', error);
    }
  },

  clearSearchHistory: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  },
};
