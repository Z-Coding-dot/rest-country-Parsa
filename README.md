# Rest Countries App

A modern React application for displaying and interacting with a list of countries using the REST Countries API.

## Features

- 🌍 **Country List**: Display all countries with flags and basic information
- 🔍 **Search**: Search countries by name with real-time filtering
- 🗺️ **Region Filter**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- 📊 **Population Sort**: Sort countries by population (ascending/descending)
- 📱 **Responsive Design**: Mobile-friendly interface
- 🌐 **Internationalization**: Support for English and Russian languages
- 🔗 **Country Details**: Detailed view with border countries navigation
- 💾 **State Persistence**: Selected parameters saved on page reload

## Technology Stack

- **Core**: React 19 + TypeScript
- **State Management**: Redux Toolkit + RTK Query
- **Routing**: React Router DOM
- **Internationalization**: i18next + react-i18next
- **Styling**: Sass + SCSS Modules
- **Architecture**: Feature-Sliced Design (FSD)
- **Build Tool**: Vite
- **API**: REST Countries API

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Rest-Country
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # App layer (providers, store, global styles)
├── entities/               # Business entities (Country)
├── features/               # Features (Search, Filter, Sort, Language)
├── pages/                  # Pages (HomePage, CountryDetailPage)
├── shared/                 # Shared utilities and configs
└── widgets/                # Widgets (Header)
```

## API Integration

The application uses the [REST Countries API](https://restcountries.com/) to fetch country data. Key endpoints:

- `GET /all` - Get all countries
- `GET /alpha/{code}` - Get country by alpha code

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is created for internship purposes.