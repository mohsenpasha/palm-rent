import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin('src/i18n/request.js');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["palmrentcar.com"],
  },
};

export default withNextIntl(nextConfig);