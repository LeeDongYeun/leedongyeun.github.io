/*
 * EDIT THIS FILE TO UPDATE THE WEBSITE.
 *
 * - Text inside backticks (`...`) may contain simple HTML such as <b> and <a>.
 * - Add or remove array items by copying/deleting one { ... } block.
 * - Keep commas between items.
 */

window.SITE_DATA = {
  site: {
    title: "Dongyeun Lee",
    description: "Ph.D. student at KAIST researching efficient machine learning and generative models.",
    lastUpdated: "at August 2026",
  },

  profile: {
    name: "Dongyeun Lee",
    koreanName: "",
    title: "Ph.D. Student @ KAIST",
    image: "assets/profile.jpg",
    imageAlt: "Portrait of Dongyeun Lee",
  },

  socials: [
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/dongyeun-lee-07085918a/",
    },
    {
      label: "Google Scholar",
      icon: "scholar",
      url: "https://scholar.google.com/citations?user=PIxqOuAAAAAJ&hl=en",
    },
    {
      label: "GitHub",
      icon: "github",
      url: "https://github.com/LeeDongYeun",
    },
  ],

  contacts: [
    {
      label: "Affiliation",
      value: "KAIST",
      icon: "building",
      url: "https://www.kaist.ac.kr/en/",
    },
    {
      label: "Email",
      value: "ledoye@kaist.ac.kr",
      icon: "mail",
      url: "mailto:ledoye@kaist.ac.kr",
    },
    {
      label: "Location",
      value: "Daejeon, South Korea",
      icon: "map",
    },
    {
      label: "CV",
      value: "Download CV",
      icon: "download",
      url: "assets/CV_DongyeunLee.pdf",
    },
  ],

  about: [
    `I am a Ph.D. student in the School of Electrical Engineering at KAIST, advised by Prof. <a href="http://siit.kaist.ac.kr/Faculty">Junmo Kim</a>. My name 동연 is actually pronounced “Dong-yeon,” but my parents wrote it as “Dongyeun” on my passport when I was little—and the spelling has been tagging along ever since.`,

    `My research lies at the intersection of machine learning and systems, focusing on making AI models memory-efficient, fast, and scalable across algorithms and systems. I am particularly interested in designing efficient, hardware-friendly algorithms for generative models.`,
  ],

  publications: [
    {
      title: "HyperVAttention: Efficient Sparse Attention with Spatio-Temporal Clustering for Video Diffusion",
      authors: "Dongyeun Lee, Amir Zandieh, Vahab Mirrokni, Junmo Kim†, Insu Han†",
      venue: "Preprint ",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2607.03012" },
      ],
    },
    {
      title: "ConceptPrism: Concept Disentanglement in Personalized Diffusion Models via Residual Token Optimization",
      authors: "Minseo Kim, Minchan Kwon, Dongyeun Lee, Junmo Kim",
      venue: "CVPR 2026",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2602.19575" },
      ],
    },
    {
      title: "Inlier-Centric Post-Training Quantization for Object Detection Models",
      authors: "Minsu Kim, Dongyeun Lee, Jaemyung Yu, Jiwan Hur, Giseop Kim, Junmo Kim",
      venue: "ICLR 2026",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2602.03472" },
      ],
    },
    {
      title: "DMQ: Dissecting Outliers of Diffusion Models for Post-Training Quantization",
      authors: "Dongyeun Lee, Jiwan Hur, Hyounguk Shon, Jae Young Lee, Junmo Kim",
      venue: "ICCV 2025",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2507.12933" },
        { label: "Code", url: "https://github.com/LeeDongYeun/dmq" },
      ],
    },
    {
      title: "Comparison Reveals Commonality: Customized Image Generation through Contrastive Inversion",
      authors: "Minseo Kim, Minchan Kwon, Dongyeun Lee, Junmo Kim",
      venue: "CVPRW 2025",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2508.07755" },
      ],
    },
    {
      title: "RADIO: Reference-Agnostic Dubbing Video Synthesis",
      authors: "Dongyeun Lee*, Chaewon Kim*, Sangjoon Yu, Jaejun Yoo†, Gyeong-Moon Park†",
      venue: "WACV 2024",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2309.01950" },
      ],
    },
    {
      title: "Training Cartoonization Network without Cartoon",
      authors: "Doyeon Kim, Dongyeun Lee, Donggyu Joo, Junmo Kim",
      venue: "ICIP 2023",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10223141" },
      ],
    },
    {
      title: "Fix the Noise: Disentangling Source Feature for Controllable Domain Translation",
      authors: "Dongyeun Lee, Jae Young Lee, Doyeon Kim, Jaehyun Choi, Jaejun Yoo, Junmo Kim",
      venue: "CVPR 2023",
      links: [
        {
          label: "Paper",
          url: "https://openaccess.thecvf.com/content/CVPR2023/html/Lee_Fix_the_Noise_Disentangling_Source_Feature_for_Controllable_Domain_Translation_CVPR_2023_paper.html",
        },
        { label: "Code", url: "https://github.com/LeeDongYeun/FixNoise" },
      ],
    },
    {
      title: "Fix the Noise: Disentangling Source Feature for Transfer Learning of StyleGAN",
      authors: "Dongyeun Lee, Jae Young Lee, Doyeon Kim, Jaehyun Choi, Junmo Kim",
      venue: "CVPRW 2022",
      note: "AI for Content Creation Workshop · Best Paper Award",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2204.14079" },
      ],
    },
  ],

    education: [
    {
      organization: "Korea Advanced Institute of Science and Technology (KAIST)",
      // organizationUrl: "https://www.kaist.ac.kr/en/",
      period: "Mar. 2026 — Present",
      role: "Ph.D. in Electrical Engineering",
      details: ["(Advisor: Prof. Junmo Kim)"],
    },
    {
      organization: "Korea Advanced Institute of Science and Technology (KAIST)",
      // organizationUrl: "https://www.kaist.ac.kr/en/",
      period: "Mar. 2021 — Aug. 2022",
      role: "M.S. in Electrical Engineering",
      details: ["(Advisor: Prof. Junmo Kim)"],
    },
    {
      organization: "Korea Advanced Institute of Science and Technology (KAIST)",
      // organizationUrl: "https://www.kaist.ac.kr/en/",
      period: "Mar. 2016 — Feb. 2021",
      role: "B.S. in Computer Science",
      details: [],
    },
  ],

  experience: [
    {
      organization: "Korea Advanced Institute of Science and Technology (KAIST)",
      // organizationUrl: "http://siit.kaist.ac.kr/",
      period: "Apr. 2024 — Feb. 2026",
      role: "Research Scientist  (Host: Prof. Junmo Kim) · [Mandatory Military Service](https://en.wikipedia.org/wiki/Conscription_in_South_Korea)",
      details: [],
    },
    {
      organization: "Klleon AI Research",
      organizationUrl: "https://klleon.io/",
      period: "May 2022 — Mar. 2024",
      role: "AI Researcher · [Mandatory Military Service](https://en.wikipedia.org/wiki/Conscription_in_South_Korea)",
      details: [
      ],
    },
    {
      organization: "Dabeeo",
      organizationUrl: "https://www.dabeeo.com/",
      period: "Apr. 2019 — Aug. 2019",
      role: "Research Intern",
      details: [
      ],
    },
  ],

  awards: [
    {
      title: "Best Paper Award",
      period: "Jun. 2022",
      description: "CVPR 2022 Workshop on AI for Content Creation · Sponsored by Google",
      url: "assets/CVPRW2022_award.jpeg",
    },
  ],
};
