// Global Variables
let currentSection = "home"
let isLoading = true
let typedTextIndex = 0
let typedCharIndex = 0
let isDeleting = false

// Typed Text Array
const typedTexts = [
  "Poet enthusiast & Writer",
  "Mathematics Student",
  "Computer Science Student",
  "World Trends Analyst",
  "Creative Problem Solver",
  "Technology Enthusiast",
]

// Comprehensive Poem Data
const poemData = {
  1: {
    title: "Digital Dreams",
    category: "Technology",
    date: "June 15, 2025",
    image:"12.jpg",
    content: `In circuits and code we find our way,
Through binary paths where thoughts convey,
The future speaks in ones and zeros,
Creating digital superheroes.

Algorithms dance in silicon halls,
While data streams through virtual walls,
Each pixel tells a story bright,
Of innovation's endless flight.

In this realm of endless possibility,
We craft tomorrow's reality,
Where human dreams and machines unite,
To paint the world in digital light.

- Purelyalex`,
  },
  2: {
    title: "Moonlit Whispers",
    category: "Love & Romance",
    date: "July 1, 2025",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
    content: `Under silver light we dance tonight,
Hearts beating in perfect rhyme,
Your whispers soft like gentle breeze,
Transcending space and time.

The moon above bears witness true,
To love that knows no end,
In shadows cast by starlit sky,
Two souls together blend.

Your eyes reflect the cosmic glow,
Of galaxies afar,
While in your arms I find my home,
My guiding northern star.

- Purelyalex`,
  },
  3: {
    title: "Maseno Mornings",
    category: "University Life",
    date: "July 2, 2025",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    content: `Dawn breaks over lecture halls,
Where dreams and knowledge intertwine,
Students rush with books in hand,
Racing against the chime.

Mathematics fills the morning air,
With equations pure and true,
While computer screens glow bright,
With code both old and new.

In Maseno's halls of learning,
We discover who we are,
Each lesson learned, each friendship made,
Guides us like a star.

- Purelyalex`,
  },
  4: {
    title: "Mountain Solitude",
    category: "Nature",
    date: "July 2, 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    content: `High above the world's noise,
Where silence speaks the loudest voice,
Mountains stand in majesty,
Offering peace and choice.

The wind whispers ancient tales,
Of time beyond our measure,
While eagles soar on thermal wings,
Seeking nature's treasure.

In solitude we find ourselves,
Away from digital screens,
Connected to the earth below,
And all that nature means.

- Purelyalex`,
  },
  5: {
    title: "Reflections",
    category: "Life & Philosophy",
    date: "july 3, 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    content: `In mirrors of time we see ourselves,
Past, present, future shelves,
Each moment holds a lesson learned,
Each bridge we've crossed or burned.

Life unfolds like poetry,
With rhythm, rhyme, and reason,
Every chapter tells a tale,
Of growth through every season.

We are the authors of our fate,
The painters of our dreams,
In reflection's honest light,
Nothing's quite what it seems.

- Purelyalex`,
  },
  6: {
    title: "Algorithm of the Heart",
    category: "Technology",
    date: "July 3, 2025",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    content: `If love were code, what would it be?
A function of you and me,
With parameters of trust and care,
And variables beyond compare.

The heart runs on its own OS,
With feelings as its process,
While emotions compile and run,
Until two hearts become as one.

In this program we call romance,
There's beauty in each dance,
Of logic mixed with passion's fire,
Creating love's eternal choir.

- Purelyalex`,
  },
}

// Complete Article Data with Kenya Focus and African People Images
const articleData = {
  "kenya-tech": {
    title: "Kenya's Silicon Savannah: Leading Africa's Tech Revolution",
    category: "Technology",
    date: "July 1, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Technology", "Innovation", "Silicon Savannah"],
    content: `<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop" alt="Kenyan tech entrepreneurs" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya has emerged as the undisputed technology hub of East Africa, earning the nickname "Silicon Savannah" for its thriving tech ecosystem. From the revolutionary M-Pesa mobile money platform to cutting-edge fintech startups, Kenya continues to lead the continent in digital innovation.

## The M-Pesa Revolution

<img src="13.jpg" alt="African woman using mobile money" style="float: right; width: 300px; height: 400px; object-fit: cover; border-radius: 8px; margin: 0 0 1rem 2rem;">

The story of Kenya's tech dominance begins with M-Pesa, launched in 2007 by Safaricom. This mobile money transfer service revolutionized financial inclusion, allowing millions of previously unbanked Kenyans to access financial services through their mobile phones. Today, M-Pesa processes over 50 billion transactions annually, making Kenya a global leader in mobile money adoption.

The success of M-Pesa demonstrated that African innovations could leapfrog traditional infrastructure and create solutions that the rest of the world would later adopt. This mobile-first approach became the foundation for Kenya's tech ecosystem.

## Thriving Startup Ecosystem

<img src="14.jpg" alt="African tech team collaboration" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin: 1rem 0;">

Nairobi's iHub, established in 2010, became the catalyst for Kenya's startup boom. This innovation hub has incubated hundreds of startups, creating a vibrant ecosystem that attracts international investors and talent.

### Key Success Stories:
- **Ushahidi**: Crisis mapping platform used worldwide for disaster response
- **Twiga Foods**: B2B marketplace connecting farmers to vendors  
- **BRCK**: Rugged internet connectivity solutions for emerging markets
- **Sendy**: Logistics platform revolutionizing delivery services
- **Tala**: AI-powered lending platform serving underbanked populations

## Government Support and Infrastructure

The Kenyan government has played a crucial role in fostering innovation through initiatives like Konza Technopolis, Digital Literacy Programs, and supportive legislation for tech entrepreneurs.

## Looking Forward

As Kenya continues to digitize its economy, the focus is shifting toward emerging technologies like artificial intelligence, blockchain, and IoT. With continued government support, private sector investment, and a growing pool of tech talent, Kenya is well-positioned to maintain its leadership in Africa's digital transformation.`,
    likes: 234,
    comments: [
      {
        author: "Dr.Nithya Menen",
        avatar: "15.jpg",
        content: "Excellent analysis! Kenya's innovations are inspiring developments across West Africa too.",
        date: "2 hours ago",
      },
      {
        author: "Tech Entrepreneur KE",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        content: "As a Kenyan startup founder, this captures the excitement perfectly.",
        date: "5 hours ago",
      },
    ],
  },
  "kenya-economy": {
    title: "Kenya's Economic Growth: Opportunities and Challenges in 2024",
    category: "Economics",
    date: "June 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Economy", "Growth", "Development"],
    content: `<img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" alt="Kenyan business district" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya's economy stands at a critical juncture in 2024, with significant opportunities for growth alongside persistent challenges. As East Africa's largest economy, Kenya's performance has far-reaching implications for regional stability and development.

## Economic Overview

Kenya's GDP reached $115 billion in 2023, with a growth rate of 5.6%. The economy is diversified across services (51%), agriculture (22%), manufacturing (17%), and construction (10%).

## Key Growth Drivers

### Digital Economy
The digital economy contributes approximately 8.3% to Kenya's GDP, driven by mobile money services, e-commerce platforms, and tech startups.

### Infrastructure Development  
Major projects like the Standard Gauge Railway and Lamu Port are boosting economic activity and regional connectivity.

### Agricultural Modernization
Kenya is transforming agriculture through precision farming, value addition, and climate-smart practices.

## Challenges and Opportunities

While facing challenges like debt sustainability and youth unemployment, Kenya has significant opportunities in regional integration, green economy transition, and continued digital transformation.`,
    likes: 189,
    comments: [
      {
        author: "Economic Analyst KE",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        content: "Comprehensive analysis! The debt sustainability issue is particularly important.",
        date: "3 hours ago",
      },
    ],
  },
  "kenya-politics": {
    title: "Kenya's Democratic Journey: Progress and Reforms in 2024",
    category: "Politics",
    date: "June 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Politics", "Democracy", "Governance"],
    content: `<img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop" alt="Kenyan parliament building" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya's democratic journey continues to evolve in 2024, with significant progress in governance reforms, citizen participation, and institutional strengthening. As one of Africa's most stable democracies, Kenya offers valuable lessons for the continent.

## Constitutional Foundation

The 2010 Constitution remains the cornerstone of Kenya's democratic progress, establishing devolved government, Bill of Rights, and independent institutions.

## Devolution Success Story

Kenya's devolution system has transformed governance by bringing services closer to people and enabling local development initiatives.

## Electoral Reforms and Democracy

The 2022 general elections demonstrated Kenya's democratic maturity with peaceful conduct and smooth transition of power.

## Looking Ahead

Kenya's democratic future depends on continued institutional strengthening, enhanced transparency, and inclusive governance that represents all citizens.`,
    likes: 156,
    comments: [
      {
        author: "Political Scientist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        content: "Excellent analysis of Kenya's democratic progress.",
        date: "4 hours ago",
      },
    ],
  },
  "kenya-climate": {
    title: "Kenya's Climate Action: Green Energy and Conservation Leadership",
    category: "Climate",
    date: "June 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Climate", "Green Energy", "Conservation"],
    content: `<img src="https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=800&h=400&fit=crop" alt="Kenyan renewable energy installation" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya has positioned itself as a leader in climate action across Africa, with over 90% of its electricity now coming from renewable sources. The country demonstrates that sustainable development is both achievable and economically viable.

## Renewable Energy Success

Kenya is the world's eighth-largest geothermal energy producer, with significant investments in solar and wind power expanding access to clean energy.

## Wildlife Conservation Excellence

Community-based conservation approaches have created over 160 conservancies covering 11 million acres, demonstrating how environmental protection and community development can work together.

## Climate Adaptation Strategies

From climate-smart agriculture to water resource management, Kenya is implementing comprehensive strategies to build resilience against climate change impacts.

## International Leadership

Kenya's climate commitments and hosting of UNEP headquarters position it as a key player in global climate action.`,
    likes: 198,
    comments: [
      {
        author: "Environmental Scientist",
        avatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=40&h=40&fit=crop&crop=face",
        content: "Kenya's geothermal success is truly remarkable.",
        date: "2 hours ago",
      },
    ],
  },
  "kenya-education": {
    title: "Transforming Education in Kenya: Digital Learning Revolution",
    category: "Education",
    date: "June 13, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Education", "Digital Learning", "Technology"],
    content: `<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop" alt="Kenyan students using digital devices" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya's education sector is undergoing a remarkable transformation through digital innovation and technology integration, creating new opportunities for students across the country.

## The Digital Learning Initiative

Kenya's Digital Learning Programme has connected over 24,000 primary schools to electricity and distributed digital devices to thousands of schools.

## Success Stories from the Classroom

Students and teachers across Kenya are embracing digital tools to enhance learning outcomes and expand educational opportunities.

## Challenges and Solutions

While infrastructure and connectivity remain challenges, innovative solutions are emerging to bridge the digital divide in education.

## Future of Education in Kenya

The integration of technology in education promises to transform how Kenyan students learn and prepare for the future economy.`,
    likes: 142,
    comments: [
      {
        author: "Education Expert",
        avatar: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=40&h=40&fit=crop&crop=face",
        content: "The digital transformation in Kenyan schools is impressive.",
        date: "1 day ago",
      },
    ],
  },
  "kenya-sports": {
    title: "Kenya's Athletic Excellence: Dominating Global Running",
    category: "Sports",
    date: "June 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Sports", "Athletics", "Running"],
    content: `<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" alt="Kenyan athletes training" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya's dominance in long-distance running is legendary, with athletes consistently winning major marathons and setting world records. The story behind this success combines natural talent, cultural factors, and dedicated training.

## The Kenyan Running Phenomenon

From the highlands of the Rift Valley emerge world-class athletes who dominate international competitions, bringing pride and recognition to Kenya on the global stage.

## Training Culture and Methods

The unique training methods, high-altitude environment, and running culture in Kenya create ideal conditions for developing world-class distance runners.

## Economic Impact of Athletics

Kenyan athletes contribute significantly to the country's economy through prize money, sponsorships, and promoting Kenya's international image.

## Future of Kenyan Athletics

With continued investment in sports infrastructure and youth development, Kenya's athletic excellence is set to continue for generations to come.`,
    likes: 87,
    comments: [
      {
        author: "Sports Analyst",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        content: "Kenya's running culture is truly unique and inspiring.",
        date: "6 hours ago",
      },
    ],
  },
  "kenya-agriculture": {
    title: "Kenya's Agricultural Innovation: Feeding Africa's Future",
    category: "Agriculture",
    date: "June 30, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Agriculture", "Innovation", "Food Security"],
    content: `<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop" alt="Kenyan farmers using modern techniques" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenyan farmers are revolutionizing agriculture through technology adoption, sustainable practices, and innovative approaches to food production, positioning the country as a leader in African agricultural development.

## Technology in Agriculture

From precision farming to mobile-based market access, technology is transforming how Kenyan farmers grow, harvest, and sell their crops.

## Sustainable Farming Practices

Climate-smart agriculture techniques are helping farmers adapt to changing weather patterns while maintaining productivity.

## Market Access and Value Addition

Innovative platforms are connecting farmers directly to markets, reducing middlemen and increasing farmer incomes.

## Future of Kenyan Agriculture

With continued innovation and support, Kenya's agricultural sector is poised to feed not just the nation but contribute to regional food security.`,
    likes: 156,
    comments: [
      {
        author: "Agricultural Expert",
        avatar: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=40&h=40&fit=crop&crop=face",
        content: "The innovation in Kenyan agriculture is remarkable.",
        date: "8 hours ago",
      },
    ],
  },
  "kenya-healthcare": {
    title: "Kenya's Healthcare Revolution: Digital Health Solutions",
    category: "Healthcare",
    date: "June 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Healthcare", "Digital Health", "Innovation"],
    content: `<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop" alt="Kenyan healthcare workers" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya's healthcare system is embracing digital innovation to improve access, quality, and efficiency of healthcare delivery across the country.

## Digital Health Innovations

From telemedicine platforms to mobile health apps, technology is making healthcare more accessible to Kenyans in remote areas.

## Community Health Programs

Community health volunteers equipped with digital tools are extending healthcare reach to underserved populations.

## Healthcare Infrastructure Development

Investment in healthcare infrastructure and training is strengthening Kenya's health system capacity.

## Future of Healthcare in Kenya

Digital health solutions and continued investment promise to transform healthcare delivery and outcomes for all Kenyans.`,
    likes: 134,
    comments: [
      {
        author: "Healthcare Professional",
        avatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=40&h=40&fit=crop&crop=face",
        content: "The digital health initiatives are making a real difference.",
        date: "4 hours ago",
      },
    ],
  },
  "kenya-tourism": {
    title: "Kenya's Tourism Renaissance: Sustainable Travel and Conservation",
    category: "Tourism",
    date: "July 2, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Tourism", "Conservation", "Sustainability"],
    content: `<img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=400&fit=crop" alt="Kenyan wildlife and tourists" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Kenya is redefining tourism through sustainable practices that balance economic growth with wildlife conservation and community development.

## Sustainable Tourism Model

Eco-lodges, community conservancies, and responsible tourism practices are setting new standards for sustainable travel in Africa.

## Wildlife Conservation Through Tourism

Tourism revenue directly supports conservation efforts, creating economic incentives for wildlife protection.

## Community Benefits

Local communities are active partners in tourism development, benefiting from employment and revenue sharing.

## Future of Kenyan Tourism

Sustainable tourism practices position Kenya as a leader in responsible travel and conservation tourism.`,
    likes: 178,
    comments: [
      {
        author: "Tourism Expert",
        avatar: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=40&h=40&fit=crop&crop=face",
        content: "Kenya's approach to sustainable tourism is exemplary.",
        date: "2 days ago",
      },
    ],
  },
  "kenya-infrastructure": {
    title: "Kenya's Infrastructure Boom: Building the Future",
    category: "Infrastructure",
    date: "July 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    tags: ["Kenya", "Infrastructure", "Development", "Transportation"],
    content: `<img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop" alt="Kenyan infrastructure projects" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">

Major infrastructure projects are transforming Kenya's connectivity and economic potential, positioning the country as a regional hub for trade and development.

## Transportation Revolution

The Standard Gauge Railway and expanded road networks are revolutionizing how people and goods move across Kenya and the region.

## Digital Infrastructure

Fiber optic networks and digital infrastructure are connecting Kenya to the global economy and enabling digital transformation.

## Energy Infrastructure

Renewable energy projects are providing clean, reliable power to support economic growth and development.

## Future Infrastructure Plans

Continued investment in infrastructure will strengthen Kenya's position as East Africa's economic hub.`,
    likes: 123,
    comments: [
      {
        author: "Infrastructure Expert",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        content: "The infrastructure development in Kenya is impressive.",
        date: "1 day ago",
      },
    ],
  },
}

// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const scrollToTopBtn = document.getElementById("scroll-to-top")
const typingText = document.getElementById("typing-text")
const searchToggle = document.getElementById("search-toggle")
const searchBar = document.getElementById("search-bar")
const searchClose = document.getElementById("search-close")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  // Start loading sequence
  setTimeout(() => {
    hideLoadingScreen()
    startTypingAnimation()
    initializeEventListeners()
    initializeIntersectionObserver()
    animateCounters()
    animateSkillBars()
  }, 3000)
}

// Loading Screen
function hideLoadingScreen() {
  if (loadingScreen) {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
      isLoading = false
      document.body.style.overflow = "auto"
    }, 500)
  }
}

// Typing Animation
function startTypingAnimation() {
  if (!typingText) return

  function typeText() {
    const currentText = typedTexts[typedTextIndex]

    if (!isDeleting && typedCharIndex < currentText.length) {
      typingText.textContent += currentText.charAt(typedCharIndex)
      typedCharIndex++
      setTimeout(typeText, 100)
    } else if (isDeleting && typedCharIndex > 0) {
      typingText.textContent = currentText.substring(0, typedCharIndex - 1)
      typedCharIndex--
      setTimeout(typeText, 50)
    } else {
      isDeleting = !isDeleting
      if (!isDeleting) {
        typedTextIndex = (typedTextIndex + 1) % typedTexts.length
      }
      setTimeout(typeText, 1000)
    }
  }

  typeText()
}

