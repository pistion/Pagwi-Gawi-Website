import { images } from './images';

export const brand = {
  name: 'Pagwi Gawi',
  tagline: 'Events & Services',
  email: 'hello@pagwigawi.com',
  phone: '+000 000 0000',
  location: '[Your address here]',
  summary: 'Events and Services bringing communities together across sport, church and music.',
  taglineShort: 'Sports · Church · Music',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
];

export const serviceOptions = [
  'Events Management',
  'Sports Development',
  'Church Activities',
  'Music Events',
  'Community Service',
];

export const stats = [
  { value: '120+', label: 'Events delivered' },
  { value: '5', label: 'Core services' },
];

export const servicesPreview = [
  {
    number: '01',
    title: 'Events Management',
    description: 'Full-scale planning, coordination and on-the-day production for any gathering.',
  },
  {
    number: '02',
    title: 'Sports Development',
    description: 'Fixtures, tournaments and grassroots programs that grow active communities.',
  },
  {
    number: '03',
    title: 'Church Activities',
    description: 'Services, conventions and fellowship events organised with care and reverence.',
  },
  {
    number: '04',
    title: 'Music Events',
    description: 'Concerts, showcases and festivals — from stage build to crowd experience.',
  },
  {
    number: '05',
    title: 'Community Service',
    description: 'Outreach and volunteer initiatives that give back and bring people together.',
    featured: true,
  },
];

export const servicesDetailed = [
  {
    number: '01',
    title: 'Events Management',
    description:
      'From concept to closing night, we handle full-scale planning, vendor coordination, scheduling and on-the-day production so your event runs without a hitch.',
    deliverables: [],
    imageLabel: 'Events photo',
    image: images.services.events,
    imageFirst: true,
  },
  {
    number: '02',
    title: 'Sports Development',
    description:
      'Fixtures, tournaments, leagues and grassroots programs designed to grow participation and build active, connected communities.',
    deliverables: ['Tournaments', 'League management', 'Youth programs'],
    imageLabel: 'Sports photo',
    image: images.services.sports,
    imageFirst: false,
  },
  {
    number: '03',
    title: 'Church Activities',
    description:
      'Services, conventions, retreats and fellowship gatherings organised with care, reverence and a genuine understanding of your congregation.',
    deliverables: ['Conventions', 'Retreats', 'Fellowship events'],
    imageLabel: 'Church photo',
    image: images.services.church,
    imageFirst: true,
  },
  {
    number: '04',
    title: 'Music Events',
    description:
      'Concerts, showcases and festivals — from stage build and sound to artist liaison and crowd experience, we deliver the whole show.',
    deliverables: [],
    imageLabel: 'Music photo',
    image: images.services.music,
    imageFirst: false,
  },
  {
    number: '05',
    title: 'Community Service',
    description:
      'Outreach drives and volunteer initiatives that give back, raise awareness and bring people together around the causes that matter most.',
    deliverables: ['Outreach', 'Volunteering', 'Awareness drives'],
    imageLabel: 'Community photo',
    image: images.services.community,
    imageFirst: true,
  },
];

export const workProjects = [
  {
    title: 'Regional Cup Finals',
    category: 'Sports Development',
    filter: 'Sports',
    imageLabel: 'Sports event',
    image: images.work.sportsCup,
  },
  {
    title: 'Annual Convention',
    category: 'Church Activities',
    filter: 'Church',
    imageLabel: 'Church convention',
    image: images.work.churchConvention,
  },
  {
    title: 'Summer Sound Fest',
    category: 'Music Events',
    filter: 'Music',
    imageLabel: 'Music festival',
    image: images.work.musicFest,
  },
  {
    title: 'Youth League Launch',
    category: 'Sports Development',
    filter: 'Sports',
    imageLabel: 'Youth program',
    image: images.work.youthLeague,
  },
  {
    title: 'Community Outreach Day',
    category: 'Community Service',
    filter: 'Community',
    imageLabel: 'Community drive',
    image: images.work.communityOutreach,
  },
  {
    title: 'Praise & Worship Night',
    category: 'Music Events',
    filter: 'Music',
    imageLabel: 'Worship night',
    image: images.work.worshipNight,
  },
];

