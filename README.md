# Dynamics 365 Customer Service Admin Center - Channels UI

A React + TypeScript application that recreates the D365 Customer Service Admin Center UI, specifically the Channels page and Chat Channels page.

## Features

- **Channels Page**: Main page displaying various channel types (Chat, Voice, Messaging, etc.) with collapsible sections
- **Chat Channels Page**: Detailed view of chat channels with sortable data table
- **Navigation**: React Router for seamless navigation between pages
- **Microsoft Fluent UI Styling**: Matching design patterns, colors, and interactions

## Technology Stack

- React 18.2
- TypeScript 5.2
- React Router 6.20
- Vite 5.0 (Build tool)
- CSS3 (Fluent UI design patterns)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulbkm/profiles-vision.git
cd profiles-vision
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
profiles-vision/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Top navigation header
│   │   ├── Sidebar.tsx     # Left navigation sidebar
│   │   └── Layout.tsx      # Main layout wrapper
│   ├── pages/              # Page components
│   │   ├── ChannelsPage.tsx       # Main channels page
│   │   └── ChatChannelsPage.tsx   # Chat channels data table page
│   ├── data/               # Mock data
│   │   └── chatChannels.ts # Chat channels data
│   ├── styles/             # CSS stylesheets
│   │   ├── index.css       # Global styles
│   │   ├── Header.css      # Header styles
│   │   ├── Sidebar.css     # Sidebar styles
│   │   ├── Layout.css      # Layout styles
│   │   ├── ChannelsPage.css       # Channels page styles
│   │   └── ChatChannelsPage.css   # Chat channels page styles
│   ├── App.tsx             # Main app component with routes
│   └── main.tsx            # Application entry point
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## Navigation

- **Channels Page** (`/`): Main page with collapsible sections for different channel types
- **Chat Channels Page** (`/chat-channels`): Accessible by clicking "Manage" on the Chat row
- Use breadcrumb navigation to return to the Channels page

## Key Features

### Channels Page
- Collapsible sections (Manage channels, Channels, Accounts)
- Interactive "Manage" buttons
- "Learn more" links for additional information
- Navigation to Chat Channels page via Chat's Manage button

### Chat Channels Page
- Breadcrumb navigation back to Channels page
- Add and Refresh toolbar buttons
- Search functionality for filtering channels
- Sortable data table with 11 pre-populated chat channels
- Clickable workstream links

## Styling

The application follows Microsoft Fluent UI design patterns:
- Dark header (#1e1e1e)
- Light gray sidebar (#faf9f8)
- Blue accent color for links and selections (#0078d4)
- Consistent spacing and typography
- Hover effects on interactive elements
- Responsive design

## License

MIT