// Event Listeners
function initializeEventListeners() {
  // Navigation
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const section = link.getAttribute("data-section")
      if (section) {
        showSection(section)
        updateActiveNavLink(link)
      }
    })
  })

  // Hero buttons
  const heroButtons = document.querySelectorAll("[data-section]")
  heroButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const section = button.getAttribute("data-section")
      if (section) {
        showSection(section)
        updateActiveNavLink(document.querySelector(`[data-section="${section}"]`))
      }
    })
  })

  // Hamburger menu
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Search functionality
  if (searchToggle && searchBar && searchClose) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.add("active")
      document.getElementById("search-input").focus()
    })

    searchClose.addEventListener("click", () => {
      searchBar.classList.remove("active")
    })
  }

  // Scroll to top
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible")
      } else {
        scrollToTopBtn.classList.remove("visible")
      }
    })
  }

  // Filter buttons
  initializeFilters()

  // Poem interactions
  initializePoemInteractions()

  // Article interactions
  initializeArticleInteractions()

  // Contact form
  initializeContactForm()

  // Like buttons
  initializeLikeButtons()

  // Share buttons
  initializeShareButtons()

  // Modal functionality
  initializeModals()
}

// Section Navigation
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Show target section
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.classList.add("active")
    currentSection = sectionId
  }

  // Close mobile menu
  if (hamburger && navMenu) {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => link.classList.remove("active"))

  if (activeLink && activeLink.classList.contains("nav-link")) {
    activeLink.classList.add("active")
  } else {
    // Find the corresponding nav link
    const section = activeLink?.getAttribute("data-section")
    if (section) {
      const navLink = document.querySelector(`.nav-link[data-section="${section}"]`)
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  }
}