export const workFilters = ['All', 'Sports', 'Church', 'Music', 'Community'];

export const dailyQuotes = [
  {
    quote: 'Coming together is a beginning, staying together is progress, and working together is success.',
    name: 'Henry Ford',
  },
  {
    quote: 'A community is like a ship; everyone ought to be prepared to take the helm.',
    name: 'Henrik Ibsen',
  },
  {
    quote: 'Alone we can do so little; together we can do so much.',
    name: 'Helen Keller',
  },
  {
    quote: 'If you want to go fast, go alone. If you want to go far, go together.',
    name: 'African Proverb',
  },
  {
    quote: 'The strength of the team is each individual member. The strength of each member is the team.',
    name: 'Phil Jackson',
  },
  {
    quote: 'No one can whistle a symphony. It takes a whole orchestra to play it.',
    name: 'H.E. Luccock',
  },
  {
    quote: 'Great things in business are never done by one person; they\'re done by a team of people.',
    name: 'Steve Jobs',
  },
];

export const teamMembers = [
  { name: 'Brian Singut Jr', role: 'Founder & Director', image: '/images/founder.jpg' },
];

export const newsArticles = [
  {
    category: 'News',
    title: 'Placeholder headline for your first post',
    summary: 'A one-line summary of the article.',
    image: images.news.News,
    date: 'Jun 28, 2026',
    time: '9:00 AM',
  },
  {
    category: 'Events',
    title: 'Placeholder headline for your second post',
    summary: 'A one-line summary of the article.',
    image: images.news.Events,
    date: 'Jun 22, 2026',
    time: '11:30 AM',
  },
  {
    category: 'Community',
    title: 'Placeholder headline for your third post',
    summary: 'A one-line summary of the article.',
    image: images.news.Community,
    date: 'Jun 15, 2026',
    time: '2:00 PM',
  },
  {
    category: 'Sports',
    title: 'Placeholder headline for your fourth post',
    summary: 'A one-line summary of the article.',
    snippet: 'Add a short excerpt here that gives readers a taste of what this post is about. Two to three sentences work best to hook the reader and encourage them to click through.',
    image: images.news.Sports,
    date: 'Jun 10, 2026',
    time: '8:00 AM',
  },
  {
    category: 'Music',
    title: 'Placeholder headline for your fifth post',
    summary: 'A one-line summary of the article.',
    snippet: 'Add a short excerpt here that gives readers a taste of what this post is about. Two to three sentences work best to hook the reader and encourage them to click through.',
    image: images.news.Music,
    date: 'Jun 4, 2026',
    time: '6:00 PM',
  },
  {
    category: 'Church',
    title: 'Placeholder headline for your sixth post',
    summary: 'A one-line summary of the article.',
    snippet: 'Add a short excerpt here that gives readers a taste of what this post is about. Two to three sentences work best to hook the reader and encourage them to click through.',
    image: images.news.Church,
    date: 'May 30, 2026',
    time: '10:00 AM',
  },
];

export const featuredArticle = {
  category: 'Featured',
  title: 'Your headline feature story goes here',
  summary:
    '[Placeholder] A short standfirst introducing your most important recent update — a major event recap, a new program launch, or a community milestone.',
  image: images.news.featured,
};

export const aboutValues = [
  {
    title: 'Our mission',
    text: 'To build brand awareness for the causes and communities we partner with, and to grow participation in sport, faith and music.',
  },
  {
    title: 'Our promise',
    text: 'Professional, reliable delivery — every event, every time, with care for the people it serves.',
  },
  {
    title: 'Our values',
    text: 'Community first. Excellence in the details. Integrity in everything we put our name to.',
  },
];

export const aboutStory = [
  '[Placeholder] Share how Pagwi Gawi began — the first event, the people who believed in it, and the moment you knew this was your calling. This is your space to tell your community where you came from and why it matters.',
  '[Placeholder] Add a second paragraph about your growth and the communities you now serve across sport, church and music.',
];