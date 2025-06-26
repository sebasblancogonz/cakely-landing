/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cakely.es',
  generateRobotsTxt: true, // También crea robots.txt
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'], // Excluye rutas privadas o internas
};
