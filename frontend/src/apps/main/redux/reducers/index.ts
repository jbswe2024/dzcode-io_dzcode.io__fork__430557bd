import { articles } from "./articles";
import { articlesScene } from "./articles-scene";
import { combineReducers } from "redux";
import { documentation } from "./documentation";
import { landingScene } from "./landing-scene";
import { learnScene } from "./learn-scene";
import { projects } from "./projects";
import { projectsScene } from "./projects-scene";

export const mainReducer = combineReducers({
  documentation,
  learnScene,
  articles,
  articlesScene,
  projects,
  projectsScene,
  landingScene,
});