// Filters
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter")
      const parent = button.closest("section")

      // Update active filter button
      parent.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter items
      const items = parent.querySelectorAll("[data-category]")
      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "translateY(20px)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })
}

// Poem Interactions
function initializePoemInteractions() {
  const readPoemButtons = document.querySelectorAll(".read-poem-btn")
  readPoemButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const poemId = button.getAttribute("data-poem")
      openPoemModal(poemId)
    })
  })
}

function openPoemModal(poemId) {
  const poem = poemData[poemId]
  if (!poem) return

  const modal = document.getElementById("poem-modal")
  const title = document.getElementById("modal-poem-title")
  const content = document.getElementById("poem-full-content")

  if (modal && title && content) {
    title.textContent = poem.title
    content.textContent = poem.content
    modal.classList.add("active")
  }
}

// Article Interactions
function initializeArticleInteractions() {
  const readArticleButtons = document.querySelectorAll(".read-article-btn")
  readArticleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const articleId = button.getAttribute("data-article")
      openArticleModal(articleId)
    })
  })
}

function openArticleModal(articleId) {
  const article = articleData[articleId]
  if (!article) return

  const modal = document.getElementById("article-modal")
  const title = document.getElementById("modal-article-title")
  const content = document.getElementById("article-full-content")
  const meta = document.getElementById("modal-article-meta")
  const commentsList = document.getElementById("article-comments-list")

  if (modal && title && content) {
    title.textContent = article.title

    // Set meta information
    meta.innerHTML = `
      <span>${article.date}</span>
      <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">${article.category}</span>
      <span>${article.readTime}</span>
    `

    // Set article content
    content.innerHTML = article.content

    // Load comments
    if (article.comments && commentsList) {
      commentsList.innerHTML = article.comments
        .map(
          (comment) => `
        <div class="comment-item" style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius); margin-bottom: 1rem;">
          <div class="comment-header" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <img src="${comment.avatar}" alt="${comment.author}" style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover;">
              <strong style="color: var(--text-primary);">${comment.author}</strong>
            </div>
            <span style="color: var(--text-muted); font-size: 0.9rem;">${comment.date}</span>
          </div>
          <p style="color: var(--text-secondary); margin: 0;">${comment.content}</p>
        </div>
      `,
        )
        .join("")
    }

    modal.classList.add("active")
  }
}

