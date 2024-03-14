import SidebarTitleComponent from "../components/SidebarTitleComponent";

export default {
    /* Top right links */
    "home": {
        "title": "Home",
        "type": "page",
        "href": "https://getomni.app"
      },
      "api-docs": {
        "title": "API ↗",
        "type": "page",
        "href": "https://getomni.app/api",
        "newWindow": true
      },


    'index': {
        title: 'Introduction',
        "theme": {
            "layout": "full"
        }
    },
    'readme': {
        title: 'Open Source'
    },
    'use-cases': {
        title: 'Use Cases',
    },
    '-- For users': {
        type: 'separator',
        "title": <SidebarTitleComponent>For users</SidebarTitleComponent>
    },
    'guide': {
        title: 'Guides for Integrations',
    },
    'creative-tools': {
        title: 'Creative suite',
        defaultMenuCollapsed: true
    },
    '-- Commercial use': {
        type: 'separator',
        "title":  <SidebarTitleComponent>Commercial use</SidebarTitleComponent>
    },
    'commercial': {
        title: 'Commercial',
        "display": "children",
    },
    // 'commercial/getting-started': {
    //     title: 'Getting Started',
    // },
    'upload-content': {
        title: 'Send us your content ↗',
        "href": "https://docs.google.com/forms/d/1begM4VfB0s5kWDUXLhwviJXF8QoRekW8fafNuv25bJY/viewform?edit_requested=true",
        "newWindow": true
    },
    // 'pricing': {
    //     title: 'Pricing',
    // },
    '-- For developers': {
        type: 'separator',
        "title": <SidebarTitleComponent>For developers</SidebarTitleComponent>
    },
    'developers': {
        title: 'For Developers',
        display: 'children'
    },
    // 'examples': {
    //     title: 'Examples',
    // },
    

    '--': {
        type: 'separator',
    },
    'request-a-feature': {
        title: '🚀 Request a feature',
        "href": "https://getomni.canny.io/feature-requests",
        "newWindow": true
    },
    'bugs': {
        title: '🐛 Report a bug',
        "href": "https://getomni.canny.io/bugs",
        "newWindow": true
    },
    'blog': {
        title: '📕 Blogs',
    },


    
}