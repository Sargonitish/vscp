import type { Skill, SkillCategory } from '@/lib/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React', level: 95, years: 5, icon: 'react' },
      { name: 'Next.js', level: 92, years: 4, icon: 'nextjs' },
      { name: 'TypeScript', level: 93, years: 5, icon: 'typescript' },
      { name: 'Tailwind CSS', level: 90, years: 3, icon: 'tailwind' },
      { name: 'HTML/CSS', level: 95, years: 7, icon: 'html' },
      { name: 'Framer Motion', level: 85, years: 3, icon: 'framer' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 90, years: 5, icon: 'nodejs' },
      { name: 'Python', level: 88, years: 4, icon: 'python' },
      { name: 'Go', level: 75, years: 2, icon: 'go' },
      { name: 'PostgreSQL', level: 88, years: 4, icon: 'postgresql' },
      { name: 'Redis', level: 82, years: 3, icon: 'redis' },
      { name: 'GraphQL', level: 80, years: 3, icon: 'graphql' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'Smartphone',
    skills: [
      { name: 'React Native', level: 85, years: 3, icon: 'react-native' },
      { name: 'Flutter', level: 70, years: 2, icon: 'flutter' },
      { name: 'Expo', level: 80, years: 3, icon: 'expo' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88, years: 4, icon: 'postgresql' },
      { name: 'MongoDB', level: 82, years: 3, icon: 'mongodb' },
      { name: 'Redis', level: 82, years: 3, icon: 'redis' },
      { name: 'Elasticsearch', level: 72, years: 2, icon: 'elasticsearch' },
      { name: 'Prisma', level: 85, years: 3, icon: 'prisma' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 85, years: 4, icon: 'aws' },
      { name: 'Docker', level: 88, years: 4, icon: 'docker' },
      { name: 'Kubernetes', level: 78, years: 2, icon: 'kubernetes' },
      { name: 'Terraform', level: 72, years: 2, icon: 'terraform' },
      { name: 'CI/CD', level: 85, years: 4, icon: 'cicd' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI/ML',
    icon: 'Brain',
    skills: [
      { name: 'TensorFlow', level: 75, years: 2, icon: 'tensorflow' },
      { name: 'PyTorch', level: 72, years: 2, icon: 'pytorch' },
      { name: 'LangChain', level: 78, years: 1, icon: 'langchain' },
      { name: 'OpenAI API', level: 85, years: 2, icon: 'openai' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 92, years: 6, icon: 'git' },
      { name: 'VS Code', level: 95, years: 6, icon: 'vscode' },
      { name: 'Figma', level: 78, years: 3, icon: 'figma' },
      { name: 'Linux', level: 88, years: 5, icon: 'linux' },
      { name: 'Postman', level: 85, years: 4, icon: 'postman' },
    ],
  },
];
