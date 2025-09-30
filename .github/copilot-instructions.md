# Copilot Instructions for JavaScript Course Codebase

## Overview
This codebase is a collection of JavaScript learning modules, each in its own folder (e.g., `Lesson 1`, `lesson 2`, ..., `lesson 10`). Each lesson typically contains an `index.html` and a `main.js`, with some lessons including additional assets (CSS, images, subfolders for projects).

## Structure & Conventions
- **Lessons are independent**: Each lesson folder is self-contained. Do not assume cross-lesson imports or dependencies.
- **Naming**: Lesson folders use the pattern `Lesson X` or `lesson X` (case varies). Main entry points are `index.html` and `main.js`.
- **Subprojects**: Some lessons (e.g., `lesson 10/hamburger`, `lesson 10/slideshow`, `lesson 9/reactiongame`) contain subfolders for mini-projects. Treat these as isolated apps.
- **Assets**: Images and CSS are stored within their respective lesson or subproject folders.

## Development Workflow
- **No build step**: This is a static HTML/JS/CSS project. Open `index.html` files directly in a browser to run.
- **No package manager**: There is no `package.json` or external dependency management. All code is vanilla JS/CSS/HTML.
- **No automated tests**: There are no test scripts or frameworks present.
- **Debugging**: Use browser dev tools (F12) for JS debugging and inspecting DOM/CSS.

## Patterns & Practices
- **Vanilla JavaScript**: All code is plain JS. Avoid introducing frameworks or build tools.
- **File organization**: Keep new features or exercises within the relevant lesson folder. For new mini-projects, create a subfolder inside the appropriate lesson.
- **HTML/JS linkage**: Scripts are linked via `<script src="main.js"></script>` at the end of each `index.html`.
- **CSS**: Styles are either inline in HTML or in a `style.css` file in the same folder.

## Examples
- To add a new lesson: Copy the structure of an existing lesson (e.g., `lesson 3`), including `index.html` and `main.js`.
- To add a new mini-project: Create a subfolder (e.g., `lesson 10/newproject/`) with its own `index.html`, `main.js`, and assets.

## Key Files & Folders
- `Lesson 1/`, `lesson 2/`, ...: Main lesson folders
- `lesson 10/hamburger/`, `lesson 10/slideshow/`, `lesson 9/reactiongame/`: Example subprojects

## Do/Don't
- **Do**: Keep code modular within each lesson or subproject.
- **Do**: Use only browser-standard JS, HTML, and CSS.
- **Don't**: Add Node.js, npm, or other build/test tools.
- **Don't**: Assume shared state or code between lessons.

---
For more details, review the folder structure and existing lesson patterns.