import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ArticlePage } from '../pages/ArticlePage';
import { SearchPage } from '../pages/SearchPage';
import { CategoryPage } from '../pages/CategoryPage';
import { NavigationPage } from '../pages/NavigationPage';
import { SocialPage } from '../pages/SocialPage';
import { CommentPage } from '../pages/CommentPage';
import { MediaPage } from '../pages/MediaPage';
import { WeatherPage } from '../pages/WeatherPage';
import { SidebarPage } from '../pages/SidebarPage';
import { HeaderPage } from '../pages/HeaderPage';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  articlePage: ArticlePage;
  searchPage: SearchPage;
  categoryPage: CategoryPage;
  navigationPage: NavigationPage;
  socialPage: SocialPage;
  commentPage: CommentPage;
  mediaPage: MediaPage;
  weatherPage: WeatherPage;
  sidebarPage: SidebarPage;
  headerPage: HeaderPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  categoryPage: async ({ page }, use) => {
    await use(new CategoryPage(page));
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
  socialPage: async ({ page }, use) => {
    await use(new SocialPage(page));
  },
  commentPage: async ({ page }, use) => {
    await use(new CommentPage(page));
  },
  mediaPage: async ({ page }, use) => {
    await use(new MediaPage(page));
  },
  weatherPage: async ({ page }, use) => {
    await use(new WeatherPage(page));
  },
  sidebarPage: async ({ page }, use) => {
    await use(new SidebarPage(page));
  },
  headerPage: async ({ page }, use) => {
    await use(new HeaderPage(page));
  },
});

export { expect } from '@playwright/test';
