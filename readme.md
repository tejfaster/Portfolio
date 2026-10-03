# Tej Pratap — Personal Portfolio

A responsive, interactive career portfolio focused on **Data Engineering, AI, Analytics Engineering, and Data Science**.

The website presents my career as an interactive story rather than a traditional resume page.

---

## 🎯 Purpose

This portfolio is designed primarily for recruiters and hiring teams.

The goal is to communicate:

- My transition from software development into data
- My professional experience in analytics engineering
- My current M.Sc. in Artificial Intelligence & Data Science
- My hands-on data engineering projects
- My experience with real-world client work
- My availability for mandatory internships and working-student roles

The website should answer three questions quickly:

1. What have I done?
2. What can I build?
3. What am I looking for now?

---

## 🧭 Design Concept

The portfolio uses an interactive career-story approach.

The main visual element is a vertical timeline representing my journey:

```text
BCA — Data Science
        ↓
Software Development
        ↓
Analytics Engineering
        ↓
M.Sc. AI & Data Science
        ↓
Project Sprint
        ↓
Current Direction
```

The design is cinematic and technical while remaining professional and easy to scan.

### Design principles

- Data-first positioning
- Minimal visual clutter
- Strong typography
- Dark cinematic interface
- Blue/purple technical accents
- Vertical storytelling
- Real project visuals instead of decorative graphics
- Responsive on mobile, tablet and desktop
- Subtle animation instead of excessive effects

---

## 👤 Current Positioning

Primary positioning:

**Data · AI · Analytics Engineering**

Current focus:

- Data Engineering
- Analytics Engineering
- Data Science
- AI / Machine Learning
- Distributed Data Systems

Current opportunity:

**Mandatory Internship / Working Student**

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- JavaScript / JSX
- Tailwind CSS

### UI

- Lucide React
- Framer Motion

### Development

- ESLint
- Prettier
- Git
- GitHub

### Deployment

- Cloudflare Pages

---

## 📁 Project Structure

```text
tej-portfolio/
│
├── public/
│   ├── images/
│   │   ├── journey/
│   │   ├── projects/
│   │   └── experience/
│   │
│   └── resume/
│       └── Tej-Pratap-Resume.pdf
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── JourneyCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SelectedProjects.jsx
│   │   ├── ClientProject.jsx
│   │   ├── NextChapter.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── journey.js
│   │   ├── projects.js
│   │   └── experience.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Website Structure

### Home

The homepage contains:

1. Hero
2. Career Journey
3. Selected Projects
4. Currently Building
5. Opportunity CTA
6. Footer

The homepage does **not** display every project.

---

### Journey

The career timeline includes:

#### 2018–2021
**BCA — Data Science**  
Ajeenkya DY Patil University

#### 2021–2023
**Software Development**

QuikieBrain  
Antino Labs

#### 2023–2025
**Analytics Engineer**

Autobot

#### 2025–Present
**M.Sc. Artificial Intelligence & Data Science**

Deggendorf Institute of Technology × University of South Bohemia

#### Jan–Mar 2026
**Focused Project Sprint**

Data Engineering · AI · Analytics · Systems

#### Now

**Data Engineering · Analytics Engineering · AI**

---

## 🚀 Selected Projects

Only selected projects appear on the homepage.

### CoreSync

Distributed Spark system simulation focused on:

- Parallel execution
- Resource allocation
- Scheduling
- Multi-region workloads
- Spark pipelines

### MarketPulse

Distributed market-data engineering platform using:

- Kafka
- Spark
- Delta Lake
- PostgreSQL
- Power BI

### Retail Data Pipeline

End-to-end data engineering pipeline using:

- Airflow
- Kubernetes
- Spark
- PostgreSQL
- Power BI

Additional projects are available on the dedicated Projects page.

---

## 🏗️ Client Project

### POS Billing System

A real-world client project for a hardware/building-material business.

Technology:

- React
- Vite
- Tailwind CSS
- Node.js
- Express
- PostgreSQL

Features include:

- Billing
- Product management
- Category management
- Units
- Quantity/rate calculation
- A4 printing
- Authentication
- English/Hindi
- Responsive layouts
- Accessibility controls

The client project is presented separately from personal and academic projects.

---

## 📱 Responsive Design

The website must work across:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Large screens

### Mobile principles

The desktop timeline becomes a single vertical timeline.

Desktop:

```text
Card ─── ● ─── Card
          │
Card ─── ●
          │
          ● ─── Card
```

Mobile:

```text
●
│
├── Card
│
├── Visual
│
●
│
├── Card
│
├── Visual
│
●
```

There must be:

- No horizontal scrolling
- Touch-friendly controls
- Readable typography
- Responsive images
- Mobile navigation
- Appropriate spacing

---

## ✨ Animation

Animations should be subtle.

Examples:

- Timeline node activation
- Chapter reveal
- Card entrance
- Hover/focus interactions
- Smooth navigation

Avoid excessive animation.

The content and projects should remain the focus.

The website should also respect:

```text
prefers-reduced-motion
```

---

## ⚡ Performance

The portfolio should remain lightweight.

Avoid unnecessary:

- Large JavaScript libraries
- Video backgrounds
- Heavy WebGL
- Excessive animations
- Oversized images

Images should be optimized before being added.

---

## 🧑‍💻 Local Development

Clone the repository:

```bash
git clone <repository-url>
cd tej-portfolio
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🌿 Git Workflow

Main branches:

```text
main
development
```

Feature branches:

```text
feature/hero
feature/journey
feature/projects
feature/responsive
feature/animations
```

Development should happen on feature/development branches before merging into `main`.

---

## 📌 Development Rules

### 1. Preserve the visual direction

The locked reference design is the source of truth for the visual language.

Do not redesign the homepage without a specific reason.

### 2. Data comes first

The portfolio should communicate Data Engineering, Analytics Engineering, Data Science and AI before software development.

Software development is part of the journey, not the current primary positioning.

### 3. Do not overload the homepage

The homepage should show selected evidence.

The complete project collection belongs on the Projects page.

### 4. Use real project visuals

Whenever possible, use:

- Actual architecture diagrams
- Actual dashboards
- Actual screenshots
- Actual project visuals

Do not use random stock images to represent technical projects.

### 5. Keep content editable

Career information and projects should live inside `/src/data/`.

Avoid hard-coding portfolio content throughout components.

### 6. Mobile is a first-class layout

Every major component must be tested on mobile before being considered complete.

---

## 🎯 Long-Term Goal

The portfolio should evolve from a static resume website into an interactive representation of how I think, build and work with data.

The story should communicate:

**Foundation → Experience → Data → AI → Systems → Real-world impact**

---

## 👤 Author

**Tej Pratap**

Data · AI · Analytics Engineering

GitHub: github.com/tejfaster

LinkedIn: linkedin.com/in/tej-pratap-25527a185

Email: tej.pratap227@gmail.com
