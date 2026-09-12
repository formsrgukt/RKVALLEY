import { MetadataRoute } from 'next';
import { RGUKT_DATA } from '@/data/rguktData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rguktrkv.ac.in';

  // Base static pages
  const staticPages = [
    '',
    '/about',
    '/academics',
    '/administration',
    '/admissions',
    '/careers',
    '/contact',
    '/departments',
    '/examinations',
    '/grievance',
    '/library',
    '/placements',
    '/research',
    '/students',
    '/tenders',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Departments
  const departmentPages = RGUKT_DATA.departments.map((dept) => ({
    url: `${baseUrl}/departments/${dept.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Leadership
  const leadershipPages = RGUKT_DATA.leadership.map((leader) => ({
    url: `${baseUrl}/leadership/${leader.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...departmentPages, ...leadershipPages];
}