// Like Buttons
function initializeLikeButtons() {
  const likeButtons = document.querySelectorAll(".like-btn")
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked")
      const icon = button.querySelector("i")
      const count = button.querySelector(".like-count")

      if (button.classList.contains("liked")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        if (count) {
          const currentCount = Number.parseInt(count.textContent)
          count.textContent = currentCount + 1
        }
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        if (count) {
          const currentCount = Number.parseInt(count.textContent)
          count.textContent = Math.max(0, currentCount - 1)
        }
      }
    })
  })
}

// Share Buttons
function initializeShareButtons() {
  const shareButtons = document.querySelectorAll(".share-btn")
  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const shareModal = document.getElementById("share-modal")
      if (shareModal) {
        shareModal.classList.add("active")
      }
    })
  })

  // Share options
  const shareOptions = document.querySelectorAll(".share-option")
  shareOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const platform = option.getAttribute("data-platform")
      handleShare(platform)
    })
  })
}

function handleShare(platform) {
  const url = window.location.href
  const title = document.title

  switch (platform) {
    case "facebook":
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
      break
    case "twitter":
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank",
      )
      break
    case "linkedin":
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
      break
    case "whatsapp":
      window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`, "_blank")
      break
    case "email":
      window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
      break
    case "copy":
      navigator.clipboard.writeText(url).then(() => {
        showNotification("Link copied to clipboard!")
      })
      break
  }

  // Close share modal
  const shareModal = document.getElementById("share-modal")
  if (shareModal) {
    shareModal.classList.remove("active")
  }
}

// Modals
function initializeModals() {
  const modals = document.querySelectorAll(".modal")
  const closeButtons = document.querySelectorAll(".modal-close")

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal")
      if (modal) {
        modal.classList.remove("active")
      }
    })
  })

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active")
      }
    })
  })
}

// Contact Form
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Simulate form submission
      showNotification("Message sent successfully! I'll get back to you soon.")
      contactForm.reset()
    })
  }

  // Newsletter forms
  const newsletterForms = document.querySelectorAll(".newsletter-form, .footer-newsletter")
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      showNotification("Successfully subscribed to newsletter!")
      form.reset()
    })
  })
}

// Animations
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]")

  const animateCounter = (counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  }

  counters.forEach((counter) => {
    animateCounter(counter)
  })
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress[data-width]")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width
        }, 500)
        observer.unobserve(bar)
      }
    })
  })

  skillBars.forEach((bar) => observer.observe(bar))
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".poem-card, .blog-card, .project-card, .preview-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Notifications
function showNotification(message, type = "success") {
  const container = document.getElementById("notification-container")
  if (!container) return

  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `

  // Add styles for notification
  notification.style.cssText = `
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 1rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 4px 12px var(--shadow-color);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  container.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Close button
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      container.removeChild(notification)
    }, 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (container.contains(notification)) {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (container.contains(notification)) {
          container.removeChild(notification)
        }
      }, 300)
    }
  }, 5000)
}

// Theme Toggle (if needed)
const themeToggle = document.getElementById("theme-toggle")
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Since we're using a dark theme by default, this could toggle to light mode
    document.body.classList.toggle("light-theme")
    const icon = themeToggle.querySelector("i")
    if (document.body.classList.contains("light-theme")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
  })
}

// Search functionality
const searchInput = document.getElementById("search-input")
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase()
    // This would typically search through poems, blog posts, and projects
    // For now, it's just a placeholder
    console.log("Searching for:", query)
  })
}

// Load more functionality
const loadMoreBtns = document.querySelectorAll(".load-more-btn")
loadMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Simulate loading more content
    showNotification("Loading more content...")
    setTimeout(() => {
      showNotification("More content loaded!")
    }, 1000)
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Initialize tooltips
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]")
  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const tooltip = document.createElement("div")
      tooltip.className = "tooltip"
      tooltip.textContent = element.getAttribute("data-tooltip")
      tooltip.style.cssText = `
                position: absolute;
                background: var(--bg-tertiary);
                color: var(--text-primary);
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
            `
      document.body.appendChild(tooltip)

      const rect = element.getBoundingClientRect()
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
      tooltip.style.top = rect.bottom + 10 + "px"
    })

    element.addEventListener("mouseleave", () => {
      const tooltip = document.querySelector(".tooltip")
      if (tooltip) {
        document.body.removeChild(tooltip)
      }
    })
  })
}

// Initialize tooltips after DOM is loaded
setTimeout(initializeTooltips, 100)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // Close modals with Escape key
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal.active")
    if (activeModal) {
      activeModal.classList.remove("active")
    }

    // Close search bar
    if (searchBar && searchBar.classList.contains("active")) {
      searchBar.classList.remove("active")
    }
  }
})

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
initializeLazyLoading()

console.log("Purelyalex website initialized successfully!")
