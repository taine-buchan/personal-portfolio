type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Geared Up',
    description:
      'A companion tool for the Great Walks of New Zealand. UI designed in Figma, front end built with React, TypeScript, and Tailwind CSS. Back end powered by Express and SQLite3.',
    link: 'https://github.com/taine-buchan/geared-up/',
    video:
      'https://res.cloudinary.com/dmu6ukzz7/video/upload/v1746055562/gearedup_jzdif6.mov',
    id: 'project1',
  },
  {
    name: 'West Auckland Water Blasting',
    description:
      'A freelance water blasting website built with Next.js, TypeScript, and Tailwind CSS, using Supabase for service data and Resend for email notifications. Deployed on Vercel',
    link: 'https://www.westaucklandwaterblasting.com/',
    video:
      'https://res.cloudinary.com/dmu6ukzz7/video/upload/v1746026897/wawb_flwqqf.mov',
    id: 'project2',
  },
  {
    name: 'Password Gentleman',
    description:
      'Password generator built with vanilla Javascript, HTML and CSS. Features interactive UI elements, sound effects, and responsive design for an enhanced user experience',
    link: 'https://password-gentleman.netlify.app//',
    video:
      'https://res.cloudinary.com/dmu6ukzz7/video/upload/v1746658894/0508_oplsu4.mov',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Dev Academy (simulated work environment)',
    title: 'Full-Stack Developer (Student)',
    start: 'Jan 2025',
    end: 'May 2025',
    link: 'https://devacademy.co.nz/',
    id: 'work1',
  },
  {
    company: 'OMD',
    title: 'Intermediate Creative',
    start: 'Jun 2021',
    end: 'Jun 2024',
    link: 'https://www.omd.com/?fbclid=PAZXh0bgNhZW0CMTEAAafGWcStR9NBBKAN7XD-Dj2l3C1OVHzVxqhwOCg7GYTiVeZkZtHIFPyTxLzcSw_aem_r1Bu-zcAhRaEedISKmgZZw',
    id: 'work2',
  },
  {
    company: 'FCB',
    title: 'Intern',
    start: 'Sep 2023',
    end: 'Dec 2023',
    link: 'https://fcb.co.nz/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Hey, thanks for stopping by!',
    description: 'A little bit about me',
    link: '/blog/a-little-bit-about-me',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/taine-buchan',
  },
  {
    label: 'Download my CV',
    link: 'https://res.cloudinary.com/dmu6ukzz7/image/upload/v1745789847/Taine_Buchan_Resume_23April_ekyzss.pdf',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/taine-buchan/',
  },
  {
    label: 'Spotify',
    link: 'https://open.spotify.com/artist/2Va5HJXZdv6y4JvBDhCIZ1?si=dfs9jTOmQDS4ACzdhqHmeA',
  },
]

export const EMAIL = 'tainebuchanwork@gmail.com'
