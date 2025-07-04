# Interactive RPG Portfolio Website

## Overview

This is a full-stack web application built with Express.js backend and React frontend, featuring a unique Phaser 3-based interactive portfolio website that mimics the intro screen of Pokémon Fire Red. The application combines modern web technologies with retro gaming elements to create an engaging portfolio experience.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application framework
- **Phaser 3** for game engine and interactive portfolio components
- **Tailwind CSS** with custom design system for styling
- **Radix UI** components for consistent UI elements
- **Vite** for fast development and optimized builds
- **React Three Fiber** for 3D graphics capabilities (prepared for future features)

### Backend Architecture
- **Express.js** server with TypeScript
- **In-memory storage** with interface abstraction for future database migration
- **RESTful API** structure (routes ready for implementation)
- **Session management** with PostgreSQL session store integration

### Database Strategy
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** as the cloud PostgreSQL provider
- **Schema-first approach** with type-safe database operations
- **Migration system** with Drizzle Kit for schema evolution

## Key Components

### Game Engine Integration
- **Phaser 3** game framework for interactive RPG experience
- **Scene management** with IntroScene and TownScene
- **Dialogue system** with typing animations and character interactions
- **NPC interaction** system with proximity-based conversations
- **Tile-based map** system for RPG-style navigation

### UI/UX Components
- **Comprehensive component library** using Radix UI primitives
- **Responsive design** with mobile-first approach
- **Audio management** with mute/unmute controls
- **Loading states** and error handling
- **Accessibility features** built into all components

### Portfolio Content Management
- **Structured dialogue data** for portfolio information
- **NPC-based information delivery** system
- **Interactive storytelling** approach to showcase experience
- **Multi-section content** covering references, experience, organizations, and projects

## Data Flow

### Game State Management
1. **Intro Scene**: Player starts with Pokemon-style intro screen
2. **Town Scene**: Interactive map with NPCs containing portfolio information
3. **Dialogue System**: Manages conversations and information display
4. **Navigation**: WASD controls with spacebar interactions

### Content Structure
- **Introduction**: Welcome message and overview
- **References**: Professional recommendations from colleagues
- **Experience**: Work history and career progression
- **Organizations**: Professional memberships and community involvement
- **Projects**: Technical accomplishments and portfolio pieces

### Audio System
- **Background music** with loop management
- **Sound effects** for interactions and navigation
- **Mute/unmute controls** with state persistence
- **Audio context** management for browser compatibility

## External Dependencies

### Core Technologies
- **Phaser 3.80.1** via CDN for game engine
- **React 18** with TypeScript for frontend framework
- **Express.js** for backend server
- **Drizzle ORM** for database operations

### UI Libraries
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **React Three Fiber** for 3D graphics capabilities
- **Lucide React** for consistent iconography

### Development Tools
- **Vite** for fast development and building
- **ESBuild** for server-side bundling
- **TypeScript** for type safety
- **PostCSS** for CSS processing

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Assets**: Static files served from client directory
4. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Static file serving with Express
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Deployment Targets
- **Replit**: Optimized for Replit deployment with runtime error handling
- **Node.js**: Standard Node.js deployment with ES modules
- **Static hosting**: Frontend can be deployed separately if needed

## Changelog

Changelog:
- July 04, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.