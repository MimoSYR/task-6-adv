import { createSlice } from "@reduxjs/toolkit";
import type { PostsState } from "../../interfaces/interfaces";

const postsData = [
  {
    id: 1,
    title: "Grid system for better Design User Interface",
    image: "/blogs/blog7.png",
    author: "Sarah Chen",
    categories: ["Design", "UI/UX", "Frameworks"],
    paragraph: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements.",
    sections: [
      {
        id: 1,
        title: "Definition: A grid is made up of columns, gutters, and margins",
        image: "/blogs/blog1-sec1.png",
        paragraph: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid. Each serves different design needs and content structures."
      },
      {
        id: 2,
        title: "Examples of Grids in Use",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Real-world examples from popular websites showing how different grid systems are implemented in e-commerce, portfolios, and news platforms."
      },
      {
        id: 3,
        title: "Benefits of the Grid",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Grids improve alignment, consistency, and responsiveness. They help both designers and developers create more maintainable and scalable interfaces."
      },
      {
        id: 4,
        title: "Choosing and Setting Up Your Grid",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Practical guidelines for selecting the right grid type based on content needs and setting up grids in design tools like Figma and Sketch."
      }
    ]
  },
  {
    id: 2,
    title: "The Psychology of Color in UI Design",
    image: "/blogs/blog3.png",
    author: "Marcus Rodriguez",
    categories: ["Design", "UI/UX", "Research"],
    paragraph: "Color influences user perception, emotions, and behavior. Understanding color psychology helps create interfaces that communicate effectively and drive desired actions.",
    sections: [
      {
        id: 1,
        title: "Understanding Color Theory Basics",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Learn about color harmony, contrast, and temperature. The color wheel shows primary, secondary, and tertiary colors and their relationships."
      },
      {
        id: 2,
        title: "Emotional Impact of Colors",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Different colors evoke different emotions: blue for trust, red for urgency, green for growth. This chart illustrates common emotional associations."
      },
      {
        id: 3,
        title: "Accessibility and Color Contrast",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Ensuring sufficient contrast between text and background for readability. This example shows WCAG compliance levels for different color combinations."
      },
      {
        id: 4,
        title: "Creating Effective Color Palettes",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Step-by-step guide to building cohesive color systems with primary, secondary, and accent colors that work together harmoniously."
      }
    ]
  },
  {
    id: 3,
    title: "Responsive Design Best Practices for 2024",
    image: "/blogs/blog9.png",
    author: "Alexandra Kim",
    categories: ["Web Development", "Design", "Tools"],
    paragraph: "Creating websites that work seamlessly across all devices requires modern responsive design techniques and flexible layouts.",
    sections: [
      {
        id: 1,
        title: "Mobile-First Approach: Why It Matters",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Starting with mobile constraints leads to cleaner, more focused designs that scale up effectively to larger screens."
      },
      {
        id: 2,
        title: "Breakpoint Strategy",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Determining optimal breakpoints based on content rather than specific devices. This diagram shows fluid transitions between screen sizes."
      },
      {
        id: 3,
        title: "Flexible Images and Media",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Techniques for making images and videos responsive using CSS properties like max-width: 100% and srcset attributes."
      },
      {
        id: 4,
        title: "Testing Across Devices",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Tools and methods for testing responsive designs on various devices and screen sizes to ensure consistent user experience."
      }
    ]
  },
  {
    id: 4,
    title: "Typography Principles for Digital Interfaces",
    image: "/blogs/blog2.png",
    author: "David Park",
    categories: ["Design", "UI/UX", "Web Development"],
    paragraph: "Effective typography enhances readability, establishes hierarchy, and communicates brand personality in digital products.",
    sections: [
      {
        id: 1,
        title: "Choosing the Right Font Pairings",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Examples of complementary font combinations that create visual interest while maintaining readability and hierarchy."
      },
      {
        id: 2,
        title: "Establishing Clear Hierarchy",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Using font sizes, weights, and spacing to guide users through content in order of importance and relevance."
      },
      {
        id: 3,
        title: "Readability and Line Length",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Optimal line length (50-75 characters) and line height (1.5-2x) for comfortable reading on digital screens."
      },
      {
        id: 4,
        title: "Web Fonts Performance",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Balancing aesthetic choices with performance considerations when loading custom fonts on the web."
      }
    ]
  },
  {
    id: 5,
    title: "Micro-interactions: The Secret to Engaging UI",
    image: "/blogs/blog6.png",
    author: "Olivia Martinez",
    categories: ["UI/UX", "Design", "Animation"],
    paragraph: "Small animations and feedback moments significantly improve user experience by providing clarity and delight.",
    sections: [
      {
        id: 1,
        title: "Types of Micro-interactions and Their Uses",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Categorizing micro-interactions: system status, navigation, data input, and call-to-action feedback mechanisms."
      },
      {
        id: 2,
        title: "Button and Hover States",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Examples of effective button feedback including hover, active, and disabled states with subtle animations."
      },
      {
        id: 3,
        title: "Loading and Progress Indicators",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Creative approaches to loading states that keep users informed and engaged during wait times."
      },
      {
        id: 4,
        title: "Success and Error Feedback",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Visual and animated feedback for successful actions and error conditions that guide users appropriately."
      }
    ]
  },
  {
    id: 6,
    title: "Accessibility in Web Design: A Complete Guide",
    image: "/blogs/blog10.png",
    author: "James Wilson",
    categories: ["Web Development", "UI/UX", "Standards"],
    paragraph: "Creating inclusive designs ensures everyone can use your products regardless of ability, leading to better experiences for all users.",
    sections: [
      {
        id: 1,
        title: "WCAG Guidelines Explained",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Understanding the four principles of WCAG: Perceivable, Operable, Understandable, and Robust with practical examples."
      },
      {
        id: 2,
        title: "Keyboard Navigation Focus",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Visual indicators and logical tab order for users who navigate without a mouse, showing focus states and skip links."
      },
      {
        id: 3,
        title: "Screen Reader Compatibility",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Proper HTML semantics, ARIA labels, and landmark roles that make interfaces understandable through assistive technology."
      },
      {
        id: 4,
        title: "Color and Contrast Accessibility",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Tools and techniques for checking and ensuring sufficient color contrast ratios for text and interactive elements."
      }
    ]
  },
  {
    id: 7,
    title: "Dark Mode Design: Benefits and Implementation",
    image: "/blogs/blog4.png",
    author: "Sophia Lee",
    categories: ["Design", "UI/UX", "Tools"],
    paragraph: "Dark themes reduce eye strain and save battery life while offering users aesthetic preferences in modern interfaces.",
    sections: [
      {
        id: 1,
        title: "Color Palette Selection for Dark Themes",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Choosing dark background colors that aren't pure black and accent colors that maintain vibrancy in low-light conditions."
      },
      {
        id: 2,
        title: "Contrast and Depth in Dark Mode",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Using elevation and shadow effects differently in dark mode to create depth without harsh contrasts."
      },
      {
        id: 3,
        title: "Accessibility Considerations",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Maintaining readability and sufficient contrast ratios when switching from light to dark themes."
      },
      {
        id: 4,
        title: "Implementation with CSS Variables",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Using CSS custom properties to create easily switchable color themes throughout your application."
      }
    ]
  },
  {
    id: 8,
    title: "Design Systems: Building Consistent UI Libraries",
    image: "/blogs/blog8.png",
    author: "Michael Thompson",
    categories: ["Design", "Tools", "Frameworks"],
    paragraph: "Design systems create consistency, improve efficiency, and scale design across products and teams.",
    sections: [
      {
        id: 1,
        title: "Component-Based Architecture Fundamentals",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Breaking down interfaces into reusable atomic components: atoms, molecules, organisms, templates, and pages."
      },
      {
        id: 2,
        title: "Documentation and Guidelines",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Creating comprehensive documentation including usage guidelines, code examples, and design principles."
      },
      {
        id: 3,
        title: "Version Control for Design Assets",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Managing design tokens, components, and patterns with version control systems similar to code repositories."
      },
      {
        id: 4,
        title: "Implementation and Adoption",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Strategies for rolling out design systems across teams and ensuring consistent adoption and maintenance."
      }
    ]
  },
  {
    id: 9,
    title: "Loading States and Skeleton Screens",
    image: "/blogs/blog1.png",
    author: "Emma Johnson",
    categories: ["UI/UX", "Design", "Performance"],
    paragraph: "Thoughtful loading experiences improve perceived performance and keep users engaged during wait times.",
    sections: [
      {
        id: 1,
        title: "Types of Loading Indicators",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Progress bars, spinners, skeleton screens, and progressive loading techniques for different scenarios."
      },
      {
        id: 2,
        title: "Skeleton Screen Benefits",
        image: "/blogs/blog1-sec2.png",
        paragraph: "How skeleton screens reduce perceived load time by showing content structure before actual content loads."
      },
      {
        id: 3,
        title: "Progressive Loading Patterns",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Loading critical content first, then non-essential elements, creating a smoother user experience."
      },
      {
        id: 4,
        title: "Error and Empty States",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Designing graceful fallbacks for failed loads and empty content states that guide users forward."
      }
    ]
  },
  {
    id: 10,
    title: "Whitespace in UI Design: The Power of Negative Space",
    image: "/blogs/blog5.png",
    author: "Benjamin Davis",
    categories: ["Design", "UI/UX", "Visual Design"],
    paragraph: "Strategic use of whitespace improves readability, creates focus, and enhances overall aesthetic appeal.",
    sections: [
      {
        id: 1,
        title: "Balancing Content and Space",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Examples showing the transformation of cluttered interfaces into clean designs through proper spacing."
      },
      {
        id: 2,
        title: "Grouping and Separation Principles",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Using proximity and whitespace to group related elements and separate unrelated ones based on Gestalt principles."
      },
      {
        id: 3,
        title: "Vertical Rhythm and Consistency",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Establishing consistent vertical spacing using modular scales and baseline grids for harmonious layouts."
      },
      {
        id: 4,
        title: "Whitespace in Different Contexts",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Adjusting whitespace based on device size, content type, and user goals for optimal experience."
      }
    ]
  },
  {
    id: 11,
    title: "Navigation Patterns for Modern Web Applications",
    image: "/blogs/blog3.png",
    author: "Isabella Garcia",
    categories: ["UI/UX", "Web Development", "Mobile"],
    paragraph: "Effective navigation helps users find what they need quickly and intuitively, reducing frustration and improving engagement.",
    sections: [
      {
        id: 1,
        title: "Hamburger Menu vs Tab Bar",
        image: "/blogs/blog1-sec1.png",
        paragraph: "When to use hamburger menus for complex navigation and when tab bars work better for primary actions."
      },
      {
        id: 2,
        title: "Breadcrumbs and Wayfinding",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Using breadcrumb navigation to show hierarchy and help users understand their location within complex sites."
      },
      {
        id: 3,
        title: "Mega Menus for Complex Sites",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Designing mega menus that expose deep navigation structures without overwhelming users."
      },
      {
        id: 4,
        title: "Mobile Navigation Best Practices",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Thumb-friendly navigation patterns, bottom navigation bars, and gesture-based navigation for mobile devices."
      }
    ]
  },
  {
    id: 12,
    title: "Form Design Best Practices",
    image: "/blogs/blog7.png",
    author: "William Brown",
    categories: ["UI/UX", "Design", "SaaS"],
    paragraph: "Well-designed forms convert better by reducing friction and making data entry as easy as possible for users.",
    sections: [
      {
        id: 1,
        title: "Reducing Form Friction",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Examples of complex forms redesigned into simple, multi-step processes that increase completion rates."
      },
      {
        id: 2,
        title: "Label Placement and Input Design",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Comparing top-aligned, left-aligned, and floating labels for different form contexts and user needs."
      },
      {
        id: 3,
        title: "Real-time Validation and Feedback",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Providing immediate, helpful feedback as users complete form fields to prevent errors before submission."
      },
      {
        id: 4,
        title: "Accessible Form Elements",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Ensuring all form controls are keyboard accessible and properly labeled for screen readers."
      }
    ]
  },
  {
    id: 13,
    title: "Animation in UI: When and How to Use It",
    image: "/blogs/blog9.png",
    author: "Chloe Anderson",
    categories: ["UI/UX", "Animation", "Performance"],
    paragraph: "Purposeful animation enhances user understanding, provides feedback, and creates engaging experiences.",
    sections: [
      {
        id: 1,
        title: "Principles of Motion Design",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Applying Disney's 12 principles of animation to UI design for natural-feeling motion and transitions."
      },
      {
        id: 2,
        title: "Functional vs Decorative Animation",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Differentiating between animations that serve a purpose (like showing state changes) and purely aesthetic ones."
      },
      {
        id: 3,
        title: "Performance Considerations",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Choosing CSS transforms over other properties and optimizing animations for smooth 60fps performance."
      },
      {
        id: 4,
        title: "Accessibility and Motion Preferences",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Respecting user preferences for reduced motion and providing alternatives for essential animations."
      }
    ]
  },
  {
    id: 14,
    title: "Card-Based Design: Organizing Content Effectively",
    image: "/blogs/blog2.png",
    author: "Daniel Taylor",
    categories: ["Design", "UI/UX", "Mobile"],
    paragraph: "Cards provide flexible containers for content that work well across different screen sizes and contexts.",
    sections: [
      {
        id: 1,
        title: "Card Anatomy and Variations",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Breaking down card components: image, title, description, actions, and metadata with examples of different layouts."
      },
      {
        id: 2,
        title: "Grid vs List Card Layouts",
        image: "/blogs/blog1-sec2.png",
        paragraph: "When to use grid layouts for browsing and list layouts for detailed information comparison."
      },
      {
        id: 3,
        title: "Interactive Card States",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Designing hover, focus, and selected states for cards to provide clear interactive feedback."
      },
      {
        id: 4,
        title: "Accessibility in Card Design",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Ensuring cards are keyboard navigable and properly announced by screen readers with semantic markup."
      }
    ]
  },
  {
    id: 15,
    title: "Visual Hierarchy in Web Design",
    image: "/blogs/blog6.png",
    author: "Ava Williams",
    categories: ["Design", "UI/UX", "Psychology"],
    paragraph: "Clear visual hierarchy guides users through content in order of importance, improving comprehension and engagement.",
    sections: [
      {
        id: 1,
        title: "Tools for Creating Hierarchy",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Using size, color, contrast, spacing, and typography to establish clear visual importance levels."
      },
      {
        id: 2,
        title: "F-Pattern and Z-Pattern Scanning",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Designing layouts that accommodate natural eye movement patterns for western readers."
      },
      {
        id: 3,
        title: "Content Prioritization Techniques",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Methods for determining what content should get visual prominence based on user goals and business objectives."
      },
      {
        id: 4,
        title: "Mobile Hierarchy Considerations",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Adapting visual hierarchy for smaller screens by simplifying layouts and using progressive disclosure."
      }
    ]
  },
  {
    id: 16,
    title: "Button Design: From Basic to Advanced",
    image: "/blogs/blog10.png",
    author: "Lucas Miller",
    categories: ["UI/UX", "Design", "Components"],
    paragraph: "Buttons are primary interactive elements that guide user actions and conversions through thoughtful design.",
    sections: [
      {
        id: 1,
        title: "Button States and Feedback",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Designing comprehensive button states: default, hover, active, focus, disabled with clear visual feedback."
      },
      {
        id: 2,
        title: "Primary vs Secondary Actions",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Establishing clear visual distinction between primary and secondary buttons to guide user decisions."
      },
      {
        id: 3,
        title: "Accessible Button Design",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Ensuring sufficient size, contrast, and keyboard operability for all button interactions."
      },
      {
        id: 4,
        title: "Modern Button Trends",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Exploring contemporary button styles including floating action buttons, icon buttons, and animated CTA buttons."
      }
    ]
  },
  {
    id: 17,
    title: "Error State Design: Turning Problems into Opportunities",
    image: "/blogs/blog4.png",
    author: "Mia Moore",
    categories: ["UI/UX", "Design", "SaaS"],
    paragraph: "Helpful error messages and recovery paths transform frustrating moments into positive user experiences.",
    sections: [
      {
        id: 1,
        title: "Types of Error Messages",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Categorizing errors: validation errors, system errors, network errors, and designing appropriate responses for each."
      },
      {
        id: 2,
        title: "Human-Readable Error Copy",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Writing clear, helpful, and non-technical error messages that explain problems and suggest solutions."
      },
      {
        id: 3,
        title: "Visual Design of Error States",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Using color, icons, and positioning to make errors noticeable without being alarming or disruptive."
      },
      {
        id: 4,
        title: "Recovery and Next Steps",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Providing clear paths to fix errors, including auto-correction suggestions and undo options."
      }
    ]
  },
  {
    id: 18,
    title: "Data Visualization in Dashboards",
    image: "/blogs/blog8.png",
    author: "Henry Jackson",
    categories: ["Data Visualization", "UI/UX", "Analytics"],
    paragraph: "Effective data visualization helps users understand complex information quickly and make informed decisions.",
    sections: [
      {
        id: 1,
        title: "Choosing the Right Chart Types",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Matching visualization types to data relationships: bar charts for comparison, line charts for trends, pie charts for parts of a whole."
      },
      {
        id: 2,
        title: "Dashboard Layout and Hierarchy",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Organizing dashboard elements by importance with clear visual hierarchy and logical grouping."
      },
      {
        id: 3,
        title: "Interactive Data Exploration",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Adding filtering, drill-down, and hover details to make dashboards more engaging and informative."
      },
      {
        id: 4,
        title: "Mobile Dashboard Design",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Adapting complex data visualizations for smaller screens with simplified views and progressive disclosure."
      }
    ]
  },
  {
    id: 19,
    title: "Onboarding UX: First Impressions Matter",
    image: "/blogs/blog1.png",
    author: "Ella White",
    categories: ["UI/UX", "SaaS", "Research"],
    paragraph: "Effective onboarding introduces users to your product's value and features, increasing retention and satisfaction.",
    sections: [
      {
        id: 1,
        title: "Onboarding Patterns and Strategies",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Comparing different approaches: feature tours, progressive disclosure, setup wizards, and empty states with guidance."
      },
      {
        id: 2,
        title: "Personalized Onboarding Flows",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Creating adaptive onboarding experiences based on user type, goals, and initial interactions."
      },
      {
        id: 3,
        title: "Progress Indicators and Motivation",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Using progress bars and achievement markers to encourage completion of onboarding steps."
      },
      {
        id: 4,
        title: "Measuring Onboarding Success",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Key metrics to track: completion rates, time to first value, and feature adoption after onboarding."
      }
    ]
  },
  {
    id: 20,
    title: "Performance Optimization for Better UX",
    image: "/blogs/blog5.png",
    author: "Noah Harris",
    categories: ["Web Development", "Performance", "Tools"],
    paragraph: "Fast, responsive interfaces directly impact user satisfaction, conversion rates, and overall product success.",
    sections: [
      {
        id: 1,
        title: "Frontend Performance Techniques",
        image: "/blogs/blog1-sec1.png",
        paragraph: "Key metrics to optimize: First Contentful Paint, Time to Interactive, and Cumulative Layout Shift."
      },
      {
        id: 2,
        title: "Image and Asset Optimization",
        image: "/blogs/blog1-sec2.png",
        paragraph: "Choosing correct formats (WebP, AVIF), responsive images, and lazy loading strategies."
      },
      {
        id: 3,
        title: "Code Splitting and Lazy Loading",
        image: "/blogs/blog1-sec3.png",
        paragraph: "Loading only necessary code for the current view and deferring non-critical resources."
      },
      {
        id: 4,
        title: "Perceived Performance Strategies",
        image: "/blogs/blog1-sec4.png",
        paragraph: "Using skeleton screens, optimistic updates, and smooth transitions to make interfaces feel faster."
      }
    ]
  }
];

const initialState : PostsState = {
    allPosts: postsData,
    pagination: {
        currentPage: 1,
        postsPerPage:6,
    },

    // recent opened posts
    recentPostsIds:[]
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

        //////// pagination actions /////////

        // on next page
        nextPage: (state) => {
            state.pagination.currentPage +=1;
        },
        // on prev page
        prevPage: (state) => {
            state.pagination.currentPage -=1;
        },
        // on click page
        clickPage: (state, action) => {
            state.pagination.currentPage = action.payload; //pass the current page number to the reducer state
        },
        // change posts per page
        // changeShownPosts: (state) => {
        //     // state.shownBlogs = 
        // }
    },
})

export const { nextPage, prevPage, clickPage } = postsSlice.actions
export default postsSlice.reducer