const config = {
  githubUser: "lissy93",
  fullName: "Alicia Sykes",
  projects: [
    {
      name: "dashy",
      title: "Dashy",
      description: "A self-hostable server dashboard. Status-checking, widgets, themes, icon packs, UI editor, and more",
      icon: "https://i.ibb.co/yhbt6CY/dashy.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/dashy.gif",
      homepage: "https://dashy.to",
      docker: "https://hub.docker.com/r/lissy93/dashy",
      mirror: "https://codeberg.org/alicia/dashy",
      docs: "https://dashy.to/docs/",
      color: "#00efe3"
    },
    {
      name: "personal-security-checklist",
      title: "Digital Defense",
      language: "qwik",
      description: "The ultimate security checklist, 300+ tips for protecting your data online",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/digital-defense.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/personal-security-checklist.png",
      homepage: "https://digital-defense.io/",
      color: "#a78bfa"
    },
    {
      name: "web-check",
      title: "Web Check",
      language: "React",
      description: "The ultimate all-in-one OSINT tool for analyzing any website",
      icon: "https://raw.githubusercontent.com/Lissy93/web-check/master/public/android-chrome-192x192.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/web-check.png",
      homepage: "https://web-check.xyz",
      docker: "https://hub.docker.com/r/lissy93/web-check",
      mirror: "https://codeberg.org/alicia/web-check",
      docs: "https://web-check.xyz/check/about",
      color: "#9fef00"
    },
    {
      name: "domain-locker",
      title: "Domain Locker",
      language: "Angular",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/domain-locker.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/domain-locker.gif",
      description: "Domain name portfolio app for monitoring your domains",
      color: "#9571ff"
    },
    {
      name: "awesome-privacy",
      title: "Awesome Privacy",
      language: "Astro",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/awesome-privacy.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/awesome-privacy%20(1).png",
      description: "A curated list of apps, services and alternatives that respect your privacy",
      mirror: "https://codeberg.org/alicia/awesome-privacy",
      color: "#fc60a8"
    },
    {
      name: "readme-contribs",
      title: "Readme Contribs",
      language: "hono",
      icon: "https://github.com/Lissy93/readme-contribs/blob/main/public/favicon.png?raw=true",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/readme-contribs.png",
      homepage: "https://readme-contribs.as93.net/",
      color: "#00d1b2"
    },
    {
      name: "ansibles",
      title: "Ansible Playbooks",
      language: "ansible",
      description: "Full, automated, configurable server setup for optimum usability, security and best practices",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/ansibles.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/ansibles.gif",
      color: "#d95de8"
    },
    {
      name: "portainer-templates",
      title: "Portainer Template",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/portainer-templates.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/portainer-templates.png",
      color: "#58b0f6"
    },
    {
      name: "adguardian-term",
      title: "Adguardian",
      language: "Rust",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/adguardian.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/adguardian.gif",
      docker: "https://hub.docker.com/r/lissy93/adguardian",
      mirror: "https://codeberg.org/alicia/adguardian",
      docs: "https://lissy93.github.io/AdGuardian-Term/adguardian/index.html",
      crate: "https://crates.io/crates/adguardian",
      color: "#17d569"
    },
    {
      name: "dotfiles",
      title: "~/.dotfiles",
      description: "My personal dotfiles, including scripts, configs and more",
      icon: "https://github.com/Lissy93/dotfiles/raw/master/.github/logo.png",
      color: "#6ed92c"
    },
    {
      name: "twitter-sentiment-visualisation",
      title: "Sentiment Sweep",
      icon: "https://github.com/Lissy93/twitter-sentiment-visualisation/blob/dev/client-side-source/graphics/web_hi_res_512.png?raw=true",
      screenshot: "https://github.com/Lissy93/twitter-sentiment-visualisation/blob/dev/docs/screenshots/1b_home-menu.PNG?raw=true",
      color: "#469fff"
    },
    {
      name: "git-in",
      icon: "https://raw.githubusercontent.com/Lissy93/git-into-open-source/main/.github/logo.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/git-in.png",
      color: "#d494ff"
    },
    {
      name: "email-comparison",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/email-comparison.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/email-comparison-scr.png",
      language: "lit",
      color: "#fedf2d"
    },
    {
      name: "espanso-config",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/espanso.png",
      color: "#00ab91"
    },
    {
      name: "my-website",
      description: "A developer portfolio site, aggregating projects from GitHub and posts from RSS",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/my-website.png",
      color: "#7683ff"
    },
    {
      name: "brewfile",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/brewfile.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/brewfile.png",
      color: "#fbb040"
    },
    {
      name: "minimal-terminal-prompt",
      icon: "https://i.ibb.co/T050z33/bash-prompt.png",
      screenshot: "https://github.com/Lissy93/minimal-terminal-prompt/blob/master/demo.gif?raw=true",
      color: "#707379"
    },
    {
      name: "bug-bounties",
      title: "Bug Bounties",
      description: "A catalogue of bug bounty programs, including scopes, rules and rewards",
      icon: "https://github.com/Lissy93/bug-bounties/blob/main/web/public/favicon.png?raw=true",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/bug-bounties.png",
      color: "#fdc500"
    },
    {
      name: "hasami-shogi"
    },
    {
      name: "anti-theft-charge",
      screenshot: "https://github.com/Lissy93/anti-theft-charge/blob/master/demo/atc-initial-app-start.gif?raw=true",
      color: "#fcbf05"
    },
    {
      name: "sentiment-analysis"
    },
    {
      name: "cheat-code"
    },
    {
      name: "all-the-countries"
    },
    {
      name: "go-apod",
      icon: "https://raw.githubusercontent.com/Lissy93/go-apod/master/static/assets/pwa/apple-touch-icon.png"
    },
    {
      name: "who-dat",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/who-dat.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/who-dat-screenshot.png",
      color: "#fafafa"
    },
    {
      name: "pax"
    },
    {
      name: "cso",
      title: "Chief Snack Officer",
      language: "Solid",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/cso.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/cso.gif",
      color: "#e2304d"
    },
    {
      name: "usermonkey",
      title: "User Monkey",
      icon: "https://github.com/Lissy93/usermonkey/raw/master/DEMO/user-monkey/img/NavLogo.png"
    },
    {
      name: "happy-app",
      language: "Angular",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/happy-app.png",
      screenshot: "https://raw.githubusercontent.com/Lissy93/happy-app/master/docs/screen-shot-1.png",
      color: "#ffcd4c"
    },
    {
      name: "realtime-speech-analytics"
    },
    {
      name: "callisto-theme-standard-notes"
    },
    {
      name: "conky-system-stats-widget"
    },
    {
      name: "nfu",
      title: "NFU"
    },
    {
      name: "docker-tcpdump",
      title: "Docker TCPDump",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/docker-tcp-dump.png",
      color: "#039cfd"
    },
    {
      name: "study-time",
      icon: "https://raw.githubusercontent.com/Lissy93/Study-Time/master/Graphics/hi-res-icon.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/study-time.png",
      color: "#4093eb"
    },
    {
      name: "minesweper",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/minesweeper.png",
      color: "#E83046"
    },
    {
      name: "OLD_AdGuardian-Term",
      title: "AdGuardian Term (V1)",
      description: "A terminal-based traffic an DNS monitor for your AdGuard Home instance",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/adguardian-go.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/adguradian-go.png",
      color: "#31d891"
    },
    {
      name: "raid-calculator",
      language: "Van",
      icon: "https://storage.googleapis.com/as93-screenshots/project-screenshots/raid-caclularor.png",
      screenshot: "https://raw.githubusercontent.com/Lissy93/raid-calculator/refs/heads/main/public/banner.png",
      color: "#dfc01a"
    },
    {
      name: "revision-quizzes"
    },
    {
      name: "as93",
      title: "lissy93.github.io",
      language: "Svelte",
      description: "You're looking at it! A project as a fallback for any repos which do not have a GitHub pages homepage",
      icon: "https://storage.googleapis.com/as93-screenshots/project-logos/heart.png",
      screenshot: "https://storage.googleapis.com/as93-screenshots/project-screenshots/as93.png",
      color: "#f55064"
    }
  ],
  socials: [
    {
      name: "Twitter",
      icon: "twitter",
      tone: "#1DA1F2",
      link: "https://twitter.com/",
      user: "Lissy_Sykes"
    },
    {
      name: "GitHub",
      icon: "github2",
      tone: "#585858",
      link: "https://github.com/",
      user: "Lissy93"
    },
    {
      name: "Dev.to",
      icon: "dev-to",
      tone: "#f1f155",
      link: "https://dev.to/",
      user: "Lissy93"
    },
    {
      name: "Mastodon",
      icon: "mastodon",
      tone: "#6364FF",
      link: "https://mastodon.social/",
      user: "@Lissy93",
      noAt: true
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      tone: "#0A66C2",
      link: "https://www.linkedin.com/",
      user: "in/AliciaSykes",
      noAt: true
    },
    {
      name: "Instagram",
      icon: "instagram",
      tone: "#E4405F",
      link: "https://www.instagram.com/",
      user: "liss.sykes"
    }
    // {
    //   name: 'YouTube',
    //   icon: 'youtube',
    //   tone: '#FF0000',
    //   link: 'https://www.youtube.com/c/',
    //   user: 'AliciaSykes',
    // },
    // {
    //   name: 'Reddit',
    //   icon: 'reddit',
    //   tone: '#FF4500',
    //   link: 'https://www.reddit.com/user/',
    //   user: 'lissy93',
    // },
    // {
    //   name: 'StackOverflow',
    //   icon: 'stackoverflow',
    //   tone: '#F58025',
    //   link: 'https://stackoverflow.com/users/',
    //   noAt: true,
    //   user: '979052/alicia',
    // },
    // {
    //   name: 'KeyBase',
    //   icon: 'keybase',
    //   tone: '#33A0FF',
    //   link: 'https://keybase.io/',
    //   noAt: true,
    //   user: 'AliciaSykes',
    // },
    // {
    //   name: 'Facebook',
    //   icon: 'facebook',
    //   tone: '#1877F2',
    //   link: 'https://www.facebook.com/',
    //   user: 'Liss.Sykes',
    // },
    // {
    //   name: 'PeerList',
    //   icon: 'peerlist',
    //   tone: '#00ac43',
    //   link: 'https://peerlist.io/',
    //   user: 'alicia',
    // },
    // {
    //   name: 'CodersRank',
    //   icon: 'codersrank',
    //   tone: '#72a0a8',
    //   link: 'https://profile.codersrank.io/user/',
    //   user: 'lissy93',
    // },
    // {
    //   name: 'OMG.lol',
    //   icon: 'omg-lol',
    //   tone: '#ff69ad',
    //   link: 'https://omg.lol/',
    //   user: 'alicia',
    // },
  ],
  links: [
    {
      href: "https://aliciasykes.com/about",
      text: "About"
    },
    {
      href: "https://aliciasykes.com/blog",
      text: "Blog"
    },
    {
      href: "https://aliciasykes.com/projects",
      text: "Projects"
    },
    {
      href: "https://aliciasykes.com/contact",
      text: "Contact"
    }
  ]
};
export {
  config as c
};
