# SimpleNewsApp

SimpleNewsApp is a mobile news application built with React Native and TypeScript. This project focuses on a simple reading experience with category browsing, search, bookmarks, and article detail screens.

## Features

- Browse news from the home screen
- Filter content by category tag
- Search screen UI for discovering articles
- Bookmark screen UI for saved articles
- Article detail screen with full content
- Bottom tab navigation
- Local storage utilities for bookmark and search-related data

## Tech Stack

- React Native
- TypeScript
- NativeBase
- React Navigation
- AsyncStorage
- React Native Vector Icons

## Project Structure

```text
src/
  assets/
  components/
  router/
  screens/
  utils/
android/
ios/
```

## Requirements

Make sure you have installed:

- Node.js
- Yarn
- Android Studio for Android development
- Xcode for iOS development on macOS

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/wildanfadh/simplenewsapp
cd simplenewsapp
yarn install
```

Start the Metro bundler:

```bash
yarn start
```

Run on Android:

```bash
yarn android
```

Run on iOS:

```bash
yarn ios
```

## Available Scripts

```bash
yarn start
yarn android
yarn ios
yarn test
yarn lint
```

## Notes

- The project currently uses static or mock news data.
- Some screens are still focused on UI structure and basic navigation.
- CI configuration is available through CircleCI.

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